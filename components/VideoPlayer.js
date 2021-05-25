import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: "100%",
    height: 260,
    backgroundColor: "black",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
