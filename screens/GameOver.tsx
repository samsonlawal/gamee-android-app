import PrimaryButton from "@/components/ui/PrimaryButton";
import { Text, View, Image, StyleSheet } from "react-native";

function GameOver({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>🎮 Game Over!</Text>
      <View>
        <Text style={styles.text}>
          It took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
          guess <Text style={styles.highlight}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "#111111",
    textAlign: "center",
    fontFamily: "montserrat-bold",
  },

  text: {
    fontSize: 18,
    color: "#111111",
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontFamily: "montserrat-mid",
  },

  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "red",
    overflow: "hidden",
    margin: 36,
  },

  summaryText: {
    fontFamily: "montserrat-mid",
    fontSize: 16,
    paddingTop: 20,
  },
  highlight: {
    fontFamily: "montserrat-mid",
    color: "red",
  },
});
