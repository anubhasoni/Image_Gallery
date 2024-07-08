
const Header = ({handleSubmit,search,setSearch}) => {
  return (
    <div className="header">
      <form action="" onSubmit={handleSubmit}>
        <input  type="text" value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search for images..."/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Header
