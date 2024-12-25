import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "@/components/ui/PrimaryButton";

function StartGame({ onPickNumber }: { onPickNumber: any }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHanler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetInputHanler() {
    setEnteredNumber("");
  }

  function confirmInputHanler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert ...
      Alert.alert("Invalid Number !", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHanler },
      ]);

      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View>
      <Text style={styles.title}>Enter Your Number 😎</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHanler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => confirmInputHanler()}>
              Confirm
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => resetInputHanler()}>
              Reset
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: "#111111",
    textAlign: "center",
    paddingTop: 10,
    marginTop: 80,
    fontFamily: "montserrat-bold",
  },

  inputContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 70,
    width: "50%",
    fontSize: 32,
    borderBottomColor: "#181C14",
    borderBottomWidth: 2,
    color: "#181C14",
    marginVertical: 8,
    textAlign: "center",
    fontFamily: "montserrat-bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  buttonContainer: {
    flex: 1,
  },
});
