import styles from "./InputBox.module.css"
function InputBox({foodlist,OnKeyClick}){
    return <input type="text" className={styles.foodBox} onKeyDown={OnKeyClick}/>
}

export default InputBox;