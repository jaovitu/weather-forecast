import { StyleSheet, View } from "react-native";

export default function GlobalContainer({ isHomePage, children }) {

  const styles = StyleSheet.create({
    globalContainerStyle: {
      backgroundColor: isHomePage ? '#FFF' : '#477fff',
      flex: 1,
      padding: 20,
    }
  });

  return (
    <View style={styles.globalContainerStyle}>
      {children}
    </View>
  );
}
