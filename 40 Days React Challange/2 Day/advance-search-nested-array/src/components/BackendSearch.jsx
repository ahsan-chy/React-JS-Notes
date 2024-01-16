import { useEffect, useState } from "react";
import axios from "axios";
import { SiThreedotjs } from "react-icons/si";

function BackendSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(`http://localhost:4000/users?q=${query}`);
      setUsers(result.data);
    };

    if (query.length >= 0) fetchUsers();
  }, [query]);

  return (
    <>
      <div>
        {console.log("offices", users)}
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search User"
          />
        </div>

        <div>
          <h3>Users Data is here</h3>

          {/* //+ Display all list of offices and their nested data */}
          <div>
            {!users.length ? (
              <>
                <SiThreedotjs />
                &nbsp; Loading...
              </>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((userData, index) => (
                    <tr key={index}>
                      <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                        {userData.id}
                      </td>
                      <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                        {userData.first_name}
                      </td>
                      <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                        {userData.last_name}
                      </td>
                      <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                        {userData.email}
                      </td>
                      <td style={{ border: "1px solid black", padding: "0.5rem" }}>
                        {userData.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BackendSearch;
