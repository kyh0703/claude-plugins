import { cn } from '../lib/utils'

type FormHeaderProps = {
  icon?: React.ReactNode
  title: string
  required?: boolean
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FormHeader({
  icon,
  title,
  required = false,
  description,
  size = 'lg',
}: Readonly<FormHeaderProps>) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className="flex w-full items-center justify-start gap-1 text-nowrap">
      {icon && <span>{icon}</span>}
      <h3
        className={cn(
          `${sizeClasses[size]} text-foreground/80 text-sm font-medium`,
        )}
      >
        {title}
      </h3>
      {description && (
        <span className="text-foreground/60 text-xs">({description})</span>
      )}
      {required && <span className="text-red-500">*</span>}
    </div>
  )
}
