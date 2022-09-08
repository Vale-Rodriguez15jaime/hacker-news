import { listTypes } from '../actions/list/types'
import { AnyAction } from 'redux'
import { initialStateTypes } from '../actions/list/interfaces'

const initialState = {
  isLoading: false,
  hits: [],
  nbHits: 0,
  favsList: [],
  hitsPerPage: 0,
  nbPages: 0,
  page: 0,
  query: ''
}

export default function (state: initialStateTypes = initialState, action: AnyAction) {
  switch (action.type) {
    case listTypes.GET:
      if (state.query !== action.payload.query.value) {
        return {
          ...state,
          isLoading: true,
          hits: []
        }
      }
      return {
        ...state,
        isLoading: true
      }
    case listTypes.GET_LIST_FAV:
      return {
        ...state,
        isLoading: true
      }
    case listTypes.GET_SUCCESS:
      if (action.payload.page > 0) {
        return {
          ...state,
          isLoading: false,
          ...action.payload,
          hits: [...state.hits, ...action.payload.hits]
        }
      }
      return {
        ...state,
        isLoading: false,
        ...action.payload
      }
    case listTypes.GET_LIST_FAV_SUCCESS:
      return {
        ...state,
        isLoading: false,
        favsList: action.payload
      }
    case listTypes.GET_ERROR:
    case listTypes.GET_LIST_FAV_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
