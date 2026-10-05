import React, { createContext, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTAsk = () => {
    const authdata = useContext(AuthContext)

    return (
        <div id='tasklist' className='bg-[#1c1c1c]  gap-5 h-65  p-5'>
            <div className='bg-red-500 mb-2 py-2 px-4 flex  justify-between rounded-lg'>
                <h2 className='w-1/5  items-center text-center font-medium'>Name</h2>
                <h3 className='w-1/5  items-center text-center font-medium'>total Task</h3>
                <h3 className='w-1/5  items-center text-center font-medium'>Active Task</h3>
                <h3 className='w-1/5  items-center text-center font-medium'>CompletedTask</h3>
                <h3 className='w-1/5  items-center text-center font-medium'>Failed Task</h3>
            </div>
            <div id='tasklist' className='h-[80%] overflow-auto'>
                {authdata.dataofemployee.map((elem, idx) => {
                    return <div key={idx} className='bg-red-500 flex mb-2 py-2 px-4  justify-between rounded-lg'>
                        <h2 className='w-1/5  items-center text-center font-medium'>{elem.name}</h2>
                        <h3 className='w-1/5  items-center text-center font-medium'>{elem.totalTask}</h3>
                        <h3 className='w-1/5  items-center text-center font-medium'>{elem.activeTask}</h3>
                        <h3 className='w-1/5  items-center text-center font-medium'>{elem.completedTask}</h3>
                        <h3 className='w-1/5  items-center text-center font-medium'>{elem.failedTask}</h3>
                    </div> 
            })}
            </div>



        </div>
    )
}

export default AllTAsk