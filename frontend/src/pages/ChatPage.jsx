import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from '../components/BorderAnimatedContainer';
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "./ActiveTabSwitch";
import ChatContainer from "../components/ChatContainer";
import ContactList from "./ContactList";
import ChatsList from "./ChatsList";
import NoConversationPlaceholder from "./NoConversationPlaceholder";

function ChatPage() {
  const {activeTab, selectedUser} = useChatStore();
  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimatedContainer>
        {/* Left Side */}
        <ProfileHeader/>
        <ActiveTabSwitch/>
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col">
          {activeTab === 'chats' ? <ChatsList/> : <ContactList/>}
        </div>
        {/* Right side */}
        <div className="flex-1">
          {selectedUser ? <ChatContainer/> : <NoConversationPlaceholder/>}
        </div>
      </BorderAnimatedContainer>
    </div>
  )
}

export default ChatPage