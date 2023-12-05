import React from 'react';
import Item from '../../components/Item';
import { publicRequest } from '../../requestMethod';
import { useState, useEffect } from 'react';

const Shop = (props) => {
  const [inventoryData, setInventoryData] = useState([]);
  const [flag, setFlag] = useState(0);
  const view = props.show;

  useEffect(() => {
    if(view==="all") {
      publicRequest.get("admin/inventory").then((res) => {
        setInventoryData(res.data.items);
        console.log(res.data);
      });
    } else {
      publicRequest.get(`admin/inventory/${view}`).then((res) => {
        setInventoryData(res.data.items);
        console.log(res.data);
      });
    }
    
  }, [flag, view]);

  return (
    <div className="container my-3">
      <div className="row">
        {console.log(inventoryData.length)}
        {inventoryData.length > 0 ? inventoryData.map((item) => (
          <div className="col-md-3" key={item._id}>
            <Item title={item.item_name} description={item.item_description} item={item} setFlag={setFlag} flag={flag}/>
          </div>
        )) : (
          <h2>No Items Found</h2>
        )}
      </div>
    </div>
  )
}

export default Shop