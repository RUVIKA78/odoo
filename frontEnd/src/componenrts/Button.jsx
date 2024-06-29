import React from 'react'

const Button = ({name}) => {
  return (
      <button className='text-white text-xl tracking-wider font-semibold bg-green-500 rounded-3xl px-4 py-2'>
          {name}
     </button>
  )
}

export default Button