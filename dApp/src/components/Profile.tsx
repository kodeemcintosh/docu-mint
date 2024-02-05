
import { useState, useEffect, PropsWithChildren } from "react";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { normalize } from 'viem/ens';
import { useSidebar } from "@hooks/useSidebar";

export interface ProfileProps extends PropsWithChildren {}
export const Profile = ({ children }: ProfileProps) => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  // const { data: ensAvatar } = useEnsAvatar({ name: normalize(ensName) ?? "" })

  // useEffect(() => {
  //   setTimeout(() => setIsOpen(false), 10000);
  // }, [isOpen === true])

  const abbreviated = !!address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  const toggle = () => {
    setIsOpen((prev) => !prev)
    toggleSidebar();
  }

  return (
    <>
      {/* <div className={`${!isSidebarOpen ? "border-white text-white" : "border-black text-black"} border-[2px] px-2 py-1 z-20`}> */}
      <div className="border-white border-[2px] px-2 py-1">
        <button className="flex flex-col cursor-pointer align-middle content-center gap-y-1" onClick={toggle}>
          {/* {!!ensAvatar && <img className="size-10" alt="ENS Avatar" src={ensAvatar} />} */}
          {!!ensName ? ensName : abbreviated}
        </button>
        {isOpen ?
          <>
            <span className="flex flex-row w-full bg-white h-[2px]" />
            {children}
          </> :
        null}
      </div>
    </>
  );
}