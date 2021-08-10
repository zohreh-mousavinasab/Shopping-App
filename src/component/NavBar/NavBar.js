import styles from "./navBar.module.css";


const NavBar = (props) => {
    return (
    <header className={styles.navBar}>
       <h2> Shopping App</h2>
       <span> {props.totalItems} </span> 
        
        </header>
    );
}; 
export default NavBar;