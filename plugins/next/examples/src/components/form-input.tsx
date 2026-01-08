import {
  useForm,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Form, FormControl, FormField } from './ui/form'
import { Input } from './ui/input'

export type FormInputProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  maxLength?: number
} & React.InputHTMLAttributes<HTMLInputElement>

export default function FormInput<T extends FieldValues>({
  control,
  name,
  ...props
}: FormInputProps<T>) {
  const form = useForm()

  return (
    <Form {...form}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl>
            <Input
              {...field}
              {...props}
              onChange={(event) => {
                const value = event.target.value
                let changeValue: unknown = value
                if (props.type === 'number') {
                  changeValue = value === '' ? '' : Number(value)
                }
                field.onChange(changeValue)
              }}
            />
          </FormControl>
        )}
      />
    </Form>
  )
}
