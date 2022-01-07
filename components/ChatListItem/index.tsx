import React from "react"
import { ChatRoom } from "../../types";
import { View, Text } from "react-native";

const ChatListItem = (chatRoom: ChatRoom) => {

    return(
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>


        </View>
    )

}

export default ChatListItem;