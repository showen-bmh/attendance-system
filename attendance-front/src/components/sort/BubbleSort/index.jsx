import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class BubbleSort extends Component {

    state = { arr: [] }

    canvasRef = React.createRef()

    componentDidMount() {
        this.updateCanvas(this.state.arr)
        PubSub.subscribe('createDate', (_, data) => {
            this.setState({ arr: data })
        })
        PubSub.subscribe('clearDate', (_) => {
            this.setState({ arr: [] })
        })
    }
    componentDidUpdate() {
        this.updateCanvas(this.state.arr)
    }
    updateCanvas(arr) {
        try {
            let canvas = document.getElementById('canvas');
            if (!canvas) {
                console.log('canvas not found!')
            } else {
                if (!canvas.getContext) {
                    console.log('Contest not supported')
                } else {
                    const canvas = this.canvasRef.current
                    const ctx = canvas.getContext('2d')
                    if (!ctx) {
                        console.log('Contest 2D not available.')
                    } else {
                        rect({ canvas, ctx, arr })
                    }
                }
            }
        } catch (exc) {
            console.log(exc)
        }
    }
    render() {
        return (
            <div>
                <canvas id="canvas" ref={this.canvasRef} width="360" height="200"></canvas>
            </div>
        )
    }
}

function rect(params) {

    const { canvas, ctx, arr } = params;
    console.log(canvas)
    console.log(ctx)
    console.log(arr)
    //外边距
    let AXIS_MARGIN = 20,
        //原点，将之设置到画布左下区域
        AXIS_ORIGIN = { x: AXIS_MARGIN, y: canvas.height - AXIS_MARGIN },

        //y轴顶点位置
        AXIS_TOP = AXIS_MARGIN,
        //x轴顶点位置
        AXIS_RIGHT = canvas.width - AXIS_MARGIN,

        //横向刻度线间距
        HORIZONTAL_TICK_SPACING = 10,
        //垂直刻度线间距
        VERTICAL_TICK_SPACING = 10,

        //X轴长度
        AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x,
        //y轴长度
        AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

        //y轴上的点的最大值
        NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING,
        NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING,

        TICK_WIDTH = 10,
        TICKS_LINEWIDTH = 0.5,
        TICK_COLOR = 'navy',

        AXIS_LINEWIDTH = 1.0,
        AXIS_COLOR = 'blue';

    //Function……

    /**
     * 背景网格线
     * @param color
     * @param stepX
     * @param stepY
     */
    function drawGrid(color, stepX, stepY) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;

        for (var i = stepX + 0.5; i < ctx.canvas.width; i += stepX) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, ctx.canvas.height);
            ctx.stroke();
        }

        for (var j = stepY + 0.5; j < ctx.canvas.height; j += stepY) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(ctx.canvas.width, j);
            ctx.stroke();
        }
    }

    /**
     * 画坐标轴
     */
    function drawAxis() {
        ctx.save();
        ctx.strokeStyle = AXIS_COLOR;
        ctx.lineWidth = AXIS_LINEWIDTH;

        drawHorizontalAxis();
        drawVerticalAxis();

        ctx.lineWidth = TICKS_LINEWIDTH;
        ctx.strokeStyle = TICK_COLOR;

        drawVerticalAxisTicks();
        drawHorizontalAxisTicks();

        ctx.restore();
    }

    /**
     * 绘制x轴
     */
    function drawHorizontalAxis() {
        ctx.beginPath();
        ctx.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
        ctx.lineTo(AXIS_RIGHT, AXIS_ORIGIN.y);
        ctx.stroke();
    }


    /**
     * 绘制y轴
     */
    function drawVerticalAxis() {
        ctx.beginPath();
        ctx.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
        ctx.lineTo(AXIS_ORIGIN.x, AXIS_TOP);
        ctx.stroke();
    }

    /**
     * 绘制y轴刻度
     */
    function drawVerticalAxisTicks() {
        //小刻度长度的临时变量
        var deltaY;

        for (var i = 1; i < NUM_VERTICAL_TICKS; i++) {
            ctx.beginPath();
            //每5第五个刻度为长的小刻度
            if (i % 5 === 0) deltaY = TICK_WIDTH;
            else deltaY = TICK_WIDTH / 2;

            ctx.moveTo(AXIS_ORIGIN.x - deltaY, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            ctx.lineTo(AXIS_ORIGIN.x + deltaY, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            ctx.stroke();

        }
    }

    /**
     * 绘制x轴刻度
     */
    function drawHorizontalAxisTicks() {
        //小刻度长度的临时变量
        var deltaY;

        for (var i = 1; i < NUM_HORIZONTAL_TICKS; i++) {
            ctx.beginPath();
            //每5第五个刻度为长的小刻度
            if (i % 5 === 0) deltaY = TICK_WIDTH;
            else deltaY = TICK_WIDTH / 2;

            ctx.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y - deltaY);
            ctx.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y + deltaY);
            ctx.stroke();

        }
    }

    //Initialization……
    drawGrid('lightgray', 10, 10);
    drawAxis();
}