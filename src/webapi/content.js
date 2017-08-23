const contents = {
  0: 'Content for section id 0',
  1: 'Content for section id 1',
  2: 'Content for section id 2',
  3: 'Content for section id 3',
  4: 'Content for section id 4'
}

export const get = (section_id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(contents[section_id]), 10)
  })
}
