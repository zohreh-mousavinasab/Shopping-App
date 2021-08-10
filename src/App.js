
//import HookCounter from "./component/HookCounter";
// import "./index.css"
//import HookObject from "./component/HoockObject";
//import HookArray from "./component/HookArray";

import React,{Component} from "react";
import ProductList from "./component/ProductList";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";


class App  extends Component {
  state = {   
    products:[
     {title:"book1", price:"1$", id:1, quantity:1},
     {title:"book2", price:"5$" , id:2, quantity:3},
     {title:"book3", price:"8$" , id:3, quantity:5},
   ],
   };
   
   removeHandler=(id)=>{
    console.log("clicked",id);
    const filteredProducts= this.state.products.filter((p) => p.id !== id);
    this.setState({products: filteredProducts});
               };
   additionHandler=(id)=>{

   const products=[...this.state.products];
   const selectionItem=products.find((p)=> p.id===id);
   selectionItem.quantity++;
   this.setState({products});
   };
   ondecHandler=(id)=>{
     const products=[...this.state.products];
     const selectionItem=products.find((p)=> p.id===id);
     if (selectionItem.quantity===1){
       const filteredProducts=products.filter((p) => p.id !== id);
       this.setState({products: filteredProducts});

     }
     else {
     selectionItem.quantity--;
     this.setState({products});
   }
 };
   changeHandler=(event, id)=>{
     const products=[...this.state.products];
     const selectionItem=products.find((p)=> p.id===id);
     selectionItem.title=event.target.value;
     this.setState({products});

   };
                 
   render() {
        return ( 
          <div className="container" id="title">
              <NavBar totalItems={this.state.products.filter((p)=>p.quantity>0).length}/>
              <ProductList
              products={this.state.products}
              onDelete= {this.removeHandler}
              onAddition={this.additionHandler}
              onChange={this.changeHandler}
              ondec={this.ondecHandler}
              />
          </div>
        );
      }
   }
    export default App;

    