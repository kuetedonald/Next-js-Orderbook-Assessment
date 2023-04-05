import { useEffect } from "react";
import Link from "next/link";

import { useWeb3React } from "@web3-react/core";

import { injectedConnector } from "../utils/web3react";

import Footer from "../components/Footer";
import { NextPage } from "next";

const Landing: NextPage = () => {
  const { activate } = useWeb3React();

  useEffect(() => {
    activate(injectedConnector);

    localStorage.getItem("theme") === "dark" &&
      document.documentElement.classList.add("dark");
  }, [activate]);

  return (
    <div className="dark:bg-slate-800">
      <div className="max-w-7xl mx-auto h-screen">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">React/UI Engineer technical</span>{" "}
              <span className="block text-indigo-600 xl:inline">
              test task.
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
             
Implement a simple Next.JS application, share the source code via GitHub, and deploy it (using, e.g., render.com or Netlify) so that we can test it.
<br/><br/>
0. Ensure the end result test application has an appealing and beautiful user interface and clean implementation code.
<br/>1. Add a selector of the trading token pairs. You can offer the same pairs or even similar user experiences as, for example, you can see on https://www.matcha.xyz
https://ibb.co/z56YjwT
<br/>2. Once the pairs are chosen, you can use https://docs.0x.org/0x-orderbook-api/api-references/get-orderbook-v1 to retrieve the current state of the order book and display it on the screen.
<br/>In a similar way, as you can see, e.g. here:
<br/>https://www.bybit.com/trade/inverse/BTCUSD
<br/>https://ibb.co/r0pyHfK
<br/>3. You can subscribe to this WebSocket service to get real-time order book updates and again reflect them on the user interface. https://docs.0x.org/0x-orderbook-api/api-references/websocket-api

            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md drop-shadow-md">
                <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  <Link href="swap">Continue</Link>
                </p>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 drop-shadow-md">
                <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-200 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  <Link href="#">Read documentation</Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landing;
