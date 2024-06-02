import './App.css';
import {useState, useEffect} from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Category from './Components/Category/Category';

function App() {

  const productList = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];
  
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    
    setFilteredProducts(productList);

    if(searchText !== "") {
      let searchedProducts = filteredProducts.filter(i => i.name.toLowerCase().indexOf(searchText.toLowerCase(),0) > -1);
      setFilteredProducts(searchedProducts);
    }

    if(inStockOnly) {
      let stockedProducts = filteredProducts.filter(i => i.stocked === true);
      setFilteredProducts(stockedProducts);
    }
    
  }, [searchText, inStockOnly])

  const categories = [... new Set(filteredProducts.map(value => value['category']))];
  const categoryItems = categories.map((category, index) =>
    <Category key={index} category={category} items={filteredProducts.filter(i => i.category === category)} />
  );

  return (
    <div className="App">
        <SearchBar searchText={searchText} inStockOnly={inStockOnly} onSearch={setSearchText} onStock={setInStockOnly} />
        <table>
          <thead>
            <tr>
              <td className="heading">Name</td>
              <td className="heading">Price</td>
            </tr>
          </thead>
          <tbody>
            {categoryItems}
          </tbody>
        </table>
    </div>
  );
}

export default App;
