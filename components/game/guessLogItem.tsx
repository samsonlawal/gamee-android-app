import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({
  roundsNumber,
  guess,
}: {
  roundsNumber: any;
  guess: any;
}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemsText}>#{roundsNumber}</Text>
      <Text style={styles.itemsText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 4,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemsText: {
    fontFamily: "montserrat-mid",
  },
});
