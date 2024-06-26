import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SinglePost = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const getSinglePost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await res.json();
    setPost(post);
  };
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          color: "lightgray",
          fontSize: 25,
          margin: 4,
        }}
      >
        User Id:{post?.userId}
      </Text>
      <Text style={{ color: "cornflowerblue", fontSize: 24, margin: 4 }}>
        Title: {post?.title ? post.title : "No Post Found"}
      </Text>
      <Text
        style={{
          color: "tomato",
          fontSize: 20,
          margin: 4,
        }}
      >
        {post?.body}
      </Text>
    </View>
  );
};

export default SinglePost;
