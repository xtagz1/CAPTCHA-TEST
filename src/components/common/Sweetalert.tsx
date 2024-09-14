
import { useAttemptStore } from '@/stores/attemptStore';
import { useCallback } from 'react';
import Swal from 'sweetalert2';

const useSweetAlert = () => {
    const { attempts } = useAttemptStore();

    const showAlert = useCallback(
        (
            title: string,
            text: string,
            icon: 'success' | 'error',
            onSuccess: () => void = () => {},
            onError: () => void = () => {}
        ) => {
            // Determine the button text based on the icon and attempts
           
            return Swal.fire({
                position: 'top',
                icon,
                title,
                text,
                showConfirmButton: true,
                confirmButtonText: 'ok',
                allowOutsideClick: false, 
            }).then((result) => {
                if (result.isConfirmed) {
                    if (icon === 'success') {
                        onSuccess(); 
                    } else if (icon === 'error') {
                        onError(); 
                    }
                }
            });
        },
        [attempts] 
    );

    return { showAlert };
};

export default useSweetAlert;
