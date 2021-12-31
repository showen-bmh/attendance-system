import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
export default class Header extends Component {

    create = () => {
        const { choiceValue: { value } } = this
        PubSub.publish('createDate', randArray(30, 150, 0, value))
    }

    startSort = () => {

    }

    clearDate = () => {
        PubSub.publish('clearDate')
    }

    render() {
        return (
            <div className="header">
                <select className="choice" ref={c => this.choiceValue = c}>
                    <option value="random">随机</option>
                    <option value="order">顺序</option>
                    <option value="reverse">倒序</option>
                </select>
                <button className="btn" type="button" onClick={this.create}>
                    生成数据
                </button>
                <button className="btn" type="button" onClick={this.startSort}>
                    开始排序
                </button>
                <button className="btn" type="button" onClick={this.clearDate}>
                    清除数据
                </button>
            </div>
        );
    }
}

function randArray(len, min, max, sequence) {
    let arr = Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min)
    if (sequence === 'order') {
        return arr.sort(function (a, b) {
            return a - b;
        })
    } else if (sequence === 'reverse') {
        return arr.sort(function (a, b) {
            return b - a;
        })
    } else {
        return arr
    }
}
