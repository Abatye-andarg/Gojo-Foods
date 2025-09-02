import { useState } from 'react'
import './Search.css'
function Search({ data, isToggled, setToggled }) {
    const [query, setQuery] = useState();
 

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };



    return (
        <div className="search"
        style = {{backgroundColor : isToggled ? "#616c5dff": "rgba(168, 198, 187, 1)"}}
        >

            <div className="search-menu">
                Search from MENU
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleSearchChange}
                />


                <button>
                    Search
                </button>
            </div>
            {/* <h2>Order Your Favourite food or make your own at home</h2> */}
        </div>
    )
}

export default Search


//     // ... inside SearchComponent

// const filteredData = data.filter(item =>
//   item.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

// // ...

{/* ... display filtered results */ }
{/* <ul>
      {filteredData.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}
