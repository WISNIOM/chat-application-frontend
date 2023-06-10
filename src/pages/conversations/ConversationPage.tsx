import { mockConversations } from '../../utils/mocks/Conversations';
import ConversationPanel from './ConversationPanel';
import ConversationSidebar from './ConversationSidebar';

const ConversationsPage = () => {
    return (
        <div className={`grid grid-cols-[20%_80%] 2xl:grid-cols-[10%_90%]`}>
            <ConversationSidebar conversations={mockConversations} />
            <ConversationPanel />
        </div>
    );
}

export default ConversationsPage;