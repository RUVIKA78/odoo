import React from 'react'
import ToDolist from '../user components/ToDolist'
import Meeting from '../user components/Meeting'
import Calender from '../user components/Calender'

const MyProfile = () => {
    return (
        <div className='flex relative min-h-screen min-w-full justify-between it'>
            <div className='h-72 w-48 border-2 border-green-500 rounded-3xl'>

                {/* <ToDolist />
                <Meeting />
                <Calender /> */}
            </div>
        </div>
    )
}

export default MyProfile