import "./Search.scss";

function Search({ classExtension }) {
  // Renders to page
  return (
    <section className={`search__${classExtension}`}>
      <input type="search" className="search__input" id="search"></input>
    </section>
  );
}

export default Search;
