import { list as listSections } from '../webapi/sections'

export const SECTIONS_REQUEST = 'SECTIONS_REQUEST'
export const SECTIONS_RESPONSE = 'SECTIONS_RESPONSE'

export const list = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch({
        type: SECTIONS_REQUEST
      })
      listSections().then((sections) => {
        dispatch({
          type: SECTIONS_RESPONSE,
          payload: {
            sections
          }
        })
        resolve(sections)
      })
    })
  }
}
