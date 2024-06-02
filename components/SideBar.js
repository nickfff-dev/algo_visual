import AlgoSelector from "./AlgoSelector"
import SpeedControl from "./SpeedController"
import CountControl from "./CountControl";
import StartControl from "./Start";
import React, {useCallback} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMobileMenuOpen } from "@/redux/reducers/documentSlice";
import Link from "next/link";
import { dataStructures } from "@/utils/constants";
import DataStructureSelector from "./DataTypeSelector";
import TreeSpeedControl from "./treeSpeedController";
import StartTreeControl from "./StartTree";

const SideBar = () => {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state) => state.page.mobileMenuOpen);
  const dataStructure = useSelector((state) => state.page.dataStructure);

  const toggleMobileMenu = useCallback(() => {
    dispatch(setMobileMenuOpen(!mobileMenuOpen));
  }, [dispatch, mobileMenuOpen]);
    return (
<nav
  className="block fixed z-50 w-full max-w-screen-xl px-6 lg:py-3  mx-auto dark:bg-white bg-white border shadow-md  border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">

  <div className="flex lg:flex-row flex-col items-center justify-between text-blue-gray-900">
  <Link href="/"
      className="mr-4 block cursor-pointer lg:py-1.5 dark:text-gray-900 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
      Algorithm Visualizer
    </Link>
    <div className={`${mobileMenuOpen ? '' : 'hidden'} lg:block`}>
      <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6">
        <li className="block p-1 font-sans text-xs antialiased font-medium leading-normal text-blue-gray-900">  <DataStructureSelector /></li>
        <li className="block p-1 font-sans text-xs antialiased font-medium leading-normal text-blue-gray-900"> <AlgoSelector /></li>
        {dataStructure === dataStructures.ARRAY  &&  <li className="block p-1 font-sans text-xs antialiased font-medium leading-normal text-blue-gray-900"> <span className="dark:text-gray-900">Generate Array</span><CountControl /></li>}
<li className="block p-1 font-sans text-xs antialiased font-medium leading-normal text-blue-gray-900"> <span className="dark:text-gray-900">Toggle Speed</span>{
  dataStructure === dataStructures.TREE ? <TreeSpeedControl /> : <SpeedControl />
} </li>


        <li className="block p-1 font-sans text-xs antialiased font-medium leading-normal text-blue-gray-900"> {dataStructure === dataStructures.ARRAY ? <StartControl /> : <StartTreeControl />}</li>
      </ul>
    </div>
    <button
     onClick={toggleMobileMenu}
      className="relative ml-auto h-3 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-200 dark:text-gray-900 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-3/4 top-1/4 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
          aria-hidden="true" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </span>
    </button>
  </div>
  
  
</nav>
    )};

export default SideBar;