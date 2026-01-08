import type { SelectProps } from '@radix-ui/react-select'
import type { PropsWithChildren } from 'react'
import {
  useForm,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select'
import { cn } from '../lib/utils'

export type FormSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  className?: string
  placeholder?: string
  onValueChange?: (value: string) => void
} & SelectProps &
  PropsWithChildren

export default function FormSelect<T extends FieldValues>({
  control,
  name,
  className,
  placeholder,
  children,
  onValueChange,
  ...props
}: FormSelectProps<T>) {
  const methods = useForm()

  return (
    <Form {...methods}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <Select
              key={field.value}
              defaultValue={
                typeof field.value === 'boolean'
                  ? String(field.value)
                  : field.value
              }
              onValueChange={(value) => {
                onValueChange?.(value)
                let parsedValue: string | boolean = value
                if (value === '\u00A0') {
                  parsedValue = ''
                } else if (value === 'true' || value === 'false') {
                  parsedValue = value === 'true'
                }
                field.onChange(parsedValue)
              }}
              {...props}
            >
              <FormControl>
                <SelectTrigger className={cn('w-full', className)}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{children}</SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </Form>
  )
}
