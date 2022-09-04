import { StyleSheet, View } from "react-native";
import WeatherPerHourHeader from "../WeatherPerHourHeader";

export default function WeatherPerHour() {

  const styles = StyleSheet.create({
    weatherPerHourContainer: {
      marginTop: 30,
    },
  });

  return (
    <View style={styles.weatherPerHourContainer} >
      <WeatherPerHourHeader />
    </View>
  );
}
