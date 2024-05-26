import ReactApexChart from "react-apexcharts";
import React from "react";
import {store }from "@/redux/store";
import { useSelector } from "react-redux";
import { generateArray } from "./generateArray";
import { SelectionSort, BubbleSort } from '@/utils/algoclass';
generateArray(10);
class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        options: {
            chart: {
            type: "bar",
            id: "apexchart-example",
            allowMultipleDataPointsSelection: true,
            events:{
                updated: function( chartContext, config){
                    console.log(chartContext);
                    console.log(config);
                }
            },
            selection: {
                enabled: true,
                type: 'x',
                fill: {
                  color: '#24292e',
                  opacity: 0.1
                },
                stroke: {
                  width: 1,
                  dashArray: 3,
                  color: '#24292e',
                  opacity: 0.4
                },
              }
            },
            states:{
                active:{
                   
                    filter: {
                        type: 'darken',
                        value: 1,
                    }
                }
            },
            xaxis: {
            categories: [

            ],
            },
        },
        series: [
            {
            name: "array",
            data: store.getState().sorting.array.slice(),
            },
        ],
        };
    }
    componentDidMount() {
        
        this.unsubscribe = store.subscribe(() => {
        this.setState({
            options: {
                chart: {
                type: "bar",
                id: "apexchart-example",
                events:{
                    updated: function( chartContext, config){
                        console.log(config)
                    },
                    click: function(event, chartContext, config) {
                        console.log(config)
                    },
                    selection: function(chartContext, { xaxis, yaxis }) {
                        console.log(chartContext)
                    }
                },
                selection: {
                    enabled: true,
                    type: 'x',
                    fill: {
                      color: '#24292e',
                      opacity: 0.1
                    },
                    stroke: {
                      width: 1,
                      dashArray: 3,
                      color: '#24292e',
                      opacity: 0.4
                    },
                  },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                      speed: 1000
                    }
                  },
                },
                states:{
                    active:{
                        allowMultipleDataPointsSelection: true,
                        filter: {
                            type: 'lighten',
                            value: 1,
                        }
                    }
                },
                xaxis: {
                categories: [
                    ...store.getState().sorting.array.slice(),
                ],
                },
                dataLabels: {enabled:false}
            },
            series: [
            {
                name: "array",
                data: store.getState().sorting.array.slice()
            },
            ],
        });

        });
        
        SelectionSort();
    }
    render() {
        return (
        <div id="chart" className="w-full">
            <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={500}
            />
        </div>
        );
    }
};

export default ApexChart;