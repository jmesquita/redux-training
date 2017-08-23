import {
  APP_SELECT_SECTION
} from '../actions/app'

import {
  CONTENT_RESPONSE
} from '../actions/content'

const INITIAL_STATE = {}

const app = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch(type) {
    case CONTENT_RESPONSE: {
      return {
        ...state,
        currentContent: payload
      }
    }
    case APP_SELECT_SECTION: {
      return {
        ...state,
        select_section_id: payload.section_id
      }
    }
    default: {
      return state
    }
  }
}

export default app
