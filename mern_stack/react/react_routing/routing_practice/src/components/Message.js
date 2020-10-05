import React from 'react';

function Message(props) {
    const MessageStyling = {
        color: props.fontColor,
        backgroundColor: props.bgColor,
    }
    if (isNaN(parseInt(props.message))) {
        return (
            <div>
                <h2 style={MessageStyling}>The word is: {props.message}</h2>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 style={MessageStyling}>The number is: {props.message}</h2>
            </div>
        )
    }
}

export default Message;