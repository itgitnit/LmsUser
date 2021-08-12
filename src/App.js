import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { FaTag, FaVideo, FaShoppingCart, FaLayerGroup, FaUserTimes, FaCertificate, FaLevelUpAlt, FaInfoCircle } from "react-icons/fa"
import './App.css';


function App() {
  return (
    <>
      <div class="wrapper">
        <h2>Add Courses</h2>
        <form action="" method="post">
          <h4>Course Name</h4>
          <div class="input-group">
            <div class="input-box">
              <input
                type="text"
                placeholder="e.g. Introduction to Accounting"
                style={{ width: "80%", height: "50px" }}
              />

            </div>

          </div>

          <h4>Category	&nbsp; <FaInfoCircle /></h4>
          <div class="input-group">
            <div class="input-box">

              <select><FaInfoCircle />
                <option value="">Select A Category</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>

            </div>
          </div>
          <h4>Description</h4>
          <div class="input-group">
            <div class="input-box">
              <textarea
                style={{ width: "80%", height: "80px", borderRadius: "10px" }}
                placeholder="Add a course Description upto 5000 characters"
              ></textarea>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <input type="checkbox" />Active 	&nbsp; 	&nbsp; 	&nbsp;<input type="checkbox" />Hide From
              Course Catalog<FaInfoCircle color="rgb(0, 132, 214)" style={{ paddingLeft: "2px", fontSize: "20px" }} />
            </div>
          </div>
          <hr />


          <div class="input-group">
            <div class="input-box">
              <div class="tag"><FaTag style={{ paddingRight: "2px" }} />Course Tag</div>
              <div class="tag"><FaShoppingCart style={{ paddingRight: "2px" }} /> <span>Price</span></div>
              <div class="tag"><FaVideo style={{ paddingRight: "2px" }} /> Intro Video</div>
              <div class="tag"><FaLayerGroup style={{ paddingRight: "2px" }} /> Capacity</div>
              <div class="tag"><FaUserTimes style={{ paddingRight: "2px" }} /> Course Explanation</div>
              <div class="tag"><FaCertificate style={{ paddingRight: "2px" }} /> Certification</div>
              <div class="tag"><FaLevelUpAlt style={{ paddingRight: "2px" }} />Level</div>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
