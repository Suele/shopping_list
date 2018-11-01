import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from '../actions/types';


const initialState = {
    items : [
      {id: uuid(), name: 'Pão'},
      {id: uuid(), name: 'Leite'},
      {id: uuid(), name: 'Café'},
      {id: uuid(), name: 'Queijo'},
    ]
}

export default function(state = initialState, action){
  switch (action.type) {
    case GET_ITEMS:
    return {
      ...state
    }
  
    default:
      return state;
  }
}