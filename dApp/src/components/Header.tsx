
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { MagicButton } from "@components/MagicButton";
import { Profile } from "@components/Profile";
import { Transition } from "@headlessui/react";
// import { FiSidebar } from "react-icons/fi";

interface HeaderProps {}
export const Header = () => {
  const [clickCount, setClickCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <header className="absolute flex flex-row w-full h-20 justify-between items-center px-10 py-5 mt-2">
      <Transition
        className="flex flex-row w-fit gap-x-20"
        show={show}
        enter="ease-in duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        >
      {/* <Link href="/"> */}
        <a className="cursor-pointer" href={process.env.NEXT_PUBLIC_DOMAIN}>
          <span className="h-fit font-semibold text-3xl sm:text-md border-white border-[2px] px-2 py-[2px]">docu-<span className="text-green-200">mint</span></span>
        </a>
      {/* </Link> */}
        <span className="flex flex-row items-end gap-x-12">
          <Link className="hover:underline underline-offset-4" href="/how-it-works">how it works</Link>
          <Link className="hover:underline underline-offset-4" href="/faq">faq</Link>
          <Link className="hover:underline underline-offset-4" href="/pricing">pricing</Link>
          <Link className="hover:underline underline-offset-4" href="/contact">contact</Link>
        </span>
      </Transition>

      <Transition
        as="span"
        className="flex flex-row h-fit items-center gap-x-10"
        show={show}
        enter="ease-in duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        >
        {/* <FiSidebar className="cursor-pointer" size={24} /> */}
        <MagicButton />
      </Transition>
    </header>
  );
}

// export const AccountSelector = () => {
//   const { address } = useAccount();
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
//             {address}
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
//             <div className="px-1 py-1 ">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <EditActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <EditInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Edit
//                   </button>
//                 )}
//               </Menu.Item>

//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     onClick={}
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {/* {active ? (
//                       <DuplicateActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <DuplicateInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )} */}
//                     Logout
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
