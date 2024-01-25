// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import useUsersAPI from './hooks/useUsersAPI'; // Importamos el hook personalizado
import WarningDelete from './components/WarningDelete';

function App() {
  const {
    usersList,
    userSelected,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    setUserSelected,
  } = useUsersAPI(); // Usamos el hook personalizado

  const [form, setForm] = useState(false);
  const [alert, setAlert] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const selectUser = (user) => {
    getForm();
    setUserSelected(user);
  };

  const warning = (user) => {
    setAlert(true);
    setUserToDelete(user);
  };

  const cancelDelete = () => {
    setUserToDelete(null);
    setAlert(false);
  };

  const getForm = () => {
    setForm(true);
  };

  const closeForm = () => {
    setForm(false);
    setUserSelected(null);
  };

  return (
    <div className="App">
      {form && (
        <UserForm
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
          closeForm={closeForm}
          createUser={createUser} // Pasamos la función para crear usuario
          updateUser={updateUser} // Pasamos la función para actualizar usuario
        />
      )}
      <UserList
        usersList={usersList}
        selectUser={selectUser}
        getForm={getForm}
        warning={warning}
      />
      <WarningDelete
        alert={alert}
        userToDelete={userToDelete}
        deleteUser={deleteUser}
        cancelDelete={cancelDelete}
      />
      <footer>
        <p>
          By <strong>Ever Enrique Navarro Figueroa</strong> | G-33 Academlo
        </p>
      </footer>
    </div>
  );
}

export default App;
