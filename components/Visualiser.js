import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import {store }from "@/redux/store";
import { generateArray } from "./generateArray";
import { SelectionSort, BubbleSort } from "@/utils/algoclass";
import  Card  from "@material-tailwind/react/components/Card";

const colorRange = {
    DEFAULT_BG_COLOR: "#020617",
    FIRST_COMP_COLOR: "#F59E0B",
    SECOND_COMP_COLOR: "#F87171",
    FIRST_SWAP_COLOR: "#3B82F6",
    SECOND_SWAP_COLOR: "#10B981",
    PIVOT_COLOR: "#F472B6",
    DEFAULT_BORDER_COLOR: "#10B981",
    FIRST_COMP_BORDER_COLOR: "#F59E0B",
    SECOND_COMP_BORDER_COLOR: "#F87171",
    FIRST_SWAP_BORDER_COLOR: "#3B82F6",
    SECOND_SWAP_BORDER_COLOR: "#10B981",
    PIVOT_BORDER_COLOR: "#F472B6",

};


const Visualiser = () => {
    const data = store.getState().sorting.array.slice();
    let widthBar = useSelector((state) => state.sorting.barWidth);

    let firstComperand = useSelector((state) => state.sorting.compEle1);
    let secondComperand = useSelector((state) => state.sorting.compEle2);

    let firstSwap = useSelector((state) => state.sorting.swapEle1);
    let secondSwap = useSelector((state) => state.sorting.swapEle2);

    let pivot = useSelector((state) => state.sorting.spclEle);

    const Bar = dynamic(() => import("./Bar"), {
        ssr: false,
    });

    React.useEffect(() => {
        generateArray(46);
        SelectionSort();
    }, []);

    return (
        <div className="flex rounded flex-row bg-teal-100 justify-center  gap-x-1 items-end  h-full border mt-24 p-6 max-w-screen">
            {data.map((value, index) => (
                <Bar
                    key={index}
                    height={value}
                    width={widthBar}
                    bgColor={
                        index === firstComperand
                            ? colorRange.FIRST_COMP_COLOR
                            : index === secondComperand
                            ? colorRange.FIRST_COMP_COLOR
                            : index === firstSwap
                            ? colorRange.FIRST_SWAP_COLOR
                            : index === secondSwap
                            ? colorRange.FIRST_SWAP_COLOR
                            : index === pivot
                            ? colorRange.PIVOT_COLOR
                            : colorRange.DEFAULT_BG_COLOR
                    }
                    borderColor={
                        index === firstComperand
                            ? colorRange.FIRST_COMP_BORDER_COLOR
                            : index === secondComperand
                            ? colorRange.SECOND_COMP_BORDER_COLOR
                            : index === firstSwap
                            ? colorRange.FIRST_SWAP_BORDER_COLOR
                            : index === secondSwap
                            ? colorRange.SECOND_SWAP_BORDER_COLOR
                            : index === pivot
                            ? colorRange.PIVOT_BORDER_COLOR
                            : colorRange.DEFAULT_BORDER_COLOR
                    }
                />
            ))}
        </div>
    )
};

export default Visualiser;