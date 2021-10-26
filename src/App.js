import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import Image from "./components/Image";
import ItemLocation from "./components/ItemLocation";
import StartScreen from "./components/StartScreen";
import './styles/main.css'


var item_one = {classname: "item_one", name: "cortana" }
var item_two = {classname: "item_two", name: "neo"}
var item_three = {classname: "item_three", name: "link" }


function App() {


  return (
    <div>
    <Header />
    <StartScreen />
    <div className="container">
      <Image />
      <ItemLocation data={item_one} />
      <ItemLocation data={item_two} />
      <ItemLocation data={item_three} />
    </div>
    <Footer />
   </div>
  );
}


export default App;

