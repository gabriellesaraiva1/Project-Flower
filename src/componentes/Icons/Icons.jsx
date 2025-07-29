import React from 'react'


const Icons = () => {
  return (
    <div>
        <section className='icons-container'>

            <div className='icons'>
                <img src="/images/carrinhodecompras.png" alt="arrinhodecompras.png" />
                <div className="info">
                <h3>free delivery</h3>
                <span>on all orders</span>
                </div>
            </div>

             <div className='icons'>
                <img src="/images/moneybag.png" alt="moneybag.png" />
                <div className="info">
                <h3>10 days return </h3>
                <span>moneyback guarentee</span>
                </div>
            </div>

             <div className='icons'>
                <img src="/images/cartaopresente.png" alt="cartaopresente.png" />
                <div className="info">
                <h3>offer & gifts</h3>
                <span>on all orders</span>
                </div>
            </div>

               <div className='icons'>
                <img src="/images/cartaodecredito.png" alt="cartaodecredito.png" />
                <div className="info">
                <h3>secure paymens</h3>
                <span> protected by paypal </span>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Icons;