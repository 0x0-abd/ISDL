import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { publicRequest } from '../requestMethod'
import { useState, useEffect } from 'react'
import Modal from '../components/OrderHistory'

const Orders = () => {

    const [orderHistoryList, setOrderHistoryList] = useState([]);
    const {currentUser} = useSelector((state) => state.user);

    useEffect(() => {
        
        publicRequest.get(`order/${currentUser.user._id}`).then(res => {
            console.log(res.data.orders)
            setOrderHistoryList(res.data.orders.reverse())
        })
    }, [])

    function date(dateto) {

        const date_to_be = new Date(dateto)
        return date_to_be.toDateString()
    
    }

    return (
        <>
            <div className="main-body">
                <h1 style={{color:"white"}}>Order History</h1>
                <div className="content-box">
                    <div className="content-box">
                        <div style={{ display: 'flex', width: "100%", justifyContent: "center", marginBottom: "2rem" }}>

                        </div>
                    </div>
                    <div className="card">
                        {orderHistoryList.length > 0 ? <div className="table-responsive">
                            <table className="table table-striped table-sm" style={{ width: "100%", height: "100%" }}>
                                <thead className="table__header">
                                    <tr>
                                        <th>Sno</th>
                                        <th>Order Date</th>
                                        <th>Total Cost</th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table__body">
                                    {orderHistoryList.map((order, i) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {date(order.order_date)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800">
                                                    {order.total}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.isVerified ?
                                                    (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Accepted
                                                    </span>) :
                                                    (
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-red-800">
                                                            Pending
                                                        </span>
                                                    )
                                                }
                                            </td>
                                            <td className="table__actions text-center flex justify-center">
                                                <Modal order={order ?? {}} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> : <h2>No Orders found</h2>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders