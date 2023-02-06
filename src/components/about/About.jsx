import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import aboutimg from '../../assets/About1.png';
import Arrow from '../atoms/arrow/Arrow';
import Social from '../atoms/socials/Social';


export default class About extends Component {

  render() {
    const styleimg = {
      marginTop: '10%',
      marginLeft: '-40%',
      height: '70%'
    }
    const aboutText = {
      fontFamily: 'Lucida Handwriting',
      color: '#f58516',
      letterSpacing: '5px',
      lineHeight: '1.8',
    }

    return (
      <div>
        <Social/>
        <div className="row">
          <div className="col-4"><img src={aboutimg} alt="react logo" style={styleimg} /></div>
          <div className="col-8" style={{ marginLeft: '-5%', marginTop: '5%' }}>
            <h1 style={aboutText}>Hi, I'm<br />
              Ayush Khamrui
              <Typewriter
                options={{
                  strings: ['Front-end Developer', 'Back-end Developer', 'FullStack Developer', 'Certified Cloud Practitioner'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className=' container text-light' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              As a B.Tech Engineer with a passion for technology, I bring a unique blend of technical expertise and business acumen to my role as an Analyst and Software Engineer. With in-depth experience in React Js, Java, and Python, I excel at developing and delivering innovative software solutions that meet complex business requirements.
              As a certified Cloud Practitioner, I have a strong understanding of cloud computing and its capabilities, and I am confident in leveraging this knowledge to create scalable, secure, and resilient solutions. My ability to analyze, design, and implement complex systems, combined with my passion for technology, make me an asset to any organization.
              I am eager to take on new challenges and opportunities to further develop my skills and make a positive impact on my team and the organization. If you are looking for a dedicated and dynamic engineer with a strong commitment to excellence, please don't hesitate to connect with me.
            </div>
            <br />
            <div className='btn border border-primary text-light' style={{ boxShadow: '2px 2px', marginLeft: '10px' }}>Know More</div>
          </div>
        </div>
        <Arrow/>
      </div>
    )
  }
}