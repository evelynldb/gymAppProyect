import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const useWallsError = (res, setRes, setWalls) => {
  if (res?.response?.status === 200) {
    console.log('DD' + res.data);
    setWalls(res.data);
    setRes({});
  }

  if (res?.response?.status > 300) {
    Swal.fire({
      icon: 'error',
      title: res.error,
      text: res.message,

      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
