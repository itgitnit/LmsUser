import { FaInfoCircle, FaNewspaper, FaUserEdit, FaPen } from "react-icons/fa"
import { NavLink } from "react-router-dom";


function Basicdetails() {
    return (
        <>
            <div class="wrapper">
                <h2>Basic Details</h2>
                <form action="" method="post">
                    <br />
                    <hr />
                    <h4>Identity</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <span style={{ padding: "22px" }}> Site Name</span> <input
                                type="text"
                                placeholder="e.g. Introduction to Accounting"
                                style={{ width: "80%", height: "50px" }}
                            />
                        </div> </div>

                    <div class="input-group">
                        <div class="input-box">
                            <span style={{ padding: "5px" }}>Site Description</span> <input
                                type="text"
                                placeholder="e.g. Introduction to Accounting"
                                style={{ width: "80%", height: "50px" }}
                            />
                        </div>
                    </div>

                    <br />
                    <hr />
                    <h4>Locale</h4>
                    <div class="input-group">
                        Default Language<FaPen color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        <div class="input-box">
                            <select>
                                <option value="">Time Zone 1</option>
                                <option value="">Time Zone 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        Default Time Zone
                        <div class="input-box">
                            <select>
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        Date Format
                        <div class="input-box">
                            <select>
                                <option value="">DD/MM/YYYY</option>
                                <option value="">MM/DD/YYYY</option>
                                <option value="">YYYY/MM/DD</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        Time Format
                        <div class="input-box">
                            <select>
                                <option value="">24-Hour</option>
                                <option value="">12-Hour</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        Currency
                        <div class="input-box">
                            <select>
                                <option value="">Currency 1</option>
                                <option value="">Currency 2</option>
                                <option value="">Currency 3</option>
                                <option value="">Currency 4</option>
                            </select>
                        </div>
                    </div>


                    <br />
                    <hr />
                    <h4>Announcement</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <textarea
                                style={{ width: "80%", height: "80px", borderRadius: "10px" }}
                                placeholder="Announcement"
                            ></textarea>
                        </div>
                    </div>


                    <br />
                    <hr />
                    <h4>Security</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Enable API <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Enable xAPI <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Push xAPI statements to external LRS <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Restrict registration to specific domains <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Disallow multiple logins from the same user
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Disallow access from the mobile APP <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Intercom identity verification <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Disable video transcoding service <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Add system logo as watermark on uploaded videos <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Use modern viewer for documents <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Allow application to be loaded in a frame  <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Enforce SSL <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Lock system <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Hide from search engines <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>


                    <br />
                    <hr />
                    <h4>Course Settings</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> External Course Catalog <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Show branch courses in main course catalog <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Show course summary upon entering a course <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <h4>Conferences</h4>
                    <div class="input-group">
                        Type
                        <div class="input-box">
                            <select>
                                <option value="">Integrated Video Conference (No Flash)</option>
                                <option value="">Integrated Video Conference</option>
                                <option value="">Zoom us</option>
                                <option value="">Microsoft Teams</option>
                                <option value="">Go To Meeting</option>
                                <option value="">Go To Webinar</option>
                                <option value="">Go To Training</option>
                            </select>

                        </div>
                    </div>

                    <br />
                    <hr />
                    <h4>BambooHr Integration</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="checkbox" /> Enable BambooHr Integration <FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
                        </div>
                    </div>


                    <hr />

                    <h4>Custom Fields</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <div class="tag"><FaNewspaper style={{ paddingRight: "2px" }} />Course Tag</div>
                            <div class="tag"><FaUserEdit style={{ paddingRight: "2px" }} /> <span>Price</span></div>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <NavLink to="/addcourses">
                                <button type="submit">Submit</button>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Basicdetails;
