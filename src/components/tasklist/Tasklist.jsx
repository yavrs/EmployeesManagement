import React from "react";

function Tasklist({ data, setData }) {

  // =========================================================
  // FUNCTION 1: HANDLE COMPLETE TASK
  // =========================================================
  const handlecomplete = (taskId) => {

    // Get employees from localStorage
    const employees = JSON.parse(
      localStorage.getItem("employees")
    );

    // Update employee data
    const updatedemployees = employees.map((employee) => {

      // Find current employee
      if (employee.id === data.id) {

        // Find selected task
        const task = employee.tasks.find(
          (task) => task.taskId === taskId
        );

        // Prevent updating an already completed/failed task
        if (task.completed || task.failed) {
          return employee;
        }

        // Return updated employee
        return {
          ...employee,

          // Update counters
          completedTask: employee.completedTask + 1,
          activeTask: employee.activeTask - 1,
          newTask: employee.newTask - 1,

          // Update task
          tasks: employee.tasks.map((task) => {

            if (task.taskId === taskId) {

              return {
                ...task,
                completed: true,
                active: false,
                newTask: false
              };
            }

            return task;
          })
        };
      }

      return employee;
    });

    // Save updated data to localStorage
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedemployees)
    );

    // =======================================================
    // IMPORTANT:
    // Update React state so UI changes immediately
    // =======================================================

    const updatedEmployee = updatedemployees.find(
      (employee) => employee.id === data.id
    );

    setData(updatedEmployee);
  };


  // =========================================================
  // FUNCTION 2: HANDLE FAILED TASK
  // =========================================================
  const handlefailed = (taskId) => {

    // Get employees from localStorage
    const employees = JSON.parse(
      localStorage.getItem("employees")
    );

    // Update employee data
    const updatedemployees = employees.map((employee) => {

      // Find current employee
      if (employee.id === data.id) {

        // Find selected task
        const task = employee.tasks.find(
          (task) => task.taskId === taskId
        );

        // Prevent updating an already completed/failed task
        if (task.completed || task.failed) {
          return employee;
        }

        // Return updated employee
        return {
          ...employee,

          // Update counters
          failedTask: employee.failedTask + 1,
          activeTask: employee.activeTask - 1,
          newTask: employee.newTask - 1,

          // Update task
          tasks: employee.tasks.map((task) => {

            if (task.taskId === taskId) {

              return {
                ...task,
                failed: true,
                active: false,
                newTask: false
              };
            }

            return task;
          })
        };
      }

      return employee;
    });

    // Save updated data to localStorage
    localStorage.setItem(
      "employees",
      JSON.stringify(updatedemployees)
    );

    // =======================================================
    // IMPORTANT:
    // Update React state so UI changes immediately
    // =======================================================

    const updatedEmployee = updatedemployees.find(
      (employee) => employee.id === data.id
    );

    setData(updatedEmployee);
  };


  // =========================================================
  // UI: DISPLAY TASKS
  // =========================================================
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-6 slider-none rounded-3xl mt-10"
    >

      {data.tasks.map((item) => (

        <div
          key={item.taskId}
          className="h-full shrink-0 w-75 rounded-2xl bg-yellow-500"
        >

          {/* TASK HEADER */}
          <div className="head flex justify-between">

            <h3 className="bg-yellow-400 py-1 px-3 m-4 font-bold w-fit rounded-3xl">
              {item.category}
            </h3>

            <h3 className="bg-transparent opacity-50 py-1 px-3 m-4 font-bold w-fit rounded-3xl">
              {item.date}
            </h3>

          </div>


          {/* TASK TITLE */}
          <h2 className="mt-5 px-3 text-2xl font-semibold">
            {item.title}
          </h2>


          {/* TASK DESCRIPTION */}
          <p className="text-sm mt-2 px-3">
            {item.description}
          </p>


          {/* BUTTONS */}
          <div className="head flex mt-9 justify-between">

            {/* COMPLETE BUTTON */}
            <button
              onClick={() => handlecomplete(item.taskId)}
              disabled={item.completed || item.failed}
              className="bg-green-500 py-1 cursor-pointer m-4 px-3 w-fit rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Mark as Completed
            </button>


            {/* FAILED BUTTON */}
            <button
              onClick={() => handlefailed(item.taskId)}
              disabled={item.completed || item.failed}
              className="bg-red-600 py-1 cursor-pointer px-3 m-4 w-fit rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Mark as Failed
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Tasklist;