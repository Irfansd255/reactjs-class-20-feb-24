import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
    console.log(props.name)
    
  return (
    <div>
        <CompB myName={props.name} />
    </div>
  )
}

export default CompA