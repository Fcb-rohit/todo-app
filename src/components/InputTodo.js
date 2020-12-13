import React, { useState } from "react"

const InputTodo = props => {
    const [inputText, setinputText] = useState({
        title : "",
    })

    const onChange = e => {
        setinputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addTodoProps(inputText.title)
        setinputText({
            title: "",
        })
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" className="input-text" placeholder="Add todo..." value={inputText.title} name="title" onChange={onChange}/>
            <input type="submit" className="input-submit" value="Submit" />

        </form>
    )
}

export default InputTodo
// import React, { Component } from "react";

// class InputTodo extends Component {
//     state = {
//         title: "",
//     };
//     onChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     }
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.addTodoProps(this.state.title);
//         this.setState({
//             title: ""
//         });
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.onChange}/>
//                 <input type="submit" className="input-submit" value="Submit" />
//             </form>
//         )
//     }
// }

// export default InputTodo