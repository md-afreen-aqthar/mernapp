import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}} >
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1489381517/photo/portrait-of-gorgeous-brunette-woman-standing-city-street-fashion-model-wears-black-leather.jpg?s=2048x2048&w=is&k=20&c=kcxknYShRIPZUDTT320VVJ7aCkOZJn6qCEqW5zv9xDI=" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/shutterstock/photos/1105834631/display_1500/stock-photo-online-shopping-design-concept-small-people-buy-things-on-the-site-laptop-screen-with-open-site-1105834631.jpg" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/online-fashion-shopping-collage_23-2150535767.jpg?w=1060" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
