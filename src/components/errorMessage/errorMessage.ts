import Swal from "sweetalert2";


export const errorPrint = (message: string) => {
    Swal.fire({
        title: message,
        icon: "error",
        draggable: true,
    });
};