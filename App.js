import React, { useEffect, useState } from "react";
import { Button, Image, View } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <Screen>
      <View>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
      </View>
    </Screen>
  );
}
