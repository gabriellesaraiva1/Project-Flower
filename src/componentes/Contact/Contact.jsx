import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="contact" id='contact'>
        <h1 className="heading"><span>contact</span> us</h1>
        <div className="row">
          <form action="">
            <input type="text"  placeholder="name" className="box" />
            <input type="email"  placeholder="email" className="box" />
            <input type="number"  placeholder="number" className="box" />
            <textarea name="" className="box" placeholder="message" id="" cols="" rows="10" ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form> 

          <div className="image">
            <img src="images/contactimage.png" alt="imagem de 3 mulheres" />
        </div> 
        </div>
        </section>
    </div>
  )
}

export default Contact;