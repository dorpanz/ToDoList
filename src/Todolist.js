import { Component } from "react";
import img from "./listformat.png"
import completedimg from "./check.png"
export class Todolist extends Component{
    state={
        todos: [],
        userInput:"",
        image: img
    }

    inputhandles(e){
        this.setState({userInput: e})
    }

    addTask(userTask){
        if (userTask === "") alert("Please enter a task")
        else{
            let taskArray = this.state.todos;
            taskArray.push(userTask);
            this.setState({todos:taskArray, userInput:""})
        }
    }

    changeOnChecked(event){
        const listItem = event.target;
        listItem.classList.toggle('done')
    }

    updatePicture(){
        this.setState({image: completedimg})
    }

    preventDefault(e){
        e.preventDefault()
    }


    deleteAllItems(){
        this.setState({
            todos:[]
        })
    }

    render(){
        return(
            <div className="body">
                <div className="heading" >
                    <h1>Today's</h1>
                    <p>To Do List</p>
                </div>
                <form onSubmit={this.preventDefault} className="toDoList">
                    <input type="text" className="inputField" placeholder="Enter your task..." onChange={(e)=>this.inputhandles(e.target.value)} value={this.state.userInput}/>
                    <button className="btn" onClick={()=>this.addTask(this.state.userInput)}>ADD</button>
                </form>
                

                <div className="options-to-do">
                    {this.state.todos.map((item, index) =>
                    <ul className="list" key={index} >      
                    <li className="item" onClick={this.changeOnChecked}>{item}</li>
                    </ul>)}
                </div>
                <button className="btn del" onClick={()=>this.deleteAllItems()}>delete all</button>
            </div>
        )
    }
}