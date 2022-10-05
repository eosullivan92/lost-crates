import React from 'react'

function MusicListItem(props) {
  const product = props.product

  function addToCart() {
    props.addToCart(product)
  }

  return (
    <div className="product">
      <img src={product.image_path[0]} alt="" className="image" />
      <p className="artist">{product.artist}</p>
      <p className="album">{product.album}</p>
      <p className="year">{product.year}</p>
      <p className="genre">{product.genre}</p>
      <p className="price">${product.price}</p>

      <button className="cart-link" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  )
}

export default MusicListItem
