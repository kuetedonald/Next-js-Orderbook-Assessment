import { Fragment, useMemo } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/outline";

import { injectedConnector } from "../../utils/web3react";

const UserCorner = () => {
  const { active, activate, account, error, deactivate } = useWeb3React();

  const items = useMemo(
    () => [
      { name: "Settings", onClick: () => {} },
      { name: "Disconnect", onClick: () => deactivate() },
    ],
    [deactivate]
  );

  // text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-900 dark:hover:text-white p-2 rounded-full

  return (
    <Menu as="div" className="ml-3 relative">
      <div className="min-w-[127px] flex justify-center">
        {active ? (
          <Menu.Button className="group p-2 flex text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-900">
            <p className="text-gray-800 dark:text-gray-300 text-base my-auto pr-2 dark:group-hover:text-white">
              0x...{account?.slice(account.length - 4)}
            </p>
            <UserCircleIcon className="h-8 w-8 text-gray-800 dark:text-gray-300 dark:group-hover:text-white" />
          </Menu.Button>
        ) : (
          <button
            className="rounded-md shadow py-2 px-4 font-medium text-base text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-red-600"
            onClick={() => activate(injectedConnector)}
            disabled={error instanceof UnsupportedChainIdError}
          >
            {error instanceof UnsupportedChainIdError
              ? "Wrong network"
              : "Connect"}
          </button>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  className={`${active ? "bg-gray-100" : ""}
                     w-full text-left block px-4 py-2 text-sm text-gray-700`}
                >
                  {item.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserCorner;
