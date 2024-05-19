import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/activities.service';
import ActivityDetail from '../components/ActivityDetail';
import { useActivityDetail } from '../hooks/useActivityDetail';

export const ActivityDetailPage = () => {

  const { idActivity } = useParams(); // Obtenemos el ID del cocktail de los parámetros de la URL
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [res, setRes] = useState({});

  useEffect(() => {
    (async () => {
      setRes(await getById(idActivity));
    })();
  }, [idActivity]);

  useEffect(() => {
    useActivityDetail(res, setRes, setActivity);
  }, [res]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
      <ActivityDetail activity={activity} />
    </div>
    );
};
