import React from 'react'

const List = () => {
    const languages = ["Java", "Python", "JavaScript"]; 
  return (
    <ul>
        {languages.map((language, i) => (
            <li key= {i}>{language}</li>
        ))}
    </ul>
  )
}

export default List;
