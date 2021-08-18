import React from "react";
import "./step5.css"
import { NavLink } from "react-router-dom";

const Step5 = () => {
    return (
        <>
            <div className="heading">
                <h1>What Do You Want Do Now??</h1>
            </div>
            <div className="containerAll">
                <div className="cardContainer">
                    <div className="card">
                        <div className="circle">
                            <h2>01</h2>
                        </div>
                        <div className="content">
                            <div className="para">
                                <h2>Account Customization & Company Details</h2>
                            </div>
                            <div className="button">
                                <NavLink to="./addcourses" className="a">Click Here</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            <h2>02</h2>
                        </div>
                        <div className="content">
                            <div className="para">
                                <h2>How LMS Works?</h2>
                            </div>
                            <div className="button">
                                <NavLink to="./addcourses" className="a">Click Here</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            <h2>03</h2>
                        </div>
                        <div className="content">
                            <div className="para">
                                <h2>Start Making Your Courses</h2>
                            </div>
                            <div className="button">
                                <NavLink to="./addcourses" className="a">Click Here</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            <h2>04</h2>
                        </div>
                        <div className="content">
                            <div className="para">
                                <h2>Go To Administration Panel</h2>
                            </div>
                            <div className="button">
                                <NavLink to="./addcourses" className="a">Click Here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Step5;