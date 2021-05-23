import { React, useState } from 'react';
import './Chat.css';

function Chat() {

    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("SENT", input);

        setInput("");
    }

    return (
        <div className="chat">

            <div className="chat_body">
                <p className="chat_message chat_receiver">
                    <span className="chat_name">Harsh</span>
                            Hello
                    <span className="chat_time">3:30 PM</span>
                </p>
            </div>

            <div className="chat_footer">
                <form>
                    <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
            </div>

        </div>
    )
}

export default Chat;
