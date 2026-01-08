'use client'

import type { CheckboxProps } from '@radix-ui/react-checkbox'
import {
  useForm,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Checkbox } from './ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'

export type FormCheckboxProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  label: string
  asChild?: boolean
} & CheckboxProps

export default function FormCheckbox<T extends FieldValues>({
  control,
  name,
  label,
  asChild,
  ...props
}: FormCheckboxProps<T>) {
  const methods = useForm()

  return (
    <Form {...methods}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                asChild={asChild}
                {...props}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </FormItem>
        )}
      />
    </Form>
  )
}
