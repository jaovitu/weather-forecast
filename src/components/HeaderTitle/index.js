import { StyleSheet, Text } from "react-native";

export default function HeaderTitle({ city, country, isHomePage }) {

  const styles = StyleSheet.create({
    cityTextStyle: {
      color: isHomePage ? '#5c5a5a' : 'rgba(255, 255, 255, 0.7)',
      fontSize: isHomePage ? 24 : 15,
      fontWeight: '700'
    },

    countryTextStyle: {
      color: isHomePage ? 'grey' : 'rgba(255, 255, 255, 0.7)',
      fontSize: isHomePage ? 18 : 15,
    }
  });

  return (
    <Text>
      <Text style={styles.cityTextStyle} >{city}, </Text>
      <Text style={styles.countryTextStyle} >{country}</Text>
    </Text>
  );
}
