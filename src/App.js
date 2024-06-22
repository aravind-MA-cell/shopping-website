import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

// Database
import  products from './db/data'
import Card from './components/Card';

function App() {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery]= useState("");


  // input filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==
    -1
  );

  // ratio filter
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }

  // buttons filter
  const handleClick = event =>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filteredProducts = products

    // filtering input items
    if(query){
      filteredProducts = filteredItems
    }

    // selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
      ({category,color,company,newPrice,title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected 


      );
    }

    return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice}) =>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews ={reviews}
      newPrice={newPrice}
      prevPrice = {prevPrice}
      />
    ));
  }
  const result = filteredData(products,selectedCategory,query)
  return (
    <div className="App">
      <Sidebar handleChange={handleChange}/>
      <Nav  query ={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </div>
  );
}

export default App;
