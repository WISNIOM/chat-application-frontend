import { FC, useState } from 'react';
import { Conversation } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { ConversationSidebarItem, ConversationSidebarHeader, ConversationSidebarAside } from '../../utils/styles';
import { BsPlusCircleFill } from 'react-icons/bs';
import CreateConversationModal from '../../components/modals/CreateConversationModal';

type Props = {
    conversations: Array<Conversation>;
};

const ConversationSidebar: FC<Props> = ({ conversations }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <CreateConversationModal setShowModal={setShowModal} />}
            <ConversationSidebarAside>
                <ConversationSidebarHeader>
                    <h1>Conversations</h1>
                    <div onClick={() => setShowModal(!showModal)}>
                        <BsPlusCircleFill
                            size={32}
                            className={` text-[#545454de] hover:cursor-pointer ease-in-out delay-150 hover:text-violet-200 transition `}
                        />
                    </div>
                </ConversationSidebarHeader>
                <div className="overflow-y-auto flex-grow">
                    {conversations.map((conversation) => (
                        <ConversationSidebarItem key={conversation.id}
                            onClick={() => navigate(`/conversations/${conversation.id}`)}>
                            <div className={`bg-indigo-400 h-[48px] w-[48px] rounded-full`}></div>
                            <div>
                                <span className={`font-bold block`}>
                                    {conversation.name}
                                </span>
                                <span className={` text-[14px] text-[#8f8f8f]`}>
                                    {conversation.lastMessage}
                                </span>
                            </div>
                        </ConversationSidebarItem>
                    ))}
                </div>
            </ConversationSidebarAside>
        </>
    );
};

export default ConversationSidebar;
