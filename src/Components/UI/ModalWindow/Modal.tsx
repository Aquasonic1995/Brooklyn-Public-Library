import s from "../../UI/ModalWindow/Modal.module.scss";
import React, {useEffect, useRef} from "react";

type ModalType={
    id:string
}



const Modal: React.FC<ModalType>= (props:ModalType) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        modalRef.current = document.getElementById(`${props.id}`) as HTMLDialogElement | null;
    }, [props.id]); // Run this effect only once when the component mounts

    const closeModal = (event: React.MouseEvent) => {
        // Stop propagation if the click occurs inside the "stop" div
        if (event.target && (event.target as HTMLElement).closest('#stop')) {
            event.stopPropagation();
            return;
        }
        modalRef.current?.close();
    };


    return (
        <dialog  id={props.id} className={s.modalLogIn} onClick={closeModal}>
            <div className={s.stop} id="stop">
                <button onClick={closeModal}>close</button>
            </div>

        </dialog>
    );
}

export default Modal;