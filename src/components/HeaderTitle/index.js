import { StyleSheet, Text } from "react-native";

export default function HeaderTitle({ city, country, isHomePage }) {

  const styles = StyleSheet.create({
    cityTextStyle: {
      color: isHomePage ? '#5c5a5a' : '#c5c9c5',
      fontSize: isHomePage ? 24 : 14,
      fontWeight: '700'
    },

    countryTextStyle: {
      color: isHomePage ? 'grey' : 'lightgrey',
      fontSize: isHomePage ? 18 : 12,
    }
  });

  return (
    <Text>
      <Text style={styles.cityTextStyle} >{city}, </Text>
      <Text style={styles.countryTextStyle} >{country}</Text>
    </Text>
  );
}
