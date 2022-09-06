import { listTypes } from '../actions/list/types'
import { AnyAction } from 'redux'
import { initialStateTypes } from '../actions/list/interfaces'

const initialState = {
  isLoading: false,
  hits: [],
  hitsPerPage: 0,
  nbPages: 0,
  page: 0,
  query: ''
}

export default function (state: initialStateTypes = initialState, action: AnyAction) {
  switch (action.type) {
    case listTypes.GET:
      return {
        ...state,
        loading: false
      }
    case listTypes.GET_SUCCESS:
      return {
        ...state,
        loading: true,
       ...action.payload
      }
    case listTypes.GET_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}