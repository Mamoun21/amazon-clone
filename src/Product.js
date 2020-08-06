import React from "react";
import "./Product.css";
// import { connect } from "react-redux";
// import { addToBasket } from "../../actionCreators";
// import { useStateValue } from "../../StateProvider";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  // const addToBasket = () => {
  //   const item = {
  //     id: props.id,
  //     title: props.title,
  //     image: props.image,
  //     price: props.price,
  //     rating: props.rating,
  //   };
  //   props.basket.push(item);
  // };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => ({
//   addToBasket() {
//     dispatch(addToBasket(props.basket));
//   },
// });
export default Product;
// export default connect(null, mapDispatchToProps)(Product);
