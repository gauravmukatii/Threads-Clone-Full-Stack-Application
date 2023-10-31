import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={881}
        replies={167}
        postImg={"/post1.png"}
        postTitle="Random post from me"
      />
      <UserPost
        likes={667}
        replies={57}
        postImg={"/post2.png"}
        postTitle="Cheers"
      />
      <UserPost
        likes={542}
        replies={200}
        postImg={"/post3.png"}
        postTitle="Comment what you like about threads"
      />
      <UserPost likes={991} replies={680} postTitle="My first thread." />
    </>
  );
};

export default UserPage;
