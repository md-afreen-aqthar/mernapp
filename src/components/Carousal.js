import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}} >
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?w=1060&t=st=1721986316~exp=1721986916~hmac=2ccd90e700ec09bd3248b928f3d35ee89e04778538bf73eb06952bdb34a1bc5f" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
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
