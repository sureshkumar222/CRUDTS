import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


function Createstudents() {
  let navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      rollnumber: "",
      name: "",
      age: "",
      grade: "",
      gender:""
    },
    validate: (values) => {
      let error = {};

      if (!values.rollnumber) {
        error.rollnumber = "Please enter the rollnumber";
      }

      if (!values.name) {
        error.name = "Please enter the name";
      }

      if (
        values.name &&
        (values.name.length <= 2 || values.name.length > 15)
      ) {
        error.name = "Username must be between 3 to 15 characters";
      }

      if (!values.age || values.age > 17) {
        error.age = "Age should not be lesser than 17";
      }
      if (!values.grade) {
        error.grade = "please enter grade";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://63463cc5745bd0dbd3791eaf.mockapi.io/students",
          values
        );
  
        alert("Form submitted sucessfully");
        navigate('/portal/students')
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <h2>Add Students Form</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
        <div className="col-lg-4">
            <div className="form-group">
              <label>Roll Number*</label>
              <input
                name="rollnumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rollnumber}
                type={"text"}
                className={`form-control ${
                  formik.touched.rollnumber && formik.errors.rollnumber
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.rollnumber && !formik.errors.rollnumber
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.rollnumber && formik.errors.rollnumber ? (
                <span style={{ color: "red" }}>{formik.errors.rollnumber}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Name*</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.touched.name && formik.errors.name
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Age*</label>
              <input
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                type={"number"}
                className={`form-control ${
                  formik.touched.age && formik.errors.age ? "error-box" : ""
                } ${
                  formik.touched.age && !formik.errors.age
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.age && formik.errors.age ? (
                <span style={{ color: "red" }}>{formik.errors.age}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Grade</label>
              <select
                name="grade"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.grade}
                className={`form-control ${
                  formik.touched.grade && formik.errors.grade ? "error-box" : ""
                } ${
                  formik.touched.grade && !formik.errors.grade
                    ? "success-box"
                    : null
                }`}
              >
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>               
              </select>
              {formik.touched.grade && formik.errors.grade ? (
                <span style={{ color: "red" }}>{formik.errors.grade}</span>
              ) : null}
            </div>
          </div>        
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input type={"submit"} className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createstudents;