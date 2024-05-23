/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./CrearActivity.css";

import { Uploadfile } from "../components/Uploadfile";
import { useCreateActivityError } from "../hooks/useCreateActivityError";
import { Navigate } from "react-router-dom";
import { createActivityService } from "../services/activities.service";
import { useAuth } from "../context/authContext";

export const CrearActivity = () => {
  const { user } = useAuth();
  // Si el usuario no está logueado, redirige a la página de inicio de sesión
  if (!user) {
    return <Navigate to="/login" />;
  }

  //! 1) crear los estados

  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);

  //! 2) llamada al hook de react hook form
  /** El handleSubmit sirve para ejecutar la funcion que gestiona los datos del formulario (punto 3)
   *
   * Estos datos son registrados en un objeto gracias al register de la liberia de reacthookform
   * que lo que hace es registrar los valores de los input
   *
   * Cuando el register hace el formData, lo recibe la función que pasamos en el handleSubmit
   */
  const { register, handleSubmit } = useForm();

  //! 3) la funcion que gestiona los datos del formulario
   const formSubmit = async (data) => {
     const inputFile = document.getElementById('file-upload').files;
     const formData = new FormData();

     for (let key in data) {
       formData.append(key, data[key]);
     }

     if (inputFile.length !== 0) {
       formData.append('image', inputFile[0]);
     }

     setSend(true);
     setRes(await createActivityService(formData));
     setSend(false);
   };

   useEffect(() => {
     //! useEffects que gestionan la repuesta y manejan los errores
     useCreateActivityError(res, setRes, setOk);
     console.log('res', res);
   }, [res]);

   if (ok) {
     return <Navigate to="/activities/feed" />;
   }
  

  return (
    <>
      <div className="form-wrap">
        <h1>Crear actividad Energy Center</h1>
        <p>Registra una nueva actividad deportiva</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Nombre de la actividad
            </label>
            <input
              className="input_activity"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register('name', { required: true })}
            />
          </div>

          <div className="spotscontainer form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Número de plazas
            </label>
            <input
              className="input_activity"
              type="number"
              id="number"
              name="spots"
              autoComplete="false"
              {...register('spots', { required: true })}
            />
          </div>

          <div className="descriptioncontainer form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Descripción de la actividad
            </label>
            <textarea
              className="input_activity"
              id="description"
              name="description"
              autoComplete="false"
              {...register('description', { required: true })}
            ></textarea>
          </div>

          <div className="type  form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Tipo de actividad
            </label>
            <input
              type="radio"
              name="type"
              id="colectivas"
              value="colectivas"
              {...register('type')}
            />
            <label htmlFor="colectivas" className="label-radio colectivas">
              Colectivas
            </label>
            <input
              type="radio"
              name="type"
              id="pistas"
              value="pistas"
              {...register('type')}
            />
            <label htmlFor="pistas" className="label-radio pistas">
              Pistas
            </label>
          </div>
          <div className="status form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Estado
            </label>
            <input
              type="radio"
              name="status"
              id="true"
              value="true"
              {...register('status')}
            />
            <label htmlFor="true" className="label-radio status">
              Activo
            </label>
            <input
              type="radio"
              name="status"
              id="false"
              value="false"
              {...register('status')}
            />
            <label htmlFor="false" className="label-radio status">
              Desactivado
            </label>
          </div>
          <Uploadfile />
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? '#49c1a388' : '#2f7a67' }}
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

