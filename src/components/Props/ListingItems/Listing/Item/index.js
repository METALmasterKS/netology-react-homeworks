import React from "react";
import PropTypes from "prop-types";

const Price = ({currency, price}) => {
  switch (currency) {
    case "USD":
      return "$" + price
    case "EUR":
      return "€" + price
    default:
      return price + " " + currency
  }
}

const Quantity = ({q}) => {
  let lev = "high"
  if (q <= 10) {
    lev = "low"
  } else if (q <= 20) {
    lev = "medium"
  }

  return <p className={"item-quantity level-" + lev}>{q} left</p>
}


const Item = ({item}) => {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img alt={item.title} src={item.MainImage && item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p
          className="item-title">{((item.title+"").length > 50) ? item.title.substring(0, 50) + "..." : item.title}</p>
        <p className="item-price"><Price currency={item.currency_code} price={item.price}/></p>
        <Quantity q={item.quantity}/>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    currency_code: PropTypes.string,
    quantity: PropTypes.number,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string,
    })
  })
}

export default Item;

