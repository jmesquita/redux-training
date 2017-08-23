export const APP_SELECT_SECTION = 'APP_SELECT_SECTION'

export const selectSection = (section_id) => {
  return {
    type: APP_SELECT_SECTION,
    payload: {
      section_id
    }
  }
}
