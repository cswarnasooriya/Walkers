import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import video from '../../../../src/components/images/my.mp4';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {/* Video background */}
        <video className='background-video' autoPlay muted loop>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='container'>
          <Heading
            title='Transforming Challenges Into Opportunities With BPO'
            subtitle='Schedule a call with us to discuss your project and get a quote in minutes...'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
