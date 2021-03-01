import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total= cart.reduce((total,prd)=>total+prd.price,0);
    // Alternate method
    // let total=0;
    // for(let i=0; i<cart.length;i++){
    //      let product=cart[i];
    //     let price =product.price;
    //     total=total+price;
    // }
    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    let tax=total/10;
    let grandTotal=total+shipping+tax;
    const formatNumber=(num)=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax+Vat: {formatNumber(tax)}</p>
            <p>Total Price= {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;