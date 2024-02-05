
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title?: string
}
export const Card = ({ children, title = "" }: CardProps) => {
  return (
    <section className="flex h-fit w-full justify-between py-2">
      <div className="w-full p-2">
        {!!title ? <span className="flex w-full flex-row align-middle items-center justify-between rounded-lg px-4 py-2 text-left text-sm bg-neutral-300 text-black font-medium focus:outline-none">
          <span className="flex flex-row w-full items-center gap-x-4">
            {title}
          </span>
        </span> : null}
        <div className="flex flex-col w-full pb-2 pt-4 text-sm text-gray-500">
          {children}
        </div>
      </div>
    </section>
  );
}
