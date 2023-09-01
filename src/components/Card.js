import React from 'react';
import './styles/Card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  return (
    <>
        <div className='card' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className='card_title' style={{
                backgroundColor: props.color,
            }}>
                <h1><b>{props.title}</b></h1>
            </div>
            <div className='card_content' style={{
                borderBottom: `10px solid ${props.color}`,
            }}>
                <p>{props.content}</p>
            </div>
            <div className='card_subtitle'>
                <h1  style={{
                    textShadow: `0px 0px 7.5px ${props.color}`
                }}>{props.subtitle}</h1>
            </div>
        </div>
    </>
  )
}

export default Card