import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import StartGame from "@/screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "@/screens/GameScreen";
import GameOver from "@/screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number | null>(0);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuesRounds] = useState(0);

  const [fonstLoaded] = useFonts({
    "montserrat-mid": require("@/assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber: any) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  function onStartNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(true);
    setGuesRounds(0);
    // screen = <StartGame onPickNumber={pickedNumberHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={() => onStartNewGameHandler()}
      />
    );
  }

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.home}>
      <ImageBackground
        source={require("../../assets/images/dices.jpg")}
        resizeMode="cover"
        style={styles.home}
        imageStyle={styles.backgroundIamge}
      >
        <SafeAreaView style={styles.home}>{screen}</SafeAreaView>
        <StatusBar
          translucent={true}
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  backgroundIamge: {
    opacity: 0.01,
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
