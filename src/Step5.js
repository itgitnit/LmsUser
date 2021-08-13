import React from "react";
import "./select.css"
import { NavLink } from "react-router-dom";

const Step5 = () => {
    return (
        <>
            <div className="container">
                <div className="title">What you want to do now??</div>
                <form action="#">
                    <a href="">
                        <div className="button">
                            <NavLink to="./addcourses"><input type="submit" value="Account Customization & Company Details" /></NavLink>
                        </div>
                    </a>
                    <div className="button">
                        <NavLink to="./addcourses"><input type="submit" value="How LMS Works??" /></NavLink>
                    </div>
                    <div className="button">
                        <NavLink to="./addcourses"><input type="submit" value="Start Making Your Courses" /></NavLink>
                    </div>
                    <div className="button">
                        <NavLink to="./addcourses"> <input type="submit" value="Go to Administration Panel" /></NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Step5;