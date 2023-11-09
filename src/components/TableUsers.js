import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/UserService";

function TableUsers() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    //call API
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data) {
      setListUsers(res.data.data);
    }

    console.log(">>> check res:", res);
  };
  console.log(listUsers);
  return (
    <>
      {/* email :"michael.lawson@reqres.in" 
      first_name : "Michael"
       id : 7 
      last_name :"Lawson" */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default TableUsers;