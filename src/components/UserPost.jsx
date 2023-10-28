import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPost = () => {
  return (
    <Link to={"/markzuckerberg/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar
            size={"md"}
            name={"Mark Zuckerberg"}
            src={"zuck-avatar.png"}
          ></Avatar>
          <Box w="1px" h={"full"} bg={"gray.light"} my={2}></Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
