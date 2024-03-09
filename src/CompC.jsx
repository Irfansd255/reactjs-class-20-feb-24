import React from 'react'

const CompC = (props) => {
    console.log(props)
  return (
    <div>
        <h2>Comp C</h2>
        <h1>{props.name}</h1>
    </div>
  )
}

export default CompC