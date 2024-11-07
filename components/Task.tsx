import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type TaskProps = {
  task: string;
  handleDeleteTask: () => void;
};

const Task = ({ task, handleDeleteTask }: TaskProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task}</Text>
      <TouchableOpacity onPress={handleDeleteTask} style={styles.deleteButton}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 50,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
