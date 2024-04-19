import styles from "./FoodIList.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
function foodItemsList({foodlist,OnButtonClick,activeItems}){
    return (<>{foodlist.map((number)=>(
                <li key={number} className={`list-group-item ${styles.list}`}>{number} <button className={`btn btn-success ${styles.button}`} onClick={OnButtonClick}>Buy</button></li>
                ))}
    </>)
}

export default foodItemsList;