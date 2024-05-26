import chroma from 'chroma-js';
import * as d3 from 'd3';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowResize } from '@/hooks';
import { nodeSelected } from '@/redux/reducers/nodeSlice';
import { store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllNodes } from '@/redux/store';
import { Bar, nodeStatus, Size, ColorRange } from '@/utils/constants';
import styles from './Visualiser.module.css';

const node_rect = {
    width: 40,
    height: 0
}



const Visualiser = () => {
    const margin = 3;
    const nodes = useSelector(selectAllNodes);
    const svgContentRef = useRef(null);
    const selectedNodeId = useSelector((state) => state.nodes.selectedId);
    const dispatch = store.dispatch;
    const [bars, setBars] = useState([]);
    const canvasRef = useRef(null);
    const size = useWindowResize();

    const draw = useCallback(
        ()=>{
            
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const midPoint = {
                x: rect.width / 2 || 0,
                y: rect.height / 2 || 0,
            };
            const {low, mid, high} = ColorRange;
            const colors = chroma.scale([low, mid, high]).mode('hsl');
            const xScale = d3
            .scaleBand()
            .range([0, nodes.length * node_rect.width])
            .padding(0.1);

            const yScale = d3
            .scaleLinear()
            .range([
                (rect ? rect.height : 0) - margin,
                margin,
            ]);

            const colorScale = d3.scaleLinear();

            xScale.domain(nodes.map((node) => node.id));

            const values = nodes.map((node) => node.value);

            yScale.domain([0, Math.max(...values)]);

            colorScale.domain([Math.min(...values), Math.max(...values)]);

            const stPtX = midPoint.x - (nodes.length * 1.05 * node_rect.width) / 2;

            const newBars = nodes.map((node, index) => {
                let xPt = stPtX + (xScale(node.id) || 0);
                let yPt = yScale(node.value);
                return {
                    id: node.id,
                    value: node.value,
                    status : node.status,
                    x: xPt,
                    y: yPt,
                    width: xScale.bandwidth(),
                    height: yScale(0) - yPt,
                    color: colors(colorScale(node.value)),
                };
            });
            setBars(newBars);
        },
        []);

        const handleNodeClick = (node) => {
            dispatch(nodeSelected(node.id));
        };

        useEffect(() => {
            draw();
            
        }, [nodes]);

        return (
            <div className={styles.graphicContent}>
                <svg
                    ref={canvasRef}
                    className={styles.canvas}
                    
                >
                    <g ref={svgContentRef}>
                        {bars.map((bar) => {
                            const classes = [];
                            if (selectedNodeId === bar.id) {
                                classes.push(styles.active);
                            } else{
                                if (bar.status === nodeStatus.ACTIVE)
                                    {
                                        classes.push(styles.active);
                                    }
                                    else if(bar.status === nodeStatus.VISITED){
                                        classes.push(styles.visited);
                                    }
                            }
                            return (
                                <g key={bar.id} onClick={() => handleNodeClick(bar.id)}>
                                    <rect
                                        key={`rect-bs-${bar.id}`}
                                        x={bar.x}
                                        y={bar.y + bar.height - node_rect.height}
                                        width={bar.width}
                                        height={bar.height}
                                        fill={'none'}
                                        className={classes.join(' ')}
                                        stroke='black'
                                        strokeWidth={1}
                                    />

                                    <rect
                                        className={classes.join(' ')}
                                        key={`rect-${bar.id}`}
                                        x={bar.x}
                                        y={ bar.y - 3 - node_rect.height + margin}
                                        width={bar.width}
                                        height={
                                            bar.height > margin
                                                ? bar.height - margin
                                                : 0
                                        }
                                        fill={bar.color}
                                    />
                                    <text
                                    className={classes.join(' ')}
                                    key={`text-${bar.id}`}
                                    x={bar.x + bar.width / 2}
                                    y={
                                        bar.y +
                                        bar.height +
                                        bar.width / 2 -
                                        node_rect.height
                                    }
                                    textAnchor="middle"
                                    alignmentBaseline="central"
                                    >
                                        {bar.value}
                                    </text>
                                    </g>
                            )
                        })}
                    </g>
                </svg>
            </div>
        );
};


export default Visualiser;