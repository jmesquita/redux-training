import React from 'react'

const Header = ({
  sections,
  onClick
}) => {
  return (
    <div className='header'>
      {
      sections.map((section) => <p onClick={(e) => {e.preventDefault(); onClick(section.id) }} key={section.id}>{section.name}</p>)
      }
    </div>
  )
}

export default Header
