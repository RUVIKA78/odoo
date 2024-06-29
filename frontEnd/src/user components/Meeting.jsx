import React from 'react'
import Button from '../componenrts/Button'

const Meeting = () => {
  return (
      <div className='flex gap-10'>
          <Button name='Join Meeting'>Join</Button>
          <Button name='Create meeting'>Create</Button>
    </div>
  )
}

export default Meeting