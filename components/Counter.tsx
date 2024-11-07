import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount((prevCount) => prevCount - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>Cantidad de tareas: {count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount((prevCount) => prevCount + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "grey",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  countText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});

export default Counter;
