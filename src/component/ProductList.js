import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    
                 renderProduct=()=>{
                  
                   const {onChange, onDelete, onAddition, ondec, products}=this.props;
                     if(products.length === 0) 
                     return<div> There is no product.</div>;
                 return products.map((product,index)=>{
                  return( 
                  <Product
                   product={product}
                   key={index} 
                   onDelete={()=> onDelete(product.id)}
                   onAddition={()=> onAddition(product.id)}
                   onChange={(e)=> onChange(e, product.id)}
                   ondec={()=> ondec( product.id)}
                   />
                 );
                  }) 
              };
    render() { 
        return <div>{this.renderProduct()}</div>;

         }
}
 
export default ProductList;