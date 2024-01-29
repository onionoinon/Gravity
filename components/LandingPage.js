import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const LandingPage = () => {
    const navigation = useNavigation();

  const handleGetStarted =()=>{
    navigation.replace('Login')
}

//HI IM JUST HERE

  return (
    <View style={styles.myHomePage}>
      <Text style={styles.gravity}>GRAVITY.</Text>
      <View style={styles.rectangleParent}>
        <TouchableOpacity
        onPress={handleGetStarted}
        style={styles.groupChild}
        >
        <Text style={styles.getStarted}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  gravity: {
    top: "43.6%",
    left: "23%",
    fontSize: 35,
    fontWeight:'300',
    letterSpacing: 6,
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  myHomePageChild: {
    height: "0.71%",
    width: "1.54%",
    top: "43.25%",
    right: "78.46%",
    bottom: "56.04%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: "#f6e5e5",
    borderWidth: 1,
    position: "absolute",
  },
  getStarted: {
    height: "30.86%",
    width: "51.56%",
    top: "28.57%",
    left: "39.79%",
    fontSize: 10,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.25)",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    height: "4.15%",
    width: "74.1%",
    top: "52.61%",
    right: "13.08%",
    bottom: "43.25%",
    left: "12.82%",
    position: "absolute",
  },
  myHomePage: {
    backgroundColor: "#02020a",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LandingPage;
