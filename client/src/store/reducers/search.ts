import { Actions } from '../actions/search'
import { CommitSearch } from '../../types'

const initialState: CommitSearch = {
  searchTerm: "",
  commits: [],
}

const searchReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case Actions.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state
  }
}

export default searchReducer
