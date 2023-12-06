import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { publicRequest } from '../requestMethod';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export default function OrderHistory({ isAdmin, order, flag, setFlag }) {
  console.log(order);
  const [open, setOpen] = React.useState(false);
  const [orderData, setOrderData] = React.useState([])
  const [retrieved, setRetrieved] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRetrieved(false)
  }


  const handleToggle = async () =>{
    try {
      publicRequest.post(`/order/confirm/${order._id}`, {negation:!order.isVerified});
      setFlag(flag+1);

    } catch (err) {

    }
  }

  // if (open && !retrieved) {
  //   (function (order) {
  //     console.log(order)
  //     axios.get("http://localhost:8080/admin/searchOrder/" + order._id).then(res => {
  //       console.log(res.data)
  //       const orderDetails = {
  //         total_items: res.data.item_count,
  //         items: res.data.issued_items
  //       }
  //       setOrderData(orderDetails)
  //     })
  //   })(order)
  //   setRetrieved(true)
  // }


  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black-700 rounded"
        onClick={handleOpen}>
        Details
      </button>

      {isAdmin && <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black-700 rounded"
        onClick={handleToggle}>
        {!order.isVerified ? "Verify" : "Undo"}
      </button>}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Total Items: {order.products.length}
            <br />
            Purpose : {order.remark}
            <br />
            <ul>
              {order.products.map((item) => (
                <li>
                  Item Name: {item.item_name} &nbsp;
                  Item Count: {item.itemQuantity}  &nbsp;
                  Price: {item.price}  &nbsp;
                </li>
              )
              )
              }
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}