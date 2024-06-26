import React from "react";
import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import WebView from "react-native-webview";

const Home = ({ navigation }: any) => {
  const [increment, setIncrement] = useState(0);
  const screenDimensions = Dimensions.get("window");

  const [name, setName] = useState("Omar");
  const [pressBtn, setPressBtn] = useState("press long & short");

  const [users, setUser] = useState([{ Username: "Omar", id: 0 }]);

  const [select, setSelect] = useState<number | null>(null);

  function onpressHandler() {
    setIncrement(increment + 1);

    setUser((pre) => {
      const isExisting = pre.some((user) => user.Username === name);
      if (!isExisting) {
        return [...pre, { Username: name, id: increment }];
      }
      return pre;
    });
  }

  const userData = [
    {
      id: 0,
      name: "omar",
      data: ["js", "react", "next js", "react natve", "& more"],
    },
    {
      id: 1,
      name: "shourov",
      data: ["html", "css", "javascript"],
    },
  ];

  const SKILLS = [
    {
      id: 0,
      skill: "js",
    },
    {
      id: 1,
      skill: "React",
    },
    {
      id: 2,
      skill: "React Native",
    },
  ];
  return (
    <>
      <ScrollView
        style={{
          paddingVertical: 70,
          backgroundColor: "#fff",
        }}
      >
        <View>
          <View style={styles.container}>
            <Button
              title="Go TO Bottom Tab Navigator PAGE"
              onPress={() =>
                navigation.navigate("BottomTabNavigator", { name: "Omar!!" })
              }
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("TopTabNavigator")}
            >
              <Text style={styles.button}>Go to Top Tab Navigator </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SinglePost")}>
              <Text style={styles.button}>Go to SinglePost </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("FlatListWithApi")}
            >
              <Text style={styles.button}>Go to FlatListWithApi </Text>
            </TouchableOpacity>

            <Text style={styles.text}>Platform- {Platform.OS}</Text>

            <Text
              style={[
                styles.text,
                { marginBottom: 10, padding: 20, fontSize: 30 },
              ]}
            >
              {name}- {increment}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Button
              title="Increment This"
              color={"#333"}
              onPress={onpressHandler}
            />
            <StatusBar style="auto" />
          </View>
          <SafeAreaView style={{ marginLeft: 80, marginTop: 50, flex: 1 }}>
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 25, margin: 10, color: "lightgray" }}>
                  {item.Username} - & id is -- {item.id}
                </Text>
              )}
              keyExtractor={(item) => item.id + item.Username}
            />
          </SafeAreaView>
          <View />
          {/* <ScrollView> */}
          <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Section List In React Native</Text>
            <SectionList
              style={{ alignSelf: "flex-start", marginLeft: 80 }}
              sections={userData}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 20 }}>{item}</Text>
              )}
              renderSectionHeader={({ section: { name } }) => (
                <Text style={styles.text}>{name}</Text>
              )}
              // renderSectionFooter={({ section: { id } }) => <Text>{id}</Text>}
            />
          </SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.text}>Class Components</Text>
            <ClassApp name="omar" />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>
              Style Button Using TouchAbleHighlight
            </Text>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Styled Button</Text>
            </TouchableHighlight>
          </View>

          <View
            style={[
              styles.container,
              {
                alignItems: "baseline",
                justifyContent: "center",
                marginLeft: screenDimensions.width * 0.5,
              },
            ]}
          >
            {SKILLS.map((skill, index) => (
              <TouchableOpacity
                style={{ marginBottom: 30 }}
                key={index}
                onPress={() => setSelect(skill.id)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {select == skill.id ? (
                      <View
                        style={{
                          backgroundColor: "cornflowerblue",
                          width: 20,
                          height: 20,
                          borderRadius: 20,
                        }}
                      ></View>
                    ) : null}
                  </View>
                  <Text>{skill.skill}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/* ActivityIndicator component for show loader  */}
          {/* <Modal transparent={true} visible={false} animationType="fade"></Modal> */}
          <Text style={styles.text}>{pressBtn}</Text>
          <Pressable
            style={{ marginBottom: 100 }}
            onPress={() => setPressBtn("onPress-shortPress")}
            onLongPress={() => setPressBtn("onLongPress-LongPress")}
            onPressIn={() => setPressBtn("onPressIn")}
            onPressOut={() => setPressBtn("onPressOut")}
          >
            <Text style={styles.button}>press long & short</Text>
          </Pressable>
          {/* </ScrollView> */}
          <Text style={styles.text}>Web View In React Native</Text>

          <View>
            <ScrollView
              scrollEnabled={true}
              showsVerticalScrollIndicator
              showsHorizontalScrollIndicator
            >
              <WebView
                style={{
                  width: screenDimensions.width,
                  height: screenDimensions.height,
                  marginBottom: 100,
                }}
                useWebView2={true}
                source={{
                  uri: "https://reactnative.dev/docs/next/getting-started",
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

// class Components
interface ClassAppProps {
  name: string;
}
interface ClassAppState {
  count: number;
}
class ClassApp extends Component<ClassAppProps, ClassAppState> {
  constructor(props: ClassAppProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20, color: "gray", margin: 8 }}>
          State: {this.props.name}-{this.state.count}
        </Text>
        <Button
          title="Change State"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: "lightgray",
    fontSize: 25,
    margin: 4,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 4,
  },
  button: {
    margin: 5,
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
