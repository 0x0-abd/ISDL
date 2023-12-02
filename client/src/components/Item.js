import React from 'react';
import { addProduct, decrementProduct } from '../redux/cartRedux';
import { useSelector, useDispatch } from "react-redux";
import "./Item.css"

const Item = (props) => {
    let { item, title, description, imageUrl } = props;
    console.log(title);
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.cart);

    var inCart = false;
    var i;
    for (i = 0; i < products.length; i++) {
        if (products[i]._id === item._id) {
            inCart = true;
            break;
        }
    }

    const handleAddProduct = () => {
        const modItem = JSON.parse(JSON.stringify((item)));
        modItem.itemQuantity = 1;
        dispatch(addProduct(modItem));
    }

    const handleDecrementProduct = () => {
        const modItem = JSON.parse(JSON.stringify((item)));
        modItem.itemQuantity = 1;
        dispatch(decrementProduct(modItem));
    }

    return (
        <>
            <div className="card text-bg-dark my-3">
                <img src={imageUrl ? imageUrl : "placeholder_product.jpg"} className="card-img-top" style={{width:"100%", objectFit:"cover"}} alt="..." />
                {inCart && <span class="position-absolute translate-middle badge rounded-pill bg-success" style={{ left: "90%", top: "5%", zIndex: 1 }}>
                    In Cart
                    <span class="visually-hidden">unread messages</span>
                </span>}

                <div className="card-body">
                    <h5 className="card-title text-uppercase">{title}</h5>
                    <p className="card-text">Rs {item.price}</p>
                    <div className="d-flex justify-content-center" style={{gap:"2vh"}}>
                        {!inCart && <button className="btn btn-md btn-primary" onClick={handleAddProduct}>Add To Cart</button>}
                        {inCart && <button className="btn btn-block btn-md btn-primary" onClick={handleDecrementProduct} style={{width:"12%"}}>-</button>}
                        {inCart && <p className="card-text">{products[i].itemQuantity}</p>}
                        {inCart && <button className="btn btn-block btn-md btn-primary" onClick={handleAddProduct} style={{width:"12%"}}>+</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item