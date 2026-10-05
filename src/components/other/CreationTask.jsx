import React, { useState } from "react";

const CreationTask = ({ employees, setEmployees }) => {

  // =====================================================
  // FORM STATES
  // =====================================================

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");


  // =====================================================
  // FUNCTION: CREATE TASK
  // =====================================================

  const submithandler = (e) => {

    e.preventDefault();


    // ===================================================
    // CREATE NEW TASK
    // ===================================================

    const newTask = {
      taskId: Date.now(),
      title,
      description,
      date,
      category,

      active: true,
      newTask: true,
      completed: false,
      failed: false
    };


    // ===================================================
    // UPDATE EMPLOYEE
    // ===================================================

    const updatedEmployees = employees.map((employee) => {

      // Find selected employee
      if (employee.id === Number(assignTo)) {

        return {
          ...employee,

          // Update counters
          totalTask: employee.totalTask + 1,
          activeTask: employee.activeTask + 1,
          newTask: employee.newTask + 1,

          // Add new task
          tasks: [
            ...employee.tasks,
            newTask
          ]
        };
      }

      // Other employees remain unchanged
      return employee;
    });


    // ===================================================
    // UPDATE REACT STATE
    // This makes the UI update immediately
    // ===================================================

    setEmployees(updatedEmployees);


    // ===================================================
    // UPDATE LOCAL STORAGE
    // ===================================================

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );


    // ===================================================
    // SUCCESS MESSAGE
    // ===================================================

    const employee = employees.find(
      (employee) => employee.id === Number(assignTo)
    );

    alert(`Task assigned to ${employee.name}`);


    // ===================================================
    // CLEAR FORM
    // ===================================================

    setTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };


  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="mt-10 bg-[#1c1c1c] mb-2 p-10">

      <h1 className="font-bold text-4xl text-center w-full">
        Create Task
      </h1>

      <form
        onSubmit={submithandler}
        className="flex flex-wrap w-full items-start justify-between px-20 mt-10 gap-10 text-black"
      >

        {/* LEFT SIDE */}

        <div className="w-1/2 flex flex-col gap-5">

          {/* TITLE */}

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-4/5 rounded-2xl bg-slate-100 border-2 outline-none p-3"
            type="text"
            placeholder="Enter your task title"
            required
          />


          {/* DATE */}

          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
            type="date"
            required
          />


          {/* ASSIGN TO */}

          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
            required
          >

            <option value="">
              Select Employee
            </option>

            {employees.map((employee) => (
              <option
                key={employee.id}
                value={employee.id}
              >
                {employee.name}
              </option>
            ))}

          </select>


          {/* CATEGORY */}

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
            type="text"
            placeholder="Category"
            required
          />

        </div>


        {/* RIGHT SIDE */}

        <div className="w-2/5 flex flex-col gap-5">

          {/* DESCRIPTION */}

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-45 rounded-2xl bg-slate-100 border-2 outline-none p-3"
            placeholder="Enter your task description"
            required
          />


          {/* CREATE BUTTON */}

          <button
            type="submit"
            className="bg-red-700 w-full hover:bg-red-800 rounded-2xl p-2 text-white font-bold"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
};

export default CreationTask;












// import React, { useEffect, useState } from "react";

// const CreationTask = () => {

//     // =====================================================
//     // FORM STATES
//     // =====================================================

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [date, setDate] = useState("");
//     const [assignTo, setAssignTo] = useState("");
//     const [category, setCategory] = useState("");

//     // Store all employees
//     const [employees, setEmployees] = useState([]);


//     // =====================================================
//     // GET EMPLOYEES FROM LOCAL STORAGE
//     // Runs when component loads
//     // =====================================================

//     useEffect(() => {

//         const data =
//             JSON.parse(localStorage.getItem("employees")) || [];

//         setEmployees(data);

//     }, []);


//     // =====================================================
//     // FUNCTION: CREATE TASK
//     // =====================================================

//     const submithandler = (e) => {

//         e.preventDefault();


//         // =================================================
//         // CREATE NEW TASK
//         // =================================================

//         const newTask = {
//             taskId: Date.now(),
//             title,
//             description,
//             date,
//             category,

//             active: true,
//             newTask: true,
//             completed: false,
//             failed: false
//         };


//         // =================================================
//         // GET CURRENT EMPLOYEES
//         // =================================================

//         const data =
//             JSON.parse(localStorage.getItem("employees")) || [];


//         // =================================================
//         // FIND SELECTED EMPLOYEE
//         // =================================================

//         const employee = data.find(
//             (employee) => employee.id === Number(assignTo)
//         );


//         // =================================================
//         // CHECK EMPLOYEE
//         // =================================================

//         if (!employee) {
//             alert("Please select an employee!");
//             return;
//         }


//         // =================================================
//         // ADD TASK TO EMPLOYEE
//         // =================================================

//         employee.tasks.push(newTask);


//         // =================================================
//         // UPDATE TASK COUNTERS
//         // =================================================

//         employee.totalTask += 1;
//         employee.activeTask += 1;
//         employee.newTask += 1;


//         // =================================================
//         // SAVE UPDATED EMPLOYEES
//         // =================================================

//         localStorage.setItem(
//             "employees",
//             JSON.stringify(data)
//         );


//         // =================================================
//         // UPDATE EMPLOYEE STATE
//         // So newly created data is available immediately
//         // =================================================

//         setEmployees(data);


//         // =================================================
//         // SUCCESS MESSAGE
//         // =================================================

//         alert(`Task assigned to ${employee.name}`);


//         // =================================================
//         // CLEAR FORM
//         // =================================================

//         setTitle("");
//         setDescription("");
//         setDate("");
//         setAssignTo("");
//         setCategory("");
//     };


//     // =====================================================
//     // UI
//     // =====================================================

//     return (
//         <div className="mt-10 bg-[#1c1c1c] mb-2 p-10">

//             <h1 className="font-bold text-4xl text-center w-full">
//                 Create Task
//             </h1>


//             {/* =================================================
//                 FORM
//             ================================================= */}

//             <form
//                 onSubmit={submithandler}
//                 className="flex flex-wrap w-full items-start justify-between px-20 mt-10 gap-10 text-black"
//             >

//                 {/* =================================================
//                     LEFT SIDE
//                 ================================================= */}

//                 <div className="w-1/2 flex flex-col gap-5">


//                     {/* TASK TITLE */}

//                     <input
//                         value={title}
//                         onChange={(e) =>
//                             setTitle(e.target.value)
//                         }
//                         className="w-4/5 rounded-2xl bg-slate-100 border-2 outline-none p-3"
//                         type="text"
//                         placeholder="Enter your task title"
//                         required
//                     />


//                     {/* TASK DATE */}

//                     <input
//                         value={date}
//                         onChange={(e) =>
//                             setDate(e.target.value)
//                         }
//                         className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
//                         type="date"
//                         required
//                     />


//                     {/* =================================================
//                         ASSIGN TO EMPLOYEE
//                     ================================================= */}

//                     <select
//                         value={assignTo}
//                         onChange={(e) =>
//                             setAssignTo(e.target.value)
//                         }
//                         className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
//                         required
//                     >

//                         <option value="">
//                             Select Employee
//                         </option>

//                         {employees.map((employee) => (
//                             <option
//                                 key={employee.id}
//                                 value={employee.id}
//                             >
//                                 {employee.name}
//                             </option>
//                         ))}

//                     </select>


//                     {/* CATEGORY */}

//                     <input
//                         value={category}
//                         onChange={(e) =>
//                             setCategory(e.target.value)
//                         }
//                         className="bg-slate-100 w-4/5 rounded-2xl border-2 outline-none p-3"
//                         type="text"
//                         placeholder="Category"
//                         required
//                     />

//                 </div>


//                 {/* =================================================
//                     RIGHT SIDE
//                 ================================================= */}

//                 <div className="w-2/5 flex flex-col gap-5">


//                     {/* DESCRIPTION */}

//                     <textarea
//                         value={description}
//                         onChange={(e) =>
//                             setDescription(e.target.value)
//                         }
//                         className="w-full h-45 rounded-2xl bg-slate-100 border-2 outline-none p-3"
//                         placeholder="Enter your task description"
//                         required
//                     />


//                     {/* CREATE BUTTON */}

//                     <button
//                         type="submit"
//                         className="bg-red-700 w-full hover:bg-red-800 rounded-2xl p-2 text-white font-bold"
//                     >
//                         Create Task
//                     </button>

//                 </div>

//             </form>

//         </div>
//     );
// };

// export default CreationTask;