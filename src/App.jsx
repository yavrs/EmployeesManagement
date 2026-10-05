import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

// setLocalStorage()

const App = () => {

  // =========================================================
  // GET EMPLOYEE AND ADMIN DATA FROM AUTH CONTEXT
  // =========================================================
  const authdata = useContext(AuthContext);


  // =========================================================
  // STATE: CURRENT LOGGED-IN USER ROLE
  // Possible values:
  // ""         → No user logged in
  // "admin"    → Admin logged in
  // "employee" → Employee logged in
  // =========================================================
  const [user, setUser] = useState("");


  // =========================================================
  // STATE: STORE LOGGED-IN EMPLOYEE DATA
  // =========================================================
  const [loggedInUserData, setLoggedInUserData] = useState(null);


  // =========================================================
  // FUNCTION: CHECK EXISTING LOGIN
  //
  // Runs when the application starts.
  // Checks localStorage to see if the user was already logged in.
  // =========================================================
  useEffect(() => {

    const storedUser = localStorage.getItem("loggedInuser");

    // If no user is stored, stay on Login page
    if (!storedUser) return;

    const loggedInUser = JSON.parse(storedUser);

    // Set user's role
    setUser(loggedInUser.role);

    // If employee, restore employee data
    if (loggedInUser.role === "employee") {
      setLoggedInUserData(loggedInUser.employee);
    }

  }, []);


  // =========================================================
  // FUNCTION: HANDLE LOGIN
  //
  // Checks email and password.
  // If credentials are correct:
  // 1. Set user role
  // 2. Store login information in localStorage
  // 3. Store employee data if employee logs in
  // =========================================================
  const handleLogin = (email, password) => {


    // =======================================================
    // ADMIN LOGIN
    // =======================================================
    if (email === "admin@gmail.com" && password === "123") {

      // Set current user as admin
      setUser("admin");

      // Save admin login in localStorage
      localStorage.setItem(
        "loggedInuser",
        JSON.stringify({
          role: "admin"
        })
      );

      return;
    }


    // =======================================================
    // EMPLOYEE LOGIN
    // =======================================================
    if (authdata?.dataofemployee) {

      // Find employee with matching email and password
      const employee = authdata.dataofemployee.find(
        (item) =>
          item.email === email &&
          item.password === password
      );


      // =====================================================
      // EMPLOYEE FOUND
      // =====================================================
      if (employee) {

        // Set current user as employee
        setUser("employee");

        // Store employee data in React state
        setLoggedInUserData(employee);

        // Save login information in localStorage
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({
            role: "employee",
            employee: employee
          })
        );

        return;
      }
    }


    // =======================================================
    // INVALID LOGIN
    // =======================================================
    alert("Invalid credentials");
  };


  // =========================================================
  // FUNCTION: LOGOUT
  //
  // Removes login information and returns user to Login page.
  // =========================================================
  const handleLogout = () => {

    // Remove logged-in user from localStorage
    localStorage.removeItem("loggedInuser");

    // Remove user from React state
    setUser("");

    // Clear employee data
    setLoggedInUserData(null);
  };


  // =========================================================
  // RENDER UI
  // =========================================================
  return (
    <>

      {/* =====================================================
          SHOW LOGIN PAGE
          Shown when no user is logged in
      ===================================================== */}
      {!user && (
        <Login handlelogin={handleLogin} />
      )}


      {/* =====================================================
          SHOW ADMIN DASHBOARD
          Shown when admin is logged in
      ===================================================== */}
      {user === "admin" && (
        <AdminDashboard
          changeuser={handleLogout}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}


      {/* =====================================================
          SHOW EMPLOYEE DASHBOARD
          Shown when employee is logged in

          data    → current employee data
          setData → allows Tasklist to update employee data
      ===================================================== */}
      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          changeuser={handleLogout}
          data={loggedInUserData}
          setData={setLoggedInUserData}
        />
      )}

    </>
  );
};

export default App;





// import React, { useContext, useEffect, useState } from "react";

// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/LocalStorage";

// // localStorage.clear()
// // setLocalStorage()

// const App = () => {
//   const authdata = useContext(AuthContext);

//   const [loggedInUserData, setLoggedInUserData] = useState(null)

//   const [user, setUser] = useState("");


//   //   // Check logged-in user when page loads
//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInuser");

//     if (!storedUser) return;

//     const loggedInUser = JSON.parse(storedUser);

//     setUser(loggedInUser.role);

//     if (loggedInUser.role === "employee") {
//       setLoggedInUserData(loggedInUser.employee);
//     }
//   }, []);

//   const handlelogin = (email, password) => {
//     // Admin login
//     if (email === "admin@me.com" && password === "123") {
//       setUser("admin");

//       localStorage.setItem(
//         "loggedInuser",
//         JSON.stringify({
//           role: "admin",
//         })
//       );
//     }

//     // Employee login
//     else if (authdata) {
//       const employee = authdata.dataofemployee.find((item) => item.email == email && item.password == password)

//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInuser",
//           JSON.stringify({
//             role: "employee",
//             employee: employee
//           })
//         );
//       } else {
//         alert("Invalid credentials");
//       }






//     }

//     // Invalid login
//     else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <>
//       {!user && <Login handlelogin={handlelogin} />}

//       {user === "admin" && <AdminDashboard changeuser={setUser} />}

//       {user === "employee" && <EmployeeDashboard changeuser={setUser} data={loggedInUserData} />}
//       {/* {user === "employee" && <EmployeeDashboard changeuser={setUser} data={loggedInUserData} />} */}
//     </>
//   );
// };

// export default App;