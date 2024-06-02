import React from "react";
import { useSelector } from "react-redux";
import { colorRange } from "@/utils/colors";
import Bar from "./Bar";

const RenderArray = () => {
    const data = useSelector((state) => state.sorting.array);
    let widthBar = useSelector((state) => state.sorting.barWidth);
    let firstComperand = useSelector((state) => state.sorting.compEle1);
    let secondComperand = useSelector((state) => state.sorting.compEle2);
  
    let firstSwap = useSelector((state) => state.sorting.swapEle1);
    let secondSwap = useSelector((state) => state.sorting.swapEle2);
  
    let pivot = useSelector((state) => state.sorting.spclEle);
    let firstMerge = useSelector((state) => state.sorting.mergeArr1);
    let secondMerge = useSelector((state) => state.sorting.mergeArr2);

    const visualizeSwapsandComparisons = (index) => {
        let borderColor, bgColor;
        if (pivot == index) {
            borderColor = colorRange.RED_BORDER_COLOR;
            bgColor = colorRange.RED_BG_COLOR;
          } else if (index >= firstMerge[0] && index <= firstMerge[1]) {
            borderColor = colorRange.RED_BORDER_COLOR;
            bgColor = colorRange.RED_BG_COLOR;
          } else if (index >= secondMerge[0] && index <= secondMerge[1]) {
            borderColor = colorRange.SWAPED_BORDER_COLOR;
            bgColor = colorRange.SWAPED_BG_COLOR;
          } else if (
            (firstComperand == index || secondComperand == index) &&
            (firstSwap == index || secondSwap == index)
          ) {
            borderColor = colorRange.SWAPED_BORDER_COLOR;
            bgColor = colorRange.SWAPED_BG_COLOR;
          } else if (firstComperand == index || secondComperand == index) {
            borderColor = colorRange.SELECTED_BORDER_COLOR;
            bgColor = colorRange.SELECTED_BG_COLOR;
          } else if (firstSwap == index || secondSwap == index) {
            borderColor = colorRange.SWAPED_BORDER_COLOR;
            bgColor = colorRange.SWAPED_BG_COLOR;
          } else {
            borderColor = colorRange.DEFAULT_BORDER_COLOR;
            bgColor = colorRange.DEFAULT_BG_COLOR;
          };
          return {borderColor, bgColor};
    };

    return (
        <div   className="flex flex-row justify-center items-end  gap-x-1">
            {data.map((value, index) => {
                const {borderColor, bgColor} = visualizeSwapsandComparisons(index);
   return ( 
                <Bar
                    key={index}
                    height={value}
                    width={widthBar}
                    bgColor={
                        bgColor
                    }
                    borderColor={borderColor}
                    id={`array-bar-${index}`}
                />)
  })}
        </div>
    )
};

export default RenderArray;