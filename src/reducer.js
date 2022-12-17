export const initialState = {
    basket : [],
}

const reducer = (state , action ) => {
    // console.log('reducer.js' , state)
    // action = {type: 'ADD_TO_BASKET', item: {…}}
    //state = {basket: Array(0)}

    console.log('reducer ' , action )

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state ,
                basket : [...state.basket , action.item]
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state ,
                basket : state.basket.filter(item => item.id !== action.id)
            }

        case 'SET_USER':
            return {
                ...state ,
                user : action.user
            }
    
        default:
            return state;
    }
}

export  default  reducer ;