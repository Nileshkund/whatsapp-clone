import React, {useState} from 'react';
import './Chatcontainer.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from "./ChatMessage";
import EmojiPicker from 'emoji-picker-react';

function Chatcontainer() {

    const [message, setMessage] = useState('');
    const [openEmojiBox, setOpenEmojiBox] = useState(false);
    
    return (
    <div className='chat-container'>
        <div className='chat-container-header'>
            <div className='chat-user-info'>
                <div className='chat-user-img'>
                   <img src='./user.png' alt='' />
             </div>
             <p>jhon Cena</p>
            </div>
            <div className='chat-container-header-btn'>
                <MoreVertIcon />
            </div>
        </div>
        {/* chatdisplay-container */}

        <div className='chat-display-container'>
            
            <ChatMessage message= 'Hello, Jhon cena'time='15-02-2023'/>
            <ChatMessage message=' How are you?' time='15-02-2023'/>
            <ChatMessage message='What are you Doing Now?' time='15-02-2023'/>
            <ChatMessage message='Did we go to watch the movie tomorrow? ' time='15-02-2023'/>
        </div>
               
        {/* chatinput */}

        <div className='chat-input'>
            {/* buttons */}
            {openEmojiBox && (
            <EmojiPicker 
            onEmojiClick={(event, emojiObject) =>
                 setMessage(message + emojiObject.emoji)
                 }
                 />
                 )}
            <div className='chat-input-btn'>
             <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
             <AttachFileIcon />
            </div>
            {/* text input element */}
            <form>
                <input 
                type='text' 
                placeholder='Type a Message' 
                value={message} 
                onChange={(e) => {
                   setMessage(e.target.value);
                }} />
            </form>
            {/* send button */}
            <div className='chat-input-send-btn'>
            <SendIcon/>
            </div>
        </div>
    </div>
    );
}
export default Chatcontainer;
