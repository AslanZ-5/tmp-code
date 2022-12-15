import React from "react";

const TodoListItem = ({txt,important=false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return <span style={style}> {txt}</span>
}

export default TodoListItem;