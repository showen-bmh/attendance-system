import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import header from './index.module.css'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event

        if (keyCode !== 13) return

        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)

        target.value = ''
    }

    render() {
        return (
            <div className={header.todo_header}>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名称，按回车键确认" />
            </div>
        )
    }
}
