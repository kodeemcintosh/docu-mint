
import { useState, useEffect, PropsWithChildren } from "react"
import { Dialog } from '@headlessui/react'
import { Portal } from '@components/Portal';

interface ModalProps extends PropsWithChildren {
  title?: string,
  isOpen: boolean,
  close: () => void,
  description?: string,
  className?: string,
}
export const Modal = ({ children, title, isOpen, close, description, className }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: any) => e.key === "Escape" ? close() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [close]);

  if (!isOpen) return null;
  return (
    <Portal wrapperId="portal-modal">
      <Dialog
        open={isOpen}
        onClose={close}
        className={`${className} relative z-50`}
      >
        <div className="fixed inset-0 bg-black/50 blur-md" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md w-1/3 rounded bg-white z-60">
            {!!title ? <Dialog.Title className="text-black px-4 py-2 border-b-2">{title}</Dialog.Title> : null}

            {!!description ? <Dialog.Description className="text-black">{description}</Dialog.Description> : null}

            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Portal>
  )
}