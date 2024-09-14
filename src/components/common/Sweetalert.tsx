import { useCallback } from 'react';
import Swal from 'sweetalert2';

const useSweetAlert = () => {
    const showAlert = useCallback(
        (
          title: string,
          text: string,
          icon: 'success' | 'error',
          onSuccess: () => void = () => {},
          onError: () => void = () => {}
        ) => {
    return Swal.fire({
      position: 'top',
      icon,
      title,
      text,
      showConfirmButton: true,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        if (icon === 'success') {
            onSuccess(); 
          } else if (icon === 'error') {
            onError(); 
          }
      }
    });
  }, []);

  return { showAlert };
};

export default useSweetAlert;
