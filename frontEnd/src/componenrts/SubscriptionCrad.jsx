import React from 'react'

const SubscriptionCrad = (props) => {
  return (
      <div>
          <div className='h-64 w-56 bg-red-300 rounded-3xl'>
              <h1>{props.title}</h1>
              <div>
                  <li>{props.heading1}</li>
                  <li>{props.heading2}</li>
                  <li>{props.heading3}</li>
                  <li>{props.heading4}</li>
                  <li>{props.heading5}</li>
              </div>
              
          </div>
    </div>
  )
}

export default SubscriptionCrad