import React, { useContext } from "react";
import Header from "../other/Header";
import CreationTask from "../other/CreationTask";
import AllTAsk from "../other/AllTAsk";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = (props) => {

    const authdata = useContext(AuthContext);

    return (
        <div className="p-7 min-h-screen text-white w-full">

            <Header
                changeuser={props.changeuser}
                data={authdata.dataofadmin}
            />
            <CreationTask
                employees={props.employees}
                setEmployees={props.setEmployees}
            />
            <AllTAsk />

        </div>
    );
};

export default AdminDashboard;