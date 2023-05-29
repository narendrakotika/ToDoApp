//useState hooks: it is used to manage your state{data} in functional component
//import useState from 'react
//declare hooks at the top level
//useState = variable,updating function

//state:data
// uncontrolled {useRef} vs controlled {useState}

//**** local storage --> it has two methods getItem and setItem data stored in form of "object{}""

// const count =useState(intialvalue)


/*import { useState } from 'react'

import './App.css'
function App(){
    const [count, setCount] = useState(100);
    function dcm(){
        console.log("clicked")
        setCount(count-1 )
    }
    return(
        <center>
           <h1>counter:{count}</h1> 
           <button onClick={dcm}>decrement</button>
        </center>
    )
}
export default App*/

import './App.css'
import { useState } from 'react';



function App(){

     const data = localStorage.getItem("lists") ? JSON.parse(localStorage.getItem('lists')) : [];

    //JSON stringify object[array] into string (local storage{string})
    //JSON parse string --> object


    const [list , setList]=useState(data);
    const [newtask, setNewtask]=useState("");
    const [search, setSearch]=useState('')

    //console.log(list)

   const addtask=()=>{

    //console.log(e.key)
     localStorage.setItem('lists', JSON.stringify([...list, newtask]))
    setList([...list, newtask])
    setNewtask("")
   }

   const updateTask=(e,i)=>{

     const uptask=[...list];
     uptask.splice(i,1,e.target.value)
     setList(uptask)
     localStorage.setItem('lists', JSON.stringify (uptask))

   }

   const deleteTask=(i)=>{
    //console.log(i)
    const delList=[...list];
    delList.splice(i,1)
    setList(delList)
    localStorage.setItem('lists', JSON.stringify( delList))
   
   }

   const keyEnter = (e) =>{
    
    if(e.key === "Enter"){
    addtask()
    }
   }

 //  const searchFun=(val)=>{    // instead of creating function we can directly write in an event it self on input
  //  setSearch(val)
  // }

    return (
        <div classname='App'>

        <div className='search'>
            <input type='text' name='search' placeholder='search Task🔎' onChange={(e)=>{setSearch(e.target.value)}} />
        </div>

        <h1 className='heading'>To-do App ⚡</h1>
        <div className='inputs'>

            <input type="text" onChange={(e)=>{setNewtask(e.target.value)}} onKeyDown={keyEnter}  value={newtask} />
            <button className='btn' onClick={addtask}>Add Task</button>
        </div>
        <div className='container' >
            {
              list.map((val, i) => {
                if(val.toLowerCase().includes(search.toLowerCase())){

                return(
         <div className='list' key={i}>
            <input type='text'  value={val} onChange={(e)=>{updateTask(e,i)}}/>
            <span className='icon' onClick={()=>{deleteTask(i)}}>❌</span>
         </div>
                )
                }

                
              })
            }
        </div>
        </div>
    )
    }

export default App