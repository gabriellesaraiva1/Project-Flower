import React from 'react'

const Review = () => {
  return (
    <section className='review' id='review'>
  <h1 className='heading'>customer's <span>review</span></h1>

  <div className="box-container">

    <div className="box">
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores reprehenderit similique animi asperiores. Laborum autem ab optio reiciendis soluta doloribus dolor rem atque sint? Incidunt cupiditate necessitatibus dolor labore esse!</p>
      <div className="user">
        <img src="images/homem.jpg" alt="imagem de homem" />
        <div className='user-info'>
          <h3>john del</h3>
          <span>happy customer</span>
        </div>
      </div>
      <span className="fas fa-quote-right"></span>
    </div>

    <div className="box">
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur alias minima saepe consectetur dolor repudiandae optio. Consectetur dolorum animi amet autem laudantium id nesciunt delectus dolor incidunt alias! Nemo?</p>
      <div className="user">
        <img src="images/mulher1.jpg" alt="imagem de mulher" />
        <div className='user-info'>
          <h3>Petala Simoes</h3>
          <span>happy customer</span>
        </div>
      </div>
      <span className="fas fa-quote-right"></span>
    </div>

    <div className="box">
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo culpa enim vero veritatis ipsum? Temporibus dignissimos hic, laudantium officia fuga repellendus placeat quaerat alias dolorem impedit in nesciunt eligendi nam.</p>
      <div className="user">
        <img src="images/mulher2.jpg" alt="imagem de mulher" />
        <div className='user-info'>
          <h3>Virginia Silva</h3>
          <span>happy customer</span>
        </div>
      </div>
      <span className="fas fa-quote-right"></span>
    </div>

  </div>
</section>

  )
}

export default Review;