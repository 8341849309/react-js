import React, { useState } from "react";
import ProductService from "../services/ProductService";

const Product = (props) => {
  let products = ProductService.getAllProducts();

  return (
    <React.Fragment>
      {products.map((prod) => (
        <div key={prod.id} className="card col-md-6 mb-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-start">
              <img
                src={prod.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{prod.model}</h5>
                <p className="card-text">
                  <small className="text-muted">price: {prod.price}</small>
                  <br />
                  <small className="text-muted">qty: {prod.qty}</small>
                  <br />
                  <b
                    className={
                      prod.qty >= 15
                        ? "text-success"
                        : prod.qty >= 1 && prod.qty < 15
                        ? "text-warning"
                        : "text-danger"
                    }
                  >
                    {prod.qty >= 15
                      ? "In Stock"
                      : prod.qty >= 1 && prod.qty < 15
                      ? "Running out of stock"
                      : "Out of stock"}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Product;
