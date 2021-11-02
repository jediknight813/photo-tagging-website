import React, { useState } from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import Image from "./components/Image";
import ItemLocation from "./components/ItemLocation";
import StartScreen from "./components/StartScreen";
import './styles/main.css'


var item_one = {classname: "item_one", name: "cortana" }
var item_two = {classname: "item_two", name: "link"}
var item_three = {classname: "item_three", name: "neo" }


function App() {
  const [items_found, setItemsFound] = useState( {'cortana': false, 'link': false, 'neo': false} )


  return (
    <div>
      <Header data={items_found} />
      <StartScreen />
      <div className="container">
        <Image />
        <ItemLocation data={item_one} setItemsFound={setItemsFound} />
        <ItemLocation data={item_two} setItemsFound={setItemsFound}  />
        <ItemLocation data={item_three} setItemsFound={setItemsFound} />
      </div>
      <Footer />
   </div>
  );
}


export default App;
