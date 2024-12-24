import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }: { children: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: "#111111",
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "montserrat-bold",
  },
});
