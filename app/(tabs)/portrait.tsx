import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const imageData = [
  {
    id: "1",
    uri: require("../../assets/images/landscape1.jpg"),
    description: "Paisaje 1",
  },
  {
    id: "2",
    uri: require("../../assets/images/landscape2.jpg"),
    description: "Paisaje 2",
  },
  {
    id: "3",
    uri: require("../../assets/images/landscape3.jpg"),
    description: "Paisaje 3",
  },
];

const portrait = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const changeImage = () => {
    const nextIndex = (currentImageIndex + 1) % imageData.length;
    setCurrentImageIndex(nextIndex);
  };

  const renderItem = ({
    item,
  }: {
    item: { uri: any; description: string };
  }) => (
    <View style={styles.imageContainer}>
      <Image source={item.uri} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.gallery}
      />

      <View style={styles.dynamicImageContainer}>
        <Image
          source={imageData[currentImageIndex].uri}
          style={styles.currentImage}
        />
        <Text style={styles.description}>
          {imageData[currentImageIndex].description}
        </Text>
        <TouchableOpacity style={styles.button} onPress={changeImage}>
          <Text style={styles.buttonText}>Cambiar imagen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  gallery: {
    height: 200,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  dynamicImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  currentImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default portrait;
