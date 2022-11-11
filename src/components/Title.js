import styles from "./Title.module.css";

function Title(){
    return (
        <div className={styles.titlebox} >
            <h3 className={styles.title}>📚 Let me introduce popular Movies 📚</h3>
        </div> 
    )
}

export default Title;