import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, decrementProduct } from '../redux/cartRedux';

const CartItem = (props) => {
  let { item } = props;

  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    const modItem = JSON.parse(JSON.stringify((item)));
    modItem.itemQuantity = 1;
    dispatch(removeProduct(modItem));
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
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src="placeholder_product.jpg"
            className="img-fluid rounded-3" />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted text-capitalize">{item.category}</h6>
          <h6 className="text-black mb-0">{item.item_name}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-evenly">
          <button className="btn btn-primary btn-sm" onClick={handleDecrementProduct} style={{width:"23%"}}>
            <i className="fas fa-minus"> - </i>
          </button>


          {item.itemQuantity}

          <button className="btn btn-primary btn-sm" onClick={handleAddProduct} style={{width:"23%"}}>
            <i className="fas fa-plus"> + </i>
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-4 offset-lg-1">
          <div className="d-flex justify-content-around">
          <h6 className="mb-0">{item.itemQuantity > 1 ? (<>Rs {item.price} x {item.itemQuantity} = <b>Rs {Number(item.price) * Number(item.itemQuantity)} </b></>) : (<b>Rs {item.price} </b>)}</h6>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="img-fluid w-1 h-1" width="30" onClick={handleRemoveProduct}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </div>

        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
        </div>
      </div>

      <hr className="my-4" />
    </>
  )
}

export default CartItem