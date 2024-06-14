import React from 'react';

const MerchantProfileComponent = ({ merchant }) => {
  return (
    <div>
      <h2>Perfil de Comerciante</h2>
      <p>Nombre del comerciante: {merchant.name}</p>
      <p>Dirección: {merchant.address}</p>
      {/* Otras informaciones del perfil del comerciante */}
    </div>
  );
};

export default MerchantProfileComponent;