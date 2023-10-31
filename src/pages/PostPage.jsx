import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comments from "../components/Comments";

const PostPage = () => {
  const [liked, setliked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src={"/zuck-avatar.png"} />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerburg
            </Text>
            <Image src={"/verified.png"} w={4} h={4} ml={4}></Image>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text m={3}>Lets talk about Threads.</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor="gray.light"
      >
        <Image src={"/post1.png"} w={"full"}></Image>
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setliked={setliked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          87 replies
        </Text>
        <Box w={0.5} h={"0.5"} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {600 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4}></Divider>

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🙌</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4}></Divider>
      <Comments
        comment="This is a comment"
        createdAt="2d"
        likes={10}
        username="Ryan Florence"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comments
        comment="This is another comment"
        createdAt="1d"
        likes={110}
        username="Prosper Otemuyiwa"
        userAvatar="https://bit.ly/prosper-baba"
      />
      <Comments
        comment="First comment"
        createdAt="5d"
        likes={130}
        username="Christian Nwamba"
        userAvatar="https://bit.ly/code-beast'"
      />
    </>
  );
};

export default PostPage;
