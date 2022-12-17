import CurrencyFormat from 'react-currency-format'
import useStateValue from '../StateProvider'

import './styles/Subtotal.css'



function Subtotal() {
  const [{basket} , ] = useStateValue();


  function getBaketTotal() {
      // let total = 0;
      // basket.map(prod => total+=prod.price)
      // return total;
    return  basket.reduce( (amount,item) => item.price + amount , 0)
  }

  return (
    <div className='subtotal'>
  

      <CurrencyFormat
      renderText={value => 
        <>
        <p>
          Subtotal ({basket.length} items) : <strong> {value} </strong>
        </p>
    
        <small className='subtotal__gift'>
          <input type='checkbox'/> This order contains a gift
          </small>
        </>
      }
      decimalScale={2}
      value = {getBaketTotal()}
      displayType={'text'}
      thousandSeparator={true}
      prefix = {"$"}
      suffix = {"/-"}
          />
      
      <button>Proceed to Checkout</button>
      
      
      </div>
  )
}

export default Subtotal