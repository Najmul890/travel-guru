import React from 'react';
import { useParams } from 'react-router-dom';
import resortData from '../../fakeData';
import DetailsInfo from '../DetailsInfo/DetailsInfo';

const DestinationDetails = () => {
    const {resortKey}=useParams();
    const resortItem= resortData.find(item=> item.key===resortKey );
    const {title,map,details}=resortItem;

    return (
        <div>
            <div className="container-fluid" style={{position: 'absolute',
            top:'100px'}} >
            <h2 style={{marginLeft:'20px'}} > Stay in {title} </h2>
            
                <div className="row">
                    
                    <div className="col-md-6">
                       {
                           details.map(item=> <DetailsInfo item={item} ></DetailsInfo> )
                       }
                    </div>
                    
                    <div className="col-md-6">
                        <h2>Destination Via Map</h2>
                        <p>Sorry, free google map API is not available right now. </p>
                        <p>So, here is still map photo via your destination.  </p>
                        <img src={map} alt=""/>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default DestinationDetails;