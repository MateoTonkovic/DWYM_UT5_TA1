import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import axios from "axios";

const Films = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState<any>(null);

  const handleInputChange = (text: string) => {
    setMovieName(text);
  };

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieName}&apikey=ab85f9d6`
      );

      if (response.data.Response === "False") {
        setMovieData(null);
      } else {
        setMovieData(response.data);
      }
    } catch (err) {
      setMovieData(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buscar pelicula</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter movie name"
        value={movieName}
        onChangeText={handleInputChange}
      />
      <Button title="Search" onPress={fetchMovieData} />
      {movieData && (
        <View style={styles.movieContainer}>
          <Image
            source={{ uri: movieData.Poster }}
            style={styles.poster}
            resizeMode="contain"
          />
          <Text style={styles.movieTitle}>{movieData.Title}</Text>
          <Text style={styles.plot}>{movieData.Plot}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  movieContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: 400,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  plot: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});

export default Films;
