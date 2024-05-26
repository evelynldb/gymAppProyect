import { ButtonSuperAdminPanel } from '../components';
import './SuperAdminPanel.css';

export const SuperAdminPanel = () => {
return (
  <div className="superadmin-panel">
    <h1>SuperAdmin Panel</h1>
    <div className="button-container">
      <div>
        <ButtonSuperAdminPanel to="/activities/create">
          Crear Actividad
        </ButtonSuperAdminPanel>
      </div>
      <div>
        <ButtonSuperAdminPanel to="/activitiesList">
          Editar / Borrar Actividad
        </ButtonSuperAdminPanel>
      </div>
      <div>
        <ButtonSuperAdminPanel to="/createWallForm">Crear Muro</ButtonSuperAdminPanel>
      </div>
      <div>
        <ButtonSuperAdminPanel to="/createWallForm">Crear Muro</ButtonSuperAdminPanel>
      </div>
    </div>
  </div>
);};
