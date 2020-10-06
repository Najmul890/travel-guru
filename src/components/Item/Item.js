import React from 'react';
import './Item.css';

import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Item = (props) => {
    const {title,description,key,img}=props.item;
    console.log(props.item)
    const useStyles= makeStyles({
        bgStyle:{backgroundImage:`url(${img})`,
        width:'100%',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:'100vh',
        
    }
    })
    const classes= useStyles()
    
    return (
        <div  className={classes.bgStyle}   >
            <div className="container-fluid bg-box ">
            <div style={{width:'500px'}} className="container bg-content">
            <h2 style={{fontSize:'60px'}} > {title} </h2>
            <p style={{color:'#fff',fontSize:'20px'}} >{description} </p>
            <Link to={"/booking/"+key} >
              <button className="main-btn" >Booking <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
            </div>
            </div>
            
        </div>
    );
};

export default Item;