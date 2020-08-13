import React from "react";
import { connect } from "react-redux";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";

// const {reduxState} = this.props

const CartItemCard = ({ product }) => (
    <div>
      <div>{`Price: $${product.price}`}</div>
      <br />
      {/* <p>{JSON.stringify(product)}</p> */}
      <img src={product.img} alt={product.description}></img>
      <br />
      <div>{product.description}</div>
      <div onClick={() => alert(`${product.id} removed`)}>
        <DeleteItemButton product={product} />
      </div>
    </div>
  );

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(CartItemCard);