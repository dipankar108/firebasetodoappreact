import './todo.css';
import {useState,useEffect} from 'react';
import {db} from './firebase';
import firebase from 'firebase';
export default function Todo(){
    const[todos,setTodo]=useState([]);
    const[input,setInput]=useState('');
  useEffect(()=>{
db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot)=>setTodo(snapshot.docs.map((doc)=>({'id':doc.id,'todo':doc.data().todo}))));
  },[])
    const handletodo=(event)=>{
        event.preventDefault();
        input?db.collection('todos').add(
            {
                "todo":input,
                "timestamp":firebase.firestore.FieldValue.serverTimestamp()
            }
        ):alert('You cannot add empty value');
     ;
     setInput('');
    };

    const handledelte=(id)=>{
     db.collection('todos').doc(id).delete();
    }
    return <div className="todo">
        <div className="todo__fcontainer">
            <h1 className="todo__title">Todo apps</h1>
         <form className="todo__form">
                <input value={input} type="text" className="todo__input" placeholder="Input here" onChange={(event)=>setInput(event.target.value)}/>
            <button className="todo__btn" onClick={handletodo}>Add Todo</button>
         </form>
        </div>
        <div className="todo__data">
            <ul className="todo__ul">
              {todos.map((item,index)=>  <li className="todo__li" key={item.id}>{item.todo}<button className="todo__delete" onClick={()=>handledelte(item.id)}>Delete me</button></li>)}
            </ul>
        </div>
    </div>
}