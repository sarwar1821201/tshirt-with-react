import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
   
    let message;
    if(cart.length==0){
        message= <p>Please Added Some Products</p>
    }
    else{
        message= <div>
            <h3>Boroloxx</h3>
            <p>Thanks For Wasting Money</p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length==1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>

            <p className={`bold bordered ${cart.length===3 ? 'yellow' : 'purple'}`}>SomeThing</p>

            {cart.length>2? <span className='purple'>Aro Kino</span> : <span>Fokira</span> }
            {message}
            {
                cart.map(tshirt=> <p
                     key={tshirt._id}>
                        {tshirt.name} <button 
                        onClick={()=>{ handleRemoveFromCart(tshirt._id)}}>X</button>  </p> )
            }
            {
                cart.length===2 && <p>Double Item</p>
            }

            {
                 cart.length===3 || <p>Etogula Keno!!!!</p>
            }

            
        </div>
    );
};

export default Cart;