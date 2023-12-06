import React from 'react';
import { addProduct, decrementProduct } from '../redux/cartRedux';
import { useSelector, useDispatch } from "react-redux";
import { publicRequest } from '../requestMethod';
import "./Item.css"

const Item = (props) => {
    let { item, title, setFlag, flag } = props;
    console.log(title);
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.cart);
    const { currentUser } = useSelector((state) => state.user);

    if(true) {
        var cardStyle = item.in_stock ? {} : {opacity:"0.3"};
    }

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

    const handleToggle = async () =>{
        const negation = !item.in_stock;
        try {
            console.log(item._id, negation);

            await publicRequest.put(`/admin/toggleStock/${item._id}`, { negation })
            setFlag(flag+1);
        }
        catch(err) {
        }
    }

    return (
        <>
            <div className="card text-bg-dark my-3" style={cardStyle}>
                <img src="https://static.vecteezy.com/system/resources/previews/024/692/158/large_2x/food-grocery-store-shopping-illustration-with-foods-items-and-products-assortiment-on-the-supermarket-in-flat-cartoon-hand-drawn-templates-vector.jpg" className="card-img-top" style={{width:"100%", objectFit:"cover"}} alt="..." />
                {currentUser!=null && currentUser.user.isAdmin && <h5><span className="position-absolute translate-middle badge rounded-pill bg-info" onClick={handleToggle} style={{ left: "15%", top: "5%", zIndex: "1" }}>
                    Toggle Stock
                    <span className="visually-hidden">unread messages</span>
                </span></h5>}
                {inCart && item.in_stock && <h5><span className="position-absolute translate-middle badge rounded-pill bg-success" style={{ left: "90%", top: "5%", zIndex: "1" }}>
                    In Cart
                    <span className="visually-hidden">unread messages</span>
                </span></h5>}
                {!item.in_stock && <h5><span className="position-absolute translate-middle badge rounded-pill bg-secondary" style={{ left: "90%", top: "5%", zIndex: "1" }}>
                    Out of Stock
                    <span className="visually-hidden">unread messages</span>
                </span></h5>}

                <div className="card-body">
                    <h5 className="card-title text-capitalize fw-bold">{title}</h5>
                    
                        <div className='d-flex justify-content-between'>
                            <div>
                            <p className="card-text fw-lighter">
                            Rs {item.price}
                            </p>
                            </div>
                            <div className='text-capitalize' style={{opacity:"0.7"}}>
                            <p className="card-text fw-lighter">
                            {item.category}
                            </p>
                            </div>
                        </div>
                    
                    <div className="d-flex justify-content-center" style={{gap:"2vh"}}>
                        {!inCart && <button className="btn btn-md btn-primary" onClick={handleAddProduct} disabled={!item.in_stock}>Add To Cart</button>}
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