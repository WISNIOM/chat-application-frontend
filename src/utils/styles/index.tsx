import styled from 'styled-components';

export const InputField = styled.input.attrs({
    className: `
        bg-inherit border-none 
        w-full
        mx-1
        outline-none
        text-lg
    `
})``;

export const InputContainer = styled.div.attrs({
    className: `bg-[#131313] p-3 rounded-[10px] my-3`
})``;

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