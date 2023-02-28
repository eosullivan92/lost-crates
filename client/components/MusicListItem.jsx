import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cart'
import { deleteMusicAndState } from '../actions/music'
import { actions } from '../permissions/constants.js'
import hasPermission from '../permissions/permissions.js'

function MusicListItem({ product, setOpenCart }) {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const addAlbumToCart = (product) => {
    const { id, album, stripe_price_id } = product
    const newCartItem = { id, album, stripe_price_id }
    dispatch(addToCart(newCartItem))
    setOpenCart(true)
  }

  const handleImage = (e) => {
    if (product.image_path[1]) {
      e.target.src = product.image_path[1]
    }
  }

  const handleImageReset = (e) => {
    if (product.image_path[1]) {
      e.target.src = product.image_path[0]
    }
  }

  const handleDelete = () => {
    if (user.role == 'admin') {
      console.log(product.id)
      dispatch(deleteMusicAndState(product.id))
    }
  }
  const handleUpdate = () => {
    // if (user.role == 'admin') dispatch(deleteMusic(id))
  }

  return (
    <div className="product">
      <img
        src={product?.image_path[0]}
        alt=""
        className="product__image"
        onMouseEnter={(e) => handleImage(e)}
        onMouseLeave={(e) => handleImageReset(e)}
        loading="lazy"
      />

      <p className="product__info product__album">
        {product?.album} <span className="product__year">{product?.year}</span>
      </p>
      <p className="product__info" data-testid="artist">
        {product?.artist}
      </p>
      <p className="product__info">{product?.genre}</p>
      <p className="product__info">${product?.price}</p>

      <div className="product__cart-control">
        <button
          className="btn btn-primary"
          data-testid="addToCartBtn"
          onClick={() => addAlbumToCart(product)}
        >
          Add to Cart
        </button>
        {hasPermission(user.role, actions.MODIFY_PRODUCT) && (
          <div className="product__admin-control">
            <button
              className="product__admin-edit btn-secondary"
              onClick={() => handleUpdate()}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              className="product__admin-delete btn-secondary"
              onClick={() => handleDelete()}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MusicListItem
