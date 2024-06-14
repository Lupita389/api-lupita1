// UserProfileComponent.js

import React from 'react';

const UserProfileComponent = ({ user }) => {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: {user.username}</p>
      <p>Correo electrónico: {user.email}</p>
      {/* Otras informaciones del perfil */}
    </div>
  );
};

export default UserProfileComponent;
