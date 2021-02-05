export default function SearchWidget(){

  return (
    <form className="top-search-widget">
      <input type="text" placeholder="Найти..."/>  
      <button type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21"><g fill="none"><rect width="8.903" height="1.25" x="14.747" y="17.027" fill="#333" rx=".625" transform="rotate(45 19.198 17.652)"></rect><ellipse cx="9.274" cy="9.073" stroke="#333" rx="8.774" ry="8.573"></ellipse></g></svg>
      </button>
    </form>
  )
}