'use client'

import { DialogDescription } from '@radix-ui/react-dialog'
import { Suspense, type PropsWithChildren } from 'react'
import { cn } from '../lib/utils'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Spinner } from './ui/spinner'

type ModalProps = {
  isOpen?: boolean
  title?: string
  description?: string
  className?: string
  onExit?: () => void
} & PropsWithChildren

const Modal = ({
  children,
  title,
  description,
  className,
  isOpen = false,
  onExit,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onExit}>
      <DialogContent
        className={cn(
          'max-w-6xl',
          'min-w-2xl',
          'flex flex-col items-center justify-center gap-5',
          'text-dialog-foreground bg-card p-6',
          'border-border rounded-sm border shadow-lg',
          className,
        )}
      >
        <DialogHeader className="mx-auto flex w-full flex-col items-start justify-between space-y-0">
          <DialogTitle className={cn('font-poppins text-xl font-semibold')}>
            {title}
          </DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="w-full">
          <Suspense fallback={<Spinner className="text-primary size-8" />}>
            {children}
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const ModalContent = ({ children }: PropsWithChildren) => (
  <div className="bg-card text-card-foreground z-10 max-h-120 w-full space-y-6 overflow-y-auto rounded-sm p-5 whitespace-pre-line">
    {children}
  </div>
)

const ModalAction = ({ children }: PropsWithChildren) => (
  <div className="mt-5 flex w-full justify-end gap-4">{children}</div>
)

export { Modal, ModalAction, ModalContent }
