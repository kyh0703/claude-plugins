import type { RadioGroupProps } from '@radix-ui/react-radio-group'
import type { PropsWithChildren } from 'react'
import {
  useForm,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { cn } from '../lib/utils'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { RadioGroup } from './ui/radio-group'

export type FormRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & RadioGroupProps &
  PropsWithChildren

export default function FormRadioGroup<T extends FieldValues>({
  control,
  name,
  children,
  className,
  ...props
}: FormRadioGroupProps<T>) {
  const methods = useForm()

  return (
    <Form {...methods}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <RadioGroup
                className={cn(className)}
                defaultValue={
                  typeof field.value === 'boolean'
                    ? field.value.toString()
                    : field.value
                }
                onValueChange={(value: string) => {
                  if (value === 'true') {
                    field.onChange(true)
                  } else if (value === 'false') {
                    field.onChange(false)
                  } else {
                    field.onChange(value)
                  }
                }}
                {...props}
              >
                {children}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  )
}
