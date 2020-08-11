import React from "react";
import { connect } from "react-redux";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

// const {reduxState} = this.props

const ProductCard = ({ product }) => (
    <div>
      <div>{`Price: $${product.price}`}</div>
      <br />
      {/* <p>{JSON.stringify(product)}</p> */}
      <img src={product.img} alt={product.description}></img>
      <br />
      <div>{product.description}</div>
      <div onClick={() => alert(`${product.description} added to cart`)}>
        <AddToCartButton product={product} />
      </div>
    </div>
  );

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(ProductCard);