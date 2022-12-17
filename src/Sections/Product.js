import { Star } from '@material-ui/icons'
import useStateValue from '../StateProvider'

import './styles/Product.css'

function Product({id , title , price , rating ,  imgUrl}) {

  const [{basket} , dispatch] = useStateValue();

  // console.log('basket => ' , basket)

  function add_to_basket(){
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET' ,

      item:{
        id,
        title,
        price ,
        rating,
        imgUrl,
      }
    })
  }
  
  return (
    <div className='product'>

        <div className='product__info'>
            <p className='product__title'>{title}</p>

            <p className='product__price'>
                <span>Rs. </span>
                <span>{price}</span>
            </p>

            <p className='product__rating'>
              {
                Array(rating).fill().map( (e , i) => <Star key = {i}/> )
                          }          
              </p> 
        </div>

        <img src={`images/${imgUrl}`}  alt={`images/${imgUrl}`} className='product__image'/>

        <button className='product__add_btn' onClick={add_to_basket}>Add to basket</button>
    </div>
  )
}

export default Product