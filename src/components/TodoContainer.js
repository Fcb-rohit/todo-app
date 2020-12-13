import React, { useState, useEffect  } from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

const TodoContainer = props => {
    const [todos, setTodos] = useState([])
    const[show, setShow] = useState(false)

    const handleChange = id => {
        setTodos(
            todos.map(todo =>{
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
        setShow(!show)
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo=>{
                return todo.id !== id
            }),
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([...todos,newTodo])
    }
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos", {
            params : {
                _limit: 2
            }
        }).then(response => setTodos(response.data))
      },[])
    return (
        <div className="container">
            <Header headerSpan={show}/>
            <InputTodo addTodoProps={addTodoItem} />
            <TodoList todos={todos} handleChangeProps={handleChange} delTodoProps={delTodo}/>
        </div>
    )
}

export default TodoContainer

// import React, {useState} from "react";
// import axios from "axios"
// import Header from "./Header"
// import TodoList from "./TodoList"
// import InputTodo from "./InputTodo"
// class TodoContainer extends React.Component {
//     state = {
//         todos : [],
//         show: false
//     }
//     handleChange = id => {
//         this.setState({
//           todos: this.state.todos.map(todo => {
//             if (todo.id === id) {
//               todo.completed = !todo.completed
//             }
//             return todo
//           }),
//           show: !this.state.show,
//         })
//       }
//     delTodo = id => {

//         axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => {
//             this.setState({
//                 todos: [
//                     ...this.state.todos.filter(todo => {
//                         return todo.id !== id;
//                     })
//                 ]
//             });
//         })

//         // this.setState({
//         //     todos: [
//         //         ...this.state.todos.filter(todo => {
//         //             return todo.id !== id;
//         //         })
//         //     ]
//         // });
//     };
//     addTodoItem = title => {
//         // const newTodo = {
//         //     id: uuidv4(),
//         //     title: title,
//         //     completed: false
//         // };
//         axios.post("https://jsonplaceholder.typicode.com/todos",{
//             title: title,
//             completed: false,
//         }).then( response =>
//             this.setState({
//                 todos: [...this.state.todos,response.data],
//             })
//         )
//     }
//     componentDidMount() {
//         axios.get("https://jsonplaceholder.typicode.com/todos",{
//             params: {
//                 _limit:10
//             }
//         }).then(response => this.setState({todos:response.data}))
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Header headerSpan={this.state.show}/>
//                 <InputTodo addTodoProps={this.addTodoItem}/>
//                 <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} delTodoProps={this.delTodo}/>
//             </div>
//         );
//     }
// }
// export default TodoContainer