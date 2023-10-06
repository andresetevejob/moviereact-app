const SearchBar = (props)=>{
   
   const handleFilterTextChange=e=>{
     props.onFilterTextChange(e.target.value)
   }
   const filterText = props.filterText;
   return (
    <section className="search-bar mt2">
    <div className="input-group">
      <i className="material-icons input-icons" >search</i>
      <input type="text" className="input-area" value={filterText} required id="elmSearchMenu"
        onChange={handleFilterTextChange}
      />
      <label htmlFor="elmSearchMenu" className="label"> Search Movie </label>
    </div>
    </section>
   )
}
export default SearchBar;