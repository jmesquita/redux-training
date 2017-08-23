import {
  SECTIONS_RESPONSE
} from '../actions/sections'

const sections = (state = [], action) => {
  switch(action.type) {
    case SECTIONS_RESPONSE: {
      return action.payload.sections
    }
    default: {
      return state
    }
  }
}

export default sections
