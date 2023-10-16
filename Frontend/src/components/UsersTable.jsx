import { useEffect, useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState();
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUsers(data);
        }
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Last Logged In</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.email}</th>
                <td>{user.lastLoggedIn}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
