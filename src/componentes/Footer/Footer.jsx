import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="box-container">
          
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">products</a>
            <a href="#">review</a>
            <a href="#">contact</a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my order</a>
            <a href="#">my favorite</a>
            <a href="#">review</a>
            <a href="#">contact</a>
          </div>

          <div className="box">
            <h3>locations</h3>
            <a href="#">india</a>
            <a href="#">usa</a>
            <a href="#">japan</a>
            <a href="#">france</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">+123 - 456 - 7890</a>
            <a href="#">exemplo@gmail.com</a>
            <a href="#">mumbai, india - 4004104</a>
            <img src="images/bandeiradecartoes.webp" alt="bandeiras de cartoes" />
          </div>

        </div>
      </section>

      <div className="credit">created by <span>Gabrielle Souza</span> | all rights reserved</div>
    </div>
  )
}

export default Footer;