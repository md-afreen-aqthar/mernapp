import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className='carousel-caption' style={{zIndex:"10"}} >
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
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
