import { BsPlusCircleFill } from 'react-icons/bs';
import { FC } from 'react';
import { Conversation } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { ConversationSidebarItem } from '../../utils/styles';

type Props = {
    conversations: Array<Conversation>;
};

const ConversationSidebar: FC<Props> = ({ conversations }) => {
    const navigate = useNavigate();

    return (
        <aside
            className={`
        border-r-2
        border-[#545454de]
        h-screen
        overflow-hidden
        flex flex-col
      `}
        >
            <header
                className={`
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
        `}
            >
                <h1>Conversations</h1>
                <BsPlusCircleFill
                    size={32}
                    className={`
            text-[#545454de]
            hover:cursor-pointer
            ease-in-out
            delay-150
            hover:text-violet-200
            transition
          `}
                />
            </header>
            <div className="overflow-y-auto flex-grow">
                {conversations.map((conversation) => (
                    <ConversationSidebarItem key={conversation.id}
                        onClick={() => navigate(`/conversations/${conversation.id}`)}>
                        <div
                            className={`
                  bg-indigo-400
                  h-[48px]
                  w-[48px]
                  rounded-full
                `}
                        ></div>
                        <div>
                            <span
                                className={`
                    font-bold
                    block
                  `}
                            >
                                {conversation.name}
                            </span>
                            <span
                                className={`
                    text-[14px]
                    text-[#8f8f8f]
                  `}
                            >
                                {conversation.lastMessage}
                            </span>
                        </div>
                    </ConversationSidebarItem>
                ))}
            </div>
        </aside>
    );
};

export default ConversationSidebar;
