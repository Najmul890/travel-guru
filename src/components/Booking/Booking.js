import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import resortData from '../../fakeData';
import './Booking.css';
import { useForm } from "react-hook-form";

import TextField from '@material-ui/core/TextField';





const Booking = () => {
  const history=useHistory()
  
    let {resortKey}=useParams();
    const resortItem= resortData.find(item=> item.key===resortKey );
    const {title,img,description,key}=resortItem,

     useStyles= makeStyles({
        bgStyle:{backgroundImage:`url(${img})`,
        width:'100%',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:'100vh',
        
    }
    })
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
      console.log(data)
      history.push(`/details/${key}`) 
    };
    
    
    const classes = useStyles();
  
    return (
        
        <div className={classes.bgStyle} >
            <div className=" bg-blur container-fluid">
             <div className="content-box container">
               <div className="row">
                   <div className="left col-md-7">
                   <h2>{title} </h2>
                   <p> {description} </p>
                   </div>
                   <div className="right col-md-5">
                   
                   <div  className="form">
                   <form onSubmit={handleSubmit(onSubmit)}>
                       Origin <br/>
                     <input className="text" name="origin" ref={register({ required: true, maxLength: 20 })} />
                      <br/>
                      {errors.origin && <span>This field is required</span>}
                      <br/>
                      Destination <br/>
                    <input className="text" name="destination" ref={register({required: true, maxLength: 20})} /> <br/>
                      {errors.destination && <span>This field is required</span>}
                    
                      <br/>
                    
                    
                   <div className="row">
                       <div className="col-md-6">
                       <TextField
                   
                   id="date"
                   label="From"
                   type="date"
                   defaultValue="2020-09-30"
                   className={classes.textField}
                   InputLabelProps={{
                   shrink: true,
                   
                  }}
                  />
                       </div>
                       <div className="col-md-6">
                       <TextField
                   id="date"
                   label="To"
                   type="date"
                   defaultValue="2020-10-01"
                   className={classes.textField}
                   InputLabelProps={{
                     shrink: true,
                   }}
                   />
                       </div>
                   </div>
                  <br/> <br/>
                   
                   
                   
                     <input value="Start Booking" style={{cursor:'pointer'}} className="main-btn" type="submit"/>
                   
                   
                   
                   </form>
                   
                   </div>
    
                   </div>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Booking;
