import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Teachers() {
  const [userData,setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://63463cc5745bd0dbd3791eaf.mockapi.io/teachers"
      );
      setUsersData(users.data);
      setLoading(false);
    } catch {
      alert("Error");
    }
  };

  const deleteUser = (id) => {
    swal({
      title: "This Data wants to delete",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://63463cc5745bd0dbd3791eaf.mockapi.io/teachers/${id}`)
          .then(() => {
            getData();
          });

        swal(" Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Hope to safe!");
      }
    });
  };

  const getData = () => {
    axios
      .get(`https://63463cc5745bd0dbd3791eaf.mockapi.io/teachers`)
      .then((getData) => {
        setUsersData(getData.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">List of Teachers</h1>
        <Link
          to={"/portal/create-teachers"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-clipboard-list fa-x text-gray-300"></i> Add
          Teacher
        </Link>
      </div>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Teachers Details
            </h6>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Phone No</th>
                    <th>Gender</th>
                    <th className="text-center">CRUD</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Phone No</th>
                    <th>Gender</th>
                    <th className="text-center">CRUD</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.department}</td>
                        <td>{data.phoneno}</td>
                        <td>{data.gender}</td>
                        <td>
                          <div className="text-center">
                            <Link
                              to={`/portal/view-detail/${data.id}`}
                              className="btn btn-warning  m-1"
                            >
                              View
                            </Link>
                            <Link
                              to={`/portal/edit-detail/${data.id}`}
                              className="btn btn-secondary m-1"
                            >
                              Edit
                            </Link>

                            <button
                              onClick={() => deleteUser(data.id)}
                              className="btn btn-danger m-1"
                            >
                              Delete
                            </button>
                            <Link
                              to={"/portal/students"}
                              className="btn btn-primary m-1"
                            >
                              Students
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teachers;