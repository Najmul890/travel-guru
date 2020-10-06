import React, { useState } from 'react';
import resortData from '../../fakeData';
import Item from '../Item/Item';
import './Home.css';
import Header from '../Header/Header';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);




const Home = () => {
    const [items, setItems]=useState(resortData);
    const [type, setType]=useState("Cox's Bazar");
    const item= items.filter(pd=> pd.title===type);
    
    
    return (
        <div style={{position:'relative'}} >
            <Header></Header>
           
           <div style={{width:'685px',position:'absolute',right:'10px',top:'180px'}} className="img-box">
               
           <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      <SwiperSlide  onClick={()=>setType("Cox's Bazar")} style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide1" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Cox's Bazar" ? "selected-item" : "item" }><h2>Cox's Bazar</h2> </div>
      </SwiperSlide>
      
      
      <SwiperSlide  onClick={()=>setType("Sajek Vally")}  style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide2" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Sajek Vally" ? "selected-item" : "item" } ><h2>Sajek Vally</h2> </div>
      </SwiperSlide>
      
      
      <SwiperSlide  onClick={()=>setType("Sreemongol")}  style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide3" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Sreemongol" ? "selected-item" : "item" } > <h2>Sreemongol</h2> </div>
      </SwiperSlide>


      <SwiperSlide  onClick={()=>setType("Sundarban")} style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide4" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Sundarban" ? "selected-item" : "item" }><h2>Sundarban</h2> </div>
      </SwiperSlide>
      

      <SwiperSlide  onClick={()=>setType("Kuakata")} style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide5" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Kuakata" ? "selected-item" : "item" }><h2>Kuakata</h2> </div>
      </SwiperSlide>


      <SwiperSlide  onClick={()=>setType("Rangamati")} style={{borderRadius:'5px',width:'200px',height:'280px'}} className="slide slide6" >
      <div style={{width:'215px',height:'280px',float:'left'}} className={type === "Rangamati" ? "selected-item" : "item" }><h2>Rangamati</h2> </div>
      </SwiperSlide>
      
      
      ...
    </Swiper>
           
           </div>
           
           <div style={{width:'100%',height:'100vh'}}  >
           {
               item.map(item=> <Item item={item} ></Item> )
           }
           </div>
            
        </div>
    );
};

export default Home;

           
           