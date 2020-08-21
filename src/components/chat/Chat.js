import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import db from '../../firebase';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapShot) => setRoomDetails(snapShot.data()));
        }
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapShot) =>
                setRoomMessages(snapShot.docs.map((doc) => doc.data()))
            );
    }, [roomId]);
    console.log('MESSAGES>>>>>>>>>>:', roomDetails);
    console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong> # {roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <ErrorOutlineIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {/*   < messsage..../>*/}
                {roomMessages.map(({ message, timestamp, user, userimage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userimage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    );
}

export default Chat;
