import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu} from "react-icons/bi"; // here after / we see first 2 letters of destructured import and write it here in small letters 

const NavSm = () =>{
    return(
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It all Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Surat <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    );
};

const NavMd = () =>{
    return(
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, event, plays, sports, activities" />
        </div>
    );
};

const NavLg = () =>{
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
           <div className="flex items-center w-1/2">
              <div className="w-md h-md mr-4">
                 <img
                    src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                    alt="logo"
                    className="w-full h-full" />
              </div>
              <div className="w-full flex items-center bg-white gap-3 px-3 py-1 rounded-sm">
                 <BiSearch />
                 <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
              </div>
           </div>
           <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
                    Surat
                    <BiChevronDown />
                </span>
                <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
                    Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
           </div>
        </div>
        </>
        )
};

const Navbar = () => {
    return(
    <>
        <nav className="bg-navCol-800 px-4 py-2">
            <div className="md:hidden">{
                /* Mobile Screen (so above in md:hidden it means anything above or 
                equal to medium size screen this part will be hidden*/
                <NavSm />

            }
            </div>
            <div className="hidden lg:hidden md:flex py-2">{
                /*Tablet Screen here above we put everything smaller than tbalet
                to hidden first. Then large screen hidden so that any screen larger than tablet 
                the formate of css is hidden like in mobile for evrthing is hidden 
                for tab and larger screens and we put md flex because we see some 
                flex properties */
                <NavMd />
            }</div>
            <div className="hidden lg:flex">{
                /*Desktop screen hidden is first because anything lower 
                than desktop screen does not get the desktop view like tablet
                does to mobile view and md:flex is because we have some flex
                propeties like in Tablet view*/
                <NavLg />
            }</div>
        </nav>
    </>
    );
};


export default Navbar;