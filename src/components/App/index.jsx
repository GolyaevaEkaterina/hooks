import Button from 'components/Button';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState("loading")
  // const [items, setItems] = useState([])
  useEffect(()=>{
    console.log("mount")
  },[])
  useEffect(()=>{
    console.log("update")
  })
  return (
    <div>
        <div className="App">
            <Button handleClick={()=>setType("loading")} title="загрузка"/>
            <Button handleClick={()=>setType("update")} title="обновление"/>
            <Button handleClick={()=>setType("deletion")} title="удаление" />
        </div>

        <div className='text-4xl flex justify-center'>{type}</div>
    </div>    
  );
}

export default App;
