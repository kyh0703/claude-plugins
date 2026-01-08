'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export type DatePickerProps = {
  placeholder: string
  initializeDate?: Date
  onChange?: (date?: Date) => void
}

export function DatePicker({
  placeholder,
  initializeDate,
  onChange,
}: Readonly<DatePickerProps>) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(initializeDate)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : placeholder}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
              onChange?.(date)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
