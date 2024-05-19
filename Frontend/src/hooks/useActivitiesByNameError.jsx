import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const useGetByNameError = (res, setRes, setData) => {
  if (res?.status == 200) {
    setData(res.data);
    setRes(() => ({}));
  }

  if (res?.response?.status == 404) {
    setRes(() => ({}));
    setData(() => []);
    return;
  }

  if (res?.response?.status == 409) {
    setRes(() => ({}));

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while fetching activities.',
      showConfirmButton: false,
      timer: 3000,
    });
  }

  if (res?.status == 500) {
    setRes(() => ({}));

    Swal.fire({
      icon: 'error',
      title: 'Server Error',
      text: 'An internal server error occurred. Please try again later.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
