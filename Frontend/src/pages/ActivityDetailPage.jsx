import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/activities.service';
import ActivityDetail from '../components/ActivityDetail';
import { useActivityDetail } from '../hooks/useActivityDetail';

export const ActivityDetailPage = () => {
  const { idActivity } = useParams(); // Obtenemos el ID de la actividad de los parámetros de la URL
  const [activity, setActivity] = useState(null);
  const [res, setRes] = useState({});

  useEffect(() => {
    (async () => {
      setRes(await getById(idActivity));
    })();
  }, []);

  useEffect(() => {
    useActivityDetail(res, setRes, setActivity);
  }, [res]);

  useEffect(() => {}, [activity]);

  return (
    <div>
      { activity && <ActivityDetail activity={activity} /> }
    </div>
  );
};
