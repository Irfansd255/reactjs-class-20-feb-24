import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
    console.log(props.myName)
  return (
    <div>
        <CompC name={props.myName}/>
    </div>
  )
}

export default CompB