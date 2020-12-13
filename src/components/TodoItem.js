import React, {useEffect} from "react"

const TodoItem = props => {
    const complStyle = {
        fontStyle : "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {id,title,completed} = props.todo
    useEffect(()=> {
        return () => {
            alert("Item deleted")
        }
    },[])
    return (
        <li className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)}/>
            <button onClick={() => props.delTodoProps(id)}>Delete</button>
            <span style={completed ? complStyle : null}>{title}</span>

        </li>
    )
}

export default TodoItem
// import React from "react";
// class TodoItem extends React.Component {
//     componentWillUnmount() {
//         alert("Item about to be deleted!");
//       }
//     render() {
//         const complStyle = {
//             fontStyle : "italic",
//             color: "#d35e0f",
//             opacity: 0.4,
//             textDecoration: "line-through",
//         }
//         const {id,title,completed} = this.props.todo
//         return (
//         <li className="todo-item"> <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} /> <button onClick={() => this.props.delTodoProps(id)}>Delete</button>
//             <span style={completed ? complStyle : null}>{title}</span>
//         </li>
//         )
//     }
// }
// export default TodoItem