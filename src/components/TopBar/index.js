import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TopBar() {
  const styles = StyleSheet.create({
    topBarContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    }
  });

  return (
    <View style={styles.topBarContainer} >
      <TouchableOpacity>
        <FontAwesome5 name="bars" size={18} color='#000' />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome5 name="ellipsis-h" size={18} color='#000' />
      </TouchableOpacity>
    </View>
  );
}
