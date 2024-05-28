import * as d3 from 'd3';
import { generateArray } from './generateArray';
import React from "react";
import {store }from "@/redux/store";

generateArray(10);
export default function BarChart () {
    // lime :"#65a30d",
    // green: "#16a34a",
    // cyan:"#0891b2",
    // pink:"#db2777",
const data = store.getState().sorting.array.slice();
const svg = React.useRef(null);
const margin = {top: 20, right: 30, bottom: 30, left: 40};
const width = 700 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

React.useEffect(() => {
    const svgElement = d3.select(svg.current);
    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    const y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .nice()
        .range([height - margin.bottom, margin.top]);
    svgElement.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d))
        .attr("height", d => y(0) - y(d))
        .attr("width", x.bandwidth());
    svgElement.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));
    svgElement.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
}, [data, svg, margin, width, height]);

return (
    <svg ref={svg} width={width} height={height}>
    </svg>
);
};