import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAllUserService } from '../services/getAllUserService';
function ListUsers() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    async function getAllUsers() {
      const usersList = await getAllUserService(
        'https://reqres.in/api/users?page=2'
      );
      if (usersList) {
        setListUsers(usersList.data);
      }
    }
    getAllUsers();
  }, []);
  return (
    <main
      style={{
        padding: 10,
        boxShadow: '0px 0px 3px black',
        margin: '1em',
        borderRadius: '1em',
      }}
    >
      <main
        style={{
          padding: 10,
          boxShadow: '0px 0px 3px black',
          margin: '1em',
          borderRadius: '1em',
        }}
      >
        <section
          style={{
            padding: 10,
            boxShadow: '0px 0px 3px black',
            margin: '1em',
            borderRadius: '1em',
          }}
        >
          {localStorage.token
            ? listUsers.map((list, index) => {
                return (
                  <Card
                    key={index}
                    {...list}
                  />
                );
              })
            : (location.href = '/login')}
        </section>
      </main>
    </main>
  );
}

export default ListUsers;
