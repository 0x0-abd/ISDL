import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Cart = () => {
    const {products, quantity, total} = useSelector((state) => state.cart)
    return (
        <>
            <section className="h-100 h-custom" style={{/*backgroundColor: "#d2c9ff"*/}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{quantity} items</h6>
                                                </div>
                                                <hr className="my-4" />

                                                {products.length>0 ? products.map((product) => (
                                                    <div key={product._id}>
                                                    <CartItem item={product} />
                                                    </div>
                                                )) : <h2> No Items in Cart</h2>}

                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="#!" className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">{quantity} items</h5>
                                                    <h5>{total}</h5>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Pickup Time</h5>

                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value="1">10 minutes</option>
                                                        <option value="2">20 minutes</option>
                                                        <option value="3">40 minutes</option>
                                                    </select>
                                                </div>




                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>Rs {total}</h5>
                                                </div>

                                                <button type="button" className="btn btn-dark btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Place Order</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart