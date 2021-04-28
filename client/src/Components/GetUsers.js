import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  // run once when loads and then again when data changes
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  return (
    <div>
      {/* {users.map(val => {
        return <p>{val.firstName}</p>;
      })} */}
    </div>
  );
}

export default GetUsers;
