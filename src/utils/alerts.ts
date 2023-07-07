import Swal from "sweetalert2";

export const oneSecondAlert = (title: string) => {
    return Swal.fire({
        title,
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}
