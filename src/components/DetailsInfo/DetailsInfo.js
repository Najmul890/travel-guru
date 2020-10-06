import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DetailsInfo = (props) => {
    const {name,img,price,star, review}=props.item
    return (
        
            <div style={{margin:'20px 0 10px 0'}} className="container-fluid">
                <div className="row">
                <div className="col-3">
                   <img style={{width:'180px',height:'200px'}} src={img} alt=""/>
                </div>
                <div style={{paddingLeft:'60px'}} className="col-md-9">
                    <h4>{name} </h4>
                    <p>4 guest 2 bedrooms 2beds 2baths </p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation flexibility available </p>
                    <span><FontAwesomeIcon style={{color:'goldenrod'}} icon={faStar} /> {star}({review})  </span> <span style={{fontWeight:'700',marginLeft:'10px'}} >${price}</span><span>/night</span>
                    
                </div>
            </div>
            </div>
        
    );
};

export default DetailsInfo;