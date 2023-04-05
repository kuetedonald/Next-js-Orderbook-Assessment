import { Sidebar, Navbar,Alert, Footer } from '../components';

function Layout({ children }) {
  return (
    <div className="min-h-full dark:bg-slate-750">
        <div className="relative sm:-8 p-4 bg-[#fffefc] min-h-screen flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
               <Sidebar />
          </div>

          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
               <Alert />
              <Navbar />
              <main>{children}</main>
              
          </div>
          
        </div>
        
    </div>
  );
}

export default Layout;
