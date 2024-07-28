import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://www.shutterstock.com/shutterstock/photos/2014725953/display_1500/stock-photo-women-s-t-shirts-on-a-hanger-in-the-store-ladieswear-still-life-showcase-2014725953.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
