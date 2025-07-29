import React from 'react'

const AboutSection = () => {
  return (
    <div>
        <section className='about' id='about'>

        <h1 className='heading'> <span>About</span>{" "}Us</h1>

        <div className="row">

        <div className="video-container">
        <video src="/images/aboutvideo.mp4" loop autoPlay muted ></video>
        <h3> best flower sellers</h3>
        </div>

        <div className="content">
        <h3>why choose us ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim dolor labore ab explicabo cum nihil exercitationem odit, consequatur ipsum. Voluptates fuga obcaecati eveniet labore animi accusamus voluptas veniam quae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi adipisci recusandae eum quidem consectetur cum amet, enim excepturi cumque.</p>
        <a href="#" className='btn'>learn more</a>
        </div>

        </div>
        </section>
    </div>
  )
}

export default AboutSection;