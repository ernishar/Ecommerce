import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function ProductForYou({ listProduct }) {
  const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {listProduct?.map((item, index) => {
          return (
            <div className="shadow " key={index}>
              <div className="product text-center ">
                <div className="position-relative">
                  <div className="badge text-white badge-secondary "></div>
                  <NavLink className="d-block" to={`/detail/${item.id}`}>
                    <img
                      className="img-fluid w-100"
                      style={{ height: "300px" }}
                      src={item.img1}
                      alt={item.img1}
                    />
                  </NavLink>
                  <div className="product-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <NavLink
                          className="btn btn-sm btn-dark"
                          to={`/detail/${item.id}`}
                        >
                          View
                        </NavLink>
                      </li>
                      <li className="list-inline-item mr-0">
                        <a
                          className="btn btn-sm btn-outline-dark"
                          href={`#product_${item.id}`}
                          data-toggle="modal"
                        >
                          <i className="fas fa-expand"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-3 m-2 ">
                  <h6>
                    <p className="d-block"> {item.name}</p>
                  </h6>
                  {item.ProductVariants &&
                    item.ProductVariants[0]?.Variants && (
                      <p className="small text-muted m-0">
                        ₹{item.ProductVariants[0].Variants[0].price}
                      </p>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
}
