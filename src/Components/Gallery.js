//Components
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
//Styles
import '../App.css';
import styles from '../styles.less';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';

function Gallery() {
    const [media,setMedia] = useState(data);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = media.length-1;
        if(index<0){
          setIndex(lastIndex);
        }
        if(index>lastIndex){
          setIndex(0);
        }
      },[index,media]);
  
    return (
    <div>
        <section className='section'>
        <div className='title'>
            <h2>
            <span>/</span>gallery
            </h2>
        </div>
        <div className='section-center'>
            {media.map((article, articleIndex)=>{
            const { id, url, name } = article;
            
            let position ='nextSlide';

            if(articleIndex === index){
                position = 'activeSlide';
            }

            if(articleIndex ===  (index-1) || (index === 0 &&  articleIndex === media.length - 1)){
                position = 'lastSlide';
            }

            return(
                // if condition for if video or picture
                <article key={id} className={position}>
                    <iframe className='media-square' width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </article>
            );

            })}
            <button className='prev' onClick={()=>{setIndex(index-1)}}>
                <FiChevronLeft className='chevron-weight'/>
            </button>
            <button className='next' onClick={()=>{setIndex(index+1)}}>
            <FiChevronRight className='chevron-weight' />
            </button>
        </div>
    </section>

        {/* <Row gutter={[16, 16]}>
            <Col span={12}> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8xoYo-rU_Xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col span={12}> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PiRYqF97EnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={12}> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A96kb0mjU6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col span={12}> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/q8p4ToT-3aI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={12}> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cZYRt1IrO14?start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col span={12}> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZXYMqGeyMvY?start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={12}> </Col>
            <Col span={12}> </Col>
        </Row> */}
    </div>
  );
}

export default Gallery;