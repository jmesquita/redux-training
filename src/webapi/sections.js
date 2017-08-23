export const list = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 0, name: 'Section 1'},
        {id: 1, name: 'Section 2'},
        {id: 2, name: 'Section 3'},
        {id: 3, name: 'Section 4'},
        {id: 4, name: 'Section 5'}
      ])
    }, 10)
  })
}
