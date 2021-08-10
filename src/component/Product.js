
import style from"./product.module.css";
import { IoTrashOutline } from "react-icons/io5";

const Product = ({onChange, onDelete, onAddition, ondec, product }) => {
        return (  
     <div className={style.product}>
     <p>product name : {product.title}</p>
     <p>product price : {product.price}</p>
     <span className={style.value}>{product.quantity}</span>
     <input type="text"
     className={style.input}
      onChange={onChange}
      value={product.target}
      />
     <button onClick={onAddition} className={`${style.add} ${style.button}`} >+</button>
     <button onClick={ondec} className={`${style.add} ${style.button} 
     ${product.quantity=== 1 ? style.trash:null}`} >
       {product.quantity> 1 ? "-": <IoTrashOutline/>}      
      </button>
     <button onClick={onDelete} className={style.button}> Delete </button>
      
     </div>
          );
};
 
export default Product;