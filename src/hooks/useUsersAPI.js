// useUsersAPI.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useUsersAPI = () => {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then((res) => setUsersList(res.data))
      .catch((error) => console.error('Error fetching users:', error));
  };

  const createUser = (data) => {
    axios
      .post('https://users-crud.academlo.tech/users/', data)
      .then(() => getUsers())
      .catch((error) => console.error('Error creating user:', error));
  };

  const updateUser = (userId, data) => {
    axios
      .put(`https://users-crud.academlo.tech/users/${userId}/`, data)
      .then(() => getUsers())
      .catch((error) => console.error('Error updating user:', error));
  };

  const deleteUser = (userId) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${userId}/`)
      .then(() => getUsers())
      .catch((error) => console.error('Error deleting user:', error));
  };

  return {
    usersList,
    userSelected,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    setUserSelected,
  };
};

export default useUsersAPI;
