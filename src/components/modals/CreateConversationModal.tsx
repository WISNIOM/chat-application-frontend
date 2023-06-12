import React, { Dispatch, FC, createRef, useEffect } from 'react';
import { ModalContainer, ModalHeader, ModalContentBody } from '.';
import { OverlayStyle } from '../../utils/styles';
import CreateConversationForm from '../forms/CreateConversationForm';
import { MdClose } from 'react-icons/md';

type Props = {
    setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            e.key === 'Escape' && setShowModal(false);
        }
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { current } = ref;
        if (current === e.target) {
            setShowModal(false);
        }
    };

    return (
        <OverlayStyle ref={ref} onClick={handleOverlayClick}>
            <ModalContainer>
                <ModalHeader>
                    <h2>Create a new Conversation</h2>
                    <MdClose size={32}
                        className={` text-[#545454de] hover:cursor-pointer ease-in-out delay-50 hover:text-violet-200 transition `}
                        onClick={() => setShowModal(false)}
                    />
                </ModalHeader>
                <ModalContentBody>
                    <CreateConversationForm />
                </ModalContentBody>
            </ModalContainer>
        </OverlayStyle>
    )
};

export default CreateConversationModal;