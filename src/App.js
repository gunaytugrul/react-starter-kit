
import { createElement,useState } from 'react';
import {useEffect} from 'react';
import './tailwind.css'
import Button from './Components/Button';
import Tab from './Components/Tab';
import Test from './test';


function App() {

  const[show,setShow]=useState(false)

  const todos=['todo1','todo2','todo3']

  const[activeTab,setActiveTab]=useState(1)
  /*
  const h1= createElement('h1',null,'test')
  const ul= createElement('ul',null,todos.map(todo=>createElement('li',null,todo)))

  return createElement('main',{
    className:'test',
    id:'main',
  },h1,ul)
  */

  const searchFunction=()=>{
  alert('search')
  }
 
  return (
   <>

  <button  onClick={()=>setShow(show=>!show)}>
   {show ? 'Gizle':'Göster'} </button>
  {show && <Test/>}


  <div style={{padding:20}}>
    <button onClick={() => setActiveTab(2)}>
      Aktif tabı değiştir
      </button> 
  <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
    <Tab.panel title="Profil">1. tab</Tab.panel>
    <Tab.panel title="Hakkında">2. tab</Tab.panel>
    <Tab.panel title="ayarlar">3. tab</Tab.panel> 
  </Tab>
  </div>

   <div style={{padding:20}}>
    <Button variant="succes">
    button örneği 
    </Button> 
    <Button variant="warning">
     button örneği 
      </Button> 
    <Button variant="danger">
     button örneği 
      </Button> 
    <Button >
      button örneği
      </Button>
   </div>

      <label htmlFor='search' tabIndex={2} onClick={searchFunction}>arama</label>
      <input type="text" id="search" tabIndex={1} />
      
      <h1 tabIndex={3}style={{color:'blue',backgroundColor:'yellow'}}>test</h1>
      <ul>
      {todos.map(todo=>(
        <li>{todo}
        </li>
      ))}
      </ul>
      </>
    
    
    
    
   
  );
}

export default App;
