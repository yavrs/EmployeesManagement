import React from 'react'

const TaskListNumber = ({ data }) => {

    return (
        <div className="flex mt-10 justify-between gap-5">

            {/* TOTAL TASK */}
            <div className="w-[45%] flex-col p-8 rounded-3xl bg-red-400">
                <h2 className="text-5xl font-bold">
                    {data.totalTask}
                </h2>

                <h3 className="text-4xl font-bold mt-3">
                    TOTAL TASK
                </h3>
            </div>


            {/* COMPLETED TASK */}
            <div className="w-[45%] flex-col p-8 rounded-3xl bg-yellow-400">
                <h2 className="text-5xl font-bold">
                    {data.completedTask}
                </h2>

                <h3 className="text-4xl font-bold mt-3">
                    COMPLETED
                </h3>
            </div>


            {/* ACTIVE TASK */}
            <div className="w-[45%] flex-col p-8 rounded-3xl bg-blue-400">
                <h2 className="text-5xl font-bold">
                    {data.activeTask}
                </h2>

                <h3 className="text-4xl font-bold mt-3">
                    ACTIVE TASK
                </h3>
            </div>


            {/* FAILED TASK */}
            <div className="w-[45%] flex-col p-8 rounded-3xl bg-green-400">
                <h2 className="text-5xl font-bold">
                    {data.failedTask}
                </h2>

                <h3 className="text-4xl font-bold mt-3">
                    FAILED
                </h3>
            </div>

        </div>
    )
}

export default TaskListNumber