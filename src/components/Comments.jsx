import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { useState } from "react";

const Comments = ({ userAvatar, comment, createdAt, likes, username }) => {
  const [liked, setliked] = useState(false);
  return (
    <>
      <Flex gap={4} w={"full"} py={2} my={2}>
        <Avatar src={userAvatar} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={liked} setliked={setliked} />
          <Text>{likes + (liked ? 1 : 0)} likes</Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comments;
