import React, { useState } from "react";
import { Modal } from "../../src/modal";

const Root = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <a href="#"
               onClick={event => {
                   event.preventDefault();
                   setShow(true);
               }}>Abrir</a>
            <Modal draggable
                   maximizable
                   header="Modal title"
                   icon="gear"
                   visible={show}
                   onVisible={setShow}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores at est id impedit ipsam,
                    iste maiores modi neque nesciunt possimus quasi quod repellat sapiente sint sit tempora
                    voluptas.</p>
            </Modal>
        </>
    );
};
export default Root;