import { FaInfoCircle, FaLock, FaNewspaper, FaUserCircle } from "react-icons/fa"
import { BiMessageDetail, BiCloud } from "react-icons/bi"
import { NavLink } from "react-router-dom";

const Usermanagement = () => {
    return (
        <>
            <div class="wrapper">
                <h2>User Management</h2>
                <form action="" method="post">
                    <h4>Signup</h4>
                    <div class="input-group">
                        <div class="input-box">

                            <select><FaInfoCircle />
                                <option value="">Manually (From Admin)</option>
                                <option value="">Direct</option>
                                <option value="">Direct + Captcha</option>
                                <option value="">Direct + Email Verification</option>
                                <option value="">Direct + Admin activation</option>
                            </select>

                        </div>
                    </div>


                    <h4>Default User Type	&nbsp; <FaInfoCircle /></h4>
                    <div class="input-group">
                        <div class="input-box">

                            <select><FaInfoCircle />
                                <option value="">Learner-Type</option>
                                <option value="">SuperAdmin</option>
                                <option value="">Admin-Type</option>
                                <option value="">Trainer-Type</option>
                                <option value="">Learner-Type</option>
                            </select>

                        </div>
                    </div>


                    <h4>Default Group	&nbsp; <FaInfoCircle /></h4>
                    <div class="input-group">
                        <div class="input-box">

                            <select><FaInfoCircle />
                                <option value="">Select a Group</option>
                            </select>

                        </div>
                    </div>

                    <hr />


                    <div class="input-group">
                        <div class="input-box">
                            <div class="tag"><FaLock style={{ paddingRight: "2px" }} />Password Settings</div>
                            <div class="tag"><FaNewspaper style={{ paddingRight: "2px" }} /> <span>Terms & Service</span></div>
                            <div class="tag"><FaUserCircle style={{ paddingRight: "2px" }} /> Visible User Format</div>
                            <div class="tag"><BiMessageDetail style={{ paddingRight: "2px" }} /> Social Options</div>
                            <div class="tag"><BiCloud style={{ paddingRight: "2px" }} /> Single Sign-On (SSO)</div>

                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <NavLink to="/basicdetails">
                                <button type="submit">Submit</button>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Usermanagement;