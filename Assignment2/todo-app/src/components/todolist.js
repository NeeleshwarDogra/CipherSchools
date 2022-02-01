import React, { useState } from "react";
import './todolist.css'
import add from './add.jpg'
import del from './delete.png'
import done from './done.png'

const ToDoList = () => {

    const [tasks, setTask] = useState([])

    const Showtask = (props) => {
        const len = props.tasklength
        if (len > 0){
            return(
                <div className="showtasks">
                    <h2>All Tasks</h2>
                    <div>
                        {tasks.map((task, index) =>{
                            if(task.isDone) {
                                return(
                                    <div className="showingtask slash" key={index}>
                                        <span id="index">{index+1})</span><span id="title">{task.title}</span>
                                        <img id="done" src={done} alt="na" onClick={Comptask} ></img>
                                        <img id="del" src={del} alt="na" onClick={deltask} ></img>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div className="showingtask" key={index}>
                                        <span id="index">{index+1})</span><span id="title">{task.title}</span>
                                        <img id="done" src={done} alt="na" onClick={Comptask} ></img>
                                        <img id="del" src={del} alt="na" onClick={deltask} ></img>
                                    </div>
                                )
                            }  
                        })}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="showtasks">
                    <h2>No Tasks Added Currently</h2>
                </div>
                
            ) 
        }
    }    
    
    const settask = () => {
        var task = document.getElementById('task')
        if (task.value.length > 1) {
            const newtask = {
                title: task.value,
                isDone: false
            }
            setTask([ ...tasks, newtask])
        }
        else{
            alert("Please enter some text")
        }        
        task.value = ""
    }

    const deltask = (e) => {
        let som = e.target.parentNode
        // console.log(e.target.parentNode)
        let val = som.querySelector("#index").textContent[0]
        val--
        tasks.splice(val,1);
        setTask([...tasks]);
        <Showtask tasklength={tasks.length} />
        // e.target.parentNode.classList.add("hide")

    }

    const Comptask = (e) => {
        let som = e.target.parentNode
        // console.log(e.target.parentNode)
        let val = som.querySelector("#index").textContent[0]
        val--
        tasks[val].isDone = true
        setTask([...tasks]);
    }

    return(
        <div className="container">
            <h1>ToDoList</h1>
            <div className="addtask">
                <h2>Add Task</h2>
                <div>
                    <input placeholder="Enter Task" type={'text'} id="task"></input>
                    <img id="add" src={add} onClick={settask} alt="na"></img>
                </div>    
            </div>
        <Showtask tasklength={tasks.length}/>
        </div>
    )
}

export default ToDoList