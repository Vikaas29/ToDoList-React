import { ToDoItem } from "./ToDoItem"
import { useState } from 'react'

export function ToDoList(){
    const[allData,setallData]=useState([]);
  
    function addItem(){
        let b=document.getElementById("input").value;
        if(b=="")return;

        const a=[...allData];
        a.push({key:a.length,content:b});
        setallData(a);
        document.getElementById("input").value="";
    }
 
    

    return (<>
     <div className="InputDiv">
    <input type="text" className="InputBox" id="input" />
    <button className="AddButton" onClick={addItem}>Add</button>
    </div>
  
    
    <div className="List">
        {allData.map(data=><ToDoItem key={data.key} data={data.content}/>)}
        </div>
    </>)
}