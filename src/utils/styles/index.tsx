import styled from 'styled-components';
import { InputContainerProps } from './styleTypes';

export const InputField = styled.input.attrs({
    className: `
        bg-inherit border-none 
        w-full
        mx-1
        outline-none
        text-lg
    `
})``;

export const InputContainer = styled.div<InputContainerProps>`
    background-color: ${(prop) => prop.backgroundColor || `#131313`};
    padding: 0.75rem;
    border-radius: 10px;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
`;

export const InputLabel = styled.label.attrs({
    className: `
    block mx-1 text-[#8f8f8f] text-xs
    `
})``;

export const Button = styled.button.attrs({
    className: `
            active:bg-blue-600
            active:ring
            active:ring-blue-200
            border-none 
            bg-[#2b09ff]
            ease-in-out
            delay-150 
            hover:ring
            hover:ring-violet-200
            focus:ring
            focus:ring-violet-200
            duration-300
            my-3
            outline-none 
            p-5 
            rounded-[10px]
            target:bg-blue-600
            target:ring
            target:ring-blue-200
            transition 
            text-white text-lg w-full
            `
})``;

export const ConversationSidebarItem = styled.div.attrs({
    className: `
        content-center
        justify-center
        gap-4
        grid
        grid-cols-[20%_80%]
        px-[16px]
        py-[10px]
        border-b-2
        border-[#545454de]
        hover:cursor-pointer
        hover:bg-[#545454de]
        ease-in-out
        delay-150 
        transition
        `
})``;

export const ConversationSidebarAside = styled.aside.attrs({
    className: `
        border-r-2
        border-[#545454de]
        h-screen
        overflow-hidden
        flex flex-col
    `
})``;

export const ConversationSidebarHeader = styled.header.attrs({
    className: `
        min-h-[60px]
        bg-[#131313]
        font-bold
        px-[24px]
        grid
        grid-cols-[85%_15%]
        justify-center
        content-center
        border-b-2
        border-[#545454de]
        text-lg
        sticky    
    `
})``;

export const OverlayStyle = styled.div.attrs({
    className: `
    h-full
    w-full
    bg-[#000000c4]
    fixed
    grid
    place-content-center
    z-10
    `
})``;

export const ModalHeaderStyle = styled.header.attrs({
    className: `
        w-full
        text-lg
        font-bold
        px-5
        py-3
        grid
        grid-cols-[95%_5%]
    `
})``;

export const ModalContainerStyle = styled.div.attrs({
    className: `
        bg-[#121212]
        w-[650px]
        rounded-[10px]
    `
})``;

export const ModalContentBodyStyle = styled.div.attrs({
    className: `
        p-3
    `
})``;

export const TextField = styled.textarea.attrs({
    className: `
        bg-inherit border-none 
        w-full
        mx-1
        outline-none
        text-lg
        resize-none
        h-[100px]
    `
})``;