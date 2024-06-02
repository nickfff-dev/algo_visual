import { colorRange } from "@/utils/colors";

export default function Bar(props){

    return(
        <div className="relative flex flex-col cursor-pointer"
        onMouseOver={()=>{
          document.getElementById(`array-text-${props.id}`).classList.remove("hidden")
        }}
        onMouseOut={()=>{
          document.getElementById(`array-text-${props.id}`).classList.add("hidden")
        }}
        >
        <div
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          backgroundColor: `${
            props.bgColor == undefined ? Colors.DEFAULT_BG_COLOR : props.bgColor
          }`,
          borderColor: `${
            props.borderColor == undefined
              ? colorRange.DEFAULT_BORDER_COLOR
              : props.borderColor
          }`,
        }}
        id={props.id}
        className={`border-t-2 rounded transition-all ease-linear duration-300`}
      ></div>
        <span
          id={`array-text-${props.id}`}
          className="hidden absolute top-0 -translate-y-12 left-0 w-full h-full bg-black bg-opacity-50 text-white text-center lg:text-lg font-bold flex justify-center items-center"
        >{props.height}</span>
      </div>
    )
};