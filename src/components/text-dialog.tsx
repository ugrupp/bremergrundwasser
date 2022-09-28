import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CloseIcon from "../assets/icons/menu-close.svg";

type TextDialogProps = JSX.IntrinsicElements["div"] & {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const TextDialog = ({
  children,
  open,
  setOpen,
}: TextDialogProps): JSX.Element => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        {/* Background */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-0 md:bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* Content */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-30 md:px-30 md:max-w-5xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white shadow-2xl px-20 sm:px-40 md:px-50 py-60">
                  <button
                    type="button"
                    className="absolute top-30 sm:top-20 md:top-25 right-20 md:right-25"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Overlay schließen</span>
                    <CloseIcon
                      className="h-30 w-30 md:h-40 md:w-40"
                      aria-hidden="true"
                    />
                  </button>

                  <div className="w-full">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default TextDialog;
