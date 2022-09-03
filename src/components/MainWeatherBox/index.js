import { StyleSheet, View } from "react-native";
import getFormattedDate from "../../utils/getFormattedDate";

import MainWeatherInfo from "../MainWeatherInfo";

export default function MainWeatherBox() {

  const { weekDay, day, month } = getFormattedDate();

  const styles = StyleSheet.create({
    mainWeatherBoxContainer: {
      backgroundColor: '#477fff',
      borderRadius: 15,
      marginTop: 30
    }
  });

  return (
    <View style={styles.mainWeatherBoxContainer} >
      <MainWeatherInfo iconName='cloud-sun-rain' weather='Heavy Rain' weekDay={weekDay} day={day} month={month} temperature='21' />
    </View>
  );
}
