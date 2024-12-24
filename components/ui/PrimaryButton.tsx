import { StyleSheet, Text, View, Pressable } from "react-native";

function PrimaryButton({
  children,
  onPress,
}: // style,
{
  children: any;
  onPress: () => void;
  // style: {};
}) {
  // function pressHandler() {
  //   console.log("pressed!");
  // }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{ color: "#021526" }}
        onPress={onPress}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#021526",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttontext: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    // fontWeight: "500",
    fontFamily: "montserrat-mid",
  },
});
