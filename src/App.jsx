import { useState } from 'react'
import MyTitle from './components/MyTitle.jsx'
import styles from './App.module.css'
import InputBox from './components/InputBox.jsx'
import NoInput from './components/NoInput.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodIList from './components/FoodIList.jsx'
function App() {
  // let foodList=["SSSA","lslls"];
  let [activeItems,setActive]=useState([]);
  let [foodList,setFoodList]=useState([]);
  const OnButtonClick=(e) =>{
    // e.target.parentElement.style.backgroundColor="red";
    // console.log(e.target.parentElement.childNodes[0]);
    if(activeItems.includes(e.target.parentElement.childNodes[0])){
      let index=activeItems.indexOf(e.target.parentElement.childNodes[0]);
      let arr=activeItems.splice(index,index);
      setActive(arr);
      e.target.childNodes[0].data="Buy";
      e.target.parentElement.classList.remove("active");
    }else{
      let newItems=[...activeItems,e.target.parentElement.childNodes[0]];
      setActive(newItems);
      console.log(e);
      e.target.parentElement.classList.add("active");
      e.target.childNodes[0].data="Cancel";
    }
  }
  const OnKeyClick=(event) =>{
    if(event.key ==="Enter"){
      if(event.target.value==""){
        alert("Enter a valid foodname");
      }else{
      let newList=[...foodList,event.target.value];
      setFoodList(newList);
      event.target.value="";
    }}
  }
  return (
    <center className={styles.box}>
        <MyTitle></MyTitle>
        <InputBox foodlist={foodList} OnKeyClick={OnKeyClick}/>
        <NoInput foodlist={foodList}></NoInput>
        <ul className="list-group">
          <FoodIList foodlist={foodList} OnButtonClick={OnButtonClick} activeItems={activeItems}></FoodIList>
        </ul>
    </center>
  )
}

export default App
