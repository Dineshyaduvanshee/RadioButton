import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
const App = () => {
  const [selectedRadio, setSeleectedRadio] = useState(2);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSeleectedRadio(1)}>
        <View style={styles.radiowrapper}>

          <View style={styles.radio}>
            {
              selectedRadio === 1 ? <View style={styles.radiobg}></View> : null
            }

          </View>
          <Text style={styles.radioText}>Radio 1</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSeleectedRadio(2)}>
        <View style={styles.radiowrapper}>
          <View style={styles.radio}>
            {
              selectedRadio === 2 ? <View style={styles.radiobg}></View> : null
            }

          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color:'skyblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  }
  , radiowrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  }
})
export default App;
