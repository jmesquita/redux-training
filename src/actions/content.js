import {
  get
} from '../webapi/content'

export const CONTENT_REQUEST = 'CONTENT_REQUEST'
export const CONTENT_RESPONSE = 'CONTENT_RESPONSE'

export const fetchContent = (section_id) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: CONTENT_REQUEST
      })
      get(section_id).then((data) => {
        dispatch({
          type: CONTENT_RESPONSE,
          payload: data
        })
        resolve(data)
      })
    })
  }
}
