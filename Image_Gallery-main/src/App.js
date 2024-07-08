import Header from './components/Header';
import './App.css';
import {useState,useEffect} from "react";
import Content from './components/Content';

function App() {
  const [search,setSearch]=useState("");
  const [term,setTerm]=useState("roses");
  const [items,setItems]=useState([]);
  useEffect(()=>{
    const fetchItems=async()=>{
      const response= await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`);
      const data= await response.json();
      setItems(Object.values(data)[2]);
      
    
    }
    fetchItems();
  
  },[term]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTerm(search);
    setSearch("");

  }
  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
     {items.length>0 ? ( <Content items={items}/>):(<h1>No Images Found</h1>)}

   
    </div>
  );
}

export default App;
