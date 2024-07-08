import Cards from "./Cards";
const Content = ({items}) => {
    console.log(items);
    
  return (
    <div className="container">
       {items.map(item=>(
        <Cards key={item.id} item={item}/>
        

       ))}
    </div>
  )
}

export default Content
