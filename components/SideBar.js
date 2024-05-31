import AlgoSelector from "./AlgoSelector"
import SpeedControl from "./SpeedController"
import CountControl from "./CountControl";
import DataControl from "./DataControl";
import StartControl from "./Start";
const SideBar =() =>{
    return (
<div
  className="relative justify-center flex lg:h-24 h-32   bg-white bg-clip-border p-4  text-gray-700">

  <nav className="flex  gap-x-3 font-sans lg:items-end  items-center text-base font-normal text-blue-gray-700">
    
  <div className="relative flex lg:flex-row flex-col gap-3 justify-between">
<div><AlgoSelector /></div>
</div>
    <div className="relative flex lg:flex-row flex-col gap3 justify-between items-end lg:gap-1">
    <div className="relative">
        <span className="text-xs font-medium">count</span><CountControl />
    </div>
    <div className="relative">
      <span className="text-xs font-medium">speed</span>  <SpeedControl />
    </div>
    <div className="relative">  <StartControl />
    </div>
    </div>
  

   
  </nav>
  
</div>
    )};

export default SideBar;