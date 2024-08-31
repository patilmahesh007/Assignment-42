import React, {useState} from 'react';
import './card.css';

function Card({ description, title, img, price }) {
  let[Quantity,setQuantity]=useState(0)
let total=Quantity* price
  return (

    <div className="card">
      <img
        src={img}
        className="img"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <span className='quantity-block'><button onClick={()=>{setQuantity(Quantity>=1?Quantity-1:Quantity+0)
}}>minus</button>
<p> {Quantity} </p>

<button onClick={()=>{setQuantity(Quantity+=1)
}}>plus</button>

        </span>
        <span className='price-btn'>

          <span className='price'>
            {price ? price : <span className="not-available">not available</span>}
          </span>
          <button className="btn">Buy now</button>
        </span>
      </div>
    </div>
  );
}

export default Card;
