import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily } from "../GlobalStyles";
//import { loadCustomFont } from './assets/fonts/Gloock-Regular'; // Update the path


const LandingPage = () => {

    {/*useEffect(() => {
        async function loadFont() {
          await loadCustomFont();
          setFontLoaded(true);
        }
    
        loadFont();
      }, []);
    
      if (!isFontLoaded) {
        return null; // or render a loading indicator
      }*/}
    
  return (
    <View style={styles.myHomePage}>
      <Text style={styles.gravity}>GRAVITY</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.getStarted}>GET STARTED</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gravity: {
    top: "43.6%",
    left: "27.69%",
    fontSize: 24,
    letterSpacing: 0,
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
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "#f6e5e5",
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    height: "22.86%",
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
    backgroundColor: "#393939",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LandingPage;
