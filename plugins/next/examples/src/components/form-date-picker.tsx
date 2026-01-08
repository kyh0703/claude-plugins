'use client'

import {
  useForm,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { DatePicker, type DatePickerProps } from './ui/date-picker'
import { Form, FormControl, FormField } from './ui/form'

export type FormDatePickerProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & DatePickerProps

export default function FormDatePicker<T extends FieldValues>({
  control,
  name,
  ...props
}: FormDatePickerProps<T>) {
  const methods = useForm()

  return (
    <Form {...methods}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl>
            <DatePicker
              initializeDate={field.value}
              onChange={(date) => field.onChange(date)}
              {...props}
            />
          </FormControl>
        )}
      />
    </Form>
  )
}
