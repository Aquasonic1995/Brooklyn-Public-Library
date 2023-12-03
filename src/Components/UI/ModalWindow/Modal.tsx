import s from "../../Header/Header.module.scss";
import React, {useRef} from "react";
import {useOnClickOutside} from "usehooks-ts";
type ModalType={
    modal:HTMLDialogElement | null
    id:string
}
const Modal: React.FC<ModalType>= (props:ModalType) => {debugger;
    // const modalLogIn = document.getElementById("modal") as HTMLDialogElement | null;
    const ref2 = useRef(null);
    const handleClickOutside = () => {
        // Your custom logic here
        props.modal?.close()

    };

    useOnClickOutside(ref2, handleClickOutside);
    return (
       <dialog ref={ref2} id={props.id} className={s.modalLogIn}>
            <button onClick={()=>props.modal?.close()}>close</button>
        </dialog>
    );
}

export default Modal;