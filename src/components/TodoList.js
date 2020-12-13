import React from "react"
import TodoItem from "./TodoItem"

const TodoList = props => {
    return (
        <div>
            {
            props.todos.map(todo =>(
                <TodoItem key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps} delTodoProps={props.delTodoProps} />
            ))}
        </div>
    )
}
export default TodoList
// import React from "react"
// import TodoItem from "./TodoItem"
// class Todolist extends React.Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.todos.map( todo => (
//                     <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} delTodoProps={this.props.delTodoProps}/>
//                     ))
//                 }
//             </div>
//         )
//     }
// }
// export default Todolist