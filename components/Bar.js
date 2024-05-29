import { colorRange } from "@/utils/colors";


export default function Bar(props){
    return(
        <div className="flex flex-col">
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
        className={`border-t-2 rounded transition-all ease-linear `}
      ></div>

      </div>
    )
};