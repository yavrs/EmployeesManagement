import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import Tasklist from "../tasklist/Tasklist";

const EmployeeDashboard = (props) => {

  // =====================================================
  // EMPLOYEE DASHBOARD
  // Displays:
  // 1. Header
  // 2. Task statistics
  // 3. Employee tasks
  // =====================================================

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen w-full">

      {/* =================================================
          HEADER
          Shows employee name and logout button
      ================================================= */}
      <Header
        changeuser={props.changeuser}
        data={props.data}
      />


      {/* =================================================
          TASK NUMBERS
          Shows:
          - Total Tasks
          - Active Tasks
          - Completed Tasks
          - Failed Tasks
      ================================================= */}
      <TaskListNumber
        data={props.data}
      />


      {/* =================================================
          TASK LIST
          Displays all employee tasks.

          setData is passed so Tasklist can update
          employee data in React state immediately.
      ================================================= */}
      <Tasklist
        data={props.data}
        setData={props.setData}
      />

    </div>
  );
};

export default EmployeeDashboard;