import Button from 'components/Button';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState("posts")
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    console.log("mount")
    fetch(`https://gorest.co.in/public/v2/${type}`)
    .then(data => data.json())
    .then(res => setItems(res))
  }, [])

  useEffect(()=>{
    console.log("update type:", type )
    fetch(`https://gorest.co.in/public/v2/${type}`)
    .then(data => data.json())
    .then(res => setItems(res))
  }, [type])

  useEffect(()=>{
    console.log("update items" )
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <div>
        <div className="App">
            <Button handleClick={()=>setType("users")} title="Пользователи"/>
            <Button handleClick={()=>setType("posts")} title="Посты"/>
            <Button handleClick={()=>setType("comments")} title="Комментарии" />
        </div>

        <div className='text-4xl flex justify-center'>{type}</div>

        {items.map((item) => (
          <pre key={item.id}>{JSON.stringify(item)}</pre>
        ))}
    </div>    
  );
}

export default App;
