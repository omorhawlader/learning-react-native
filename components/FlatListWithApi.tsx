import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FlatListWithApi = () => {
  const [post, setPost] = useState<PostType[] | null>(null);

  const getSinglePost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await res.json();
    setPost(post);
  };
  useEffect(() => {
    getSinglePost();
  }, []);

  const renderPostItem = ({ item }: { item: PostType }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postId}>ID: {item.id}</Text>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
      <View style={styles.horizontalLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fetching All Posts</Text>
      {post?.length ? (
        <FlatList
          data={post}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "cornflowerblue",
  },
  postContainer: {
    marginBottom: 20,
  },
  postId: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  postBody: {
    fontSize: 16,
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default FlatListWithApi;
