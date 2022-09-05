import { ScrollView, StyleSheet, View } from "react-native";
import WeatherPerHourCard from "../WeatherPerHourCard";
import WeatherPerHourHeader from "../WeatherPerHourHeader";

export default function WeatherPerHour() {

  const styles = StyleSheet.create({
    weatherPerHourContainer: {
      display: 'flex',
      marginTop: 30,
    },

    weatherPerHourScroll: {
      marginTop: 15,
    },
  });

  return (
    <View style={styles.weatherPerHourContainer} >
      <WeatherPerHourHeader />

      <ScrollView style={styles.weatherPerHourScroll} horizontal={true} showsHorizontalScrollIndicator={false} >
        <WeatherPerHourCard isCurrentHour hour='12:00' temperature='24' iconName='cloud' />
        <WeatherPerHourCard hour='14:00' temperature='22' iconName='cloud-showers-heavy' />
        <WeatherPerHourCard hour='16:00' temperature='22' iconName='cloud-sun' />
        <WeatherPerHourCard hour='18:00' temperature='20' iconName='cloud-rain' />
        <WeatherPerHourCard hour='20:00' temperature='16' iconName='cloud-moon-rain' />
        <WeatherPerHourCard hour='22:00' temperature='15' iconName='cloud-moon-rain' />
        <WeatherPerHourCard hour='00:00' temperature='12' iconName='cloud-moon' />
        <WeatherPerHourCard hour='01:00' temperature='10' iconName='cloud' />
      </ScrollView>
    </View>
  );
}
