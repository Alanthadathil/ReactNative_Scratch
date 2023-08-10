import { View, Text, StyleSheet, ScrollView } from "react-native";
import Box from "./components/Box";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    Style Inheritance<Text style={styles.boldText}> Bold</Text>
                </Text>
            </View>
            <View
                style={[
                    styles.box,
                    styles.lightgreenBg,
                    styles.boxShadow,
                    styles.androidShadow,
                ]}
            >
                <Text>StyleSheet Api</Text>
            </View>
            <View
                style={[styles.box, styles.lightblueBg, styles.androidShadow]}
            >
                <Text>StyleSheet Api</Text>
            </View> */}
            <Box style={{ backgroundColor: "#5f9ea0", paddingVertical: 100 }}>
                Box 1
            </Box>
            <Box style={{ backgroundColor: "#faebd7" }}>Box 2</Box>
            <Box style={{ backgroundColor: "#00ffff" }}>Box 3</Box>
            {/* <Box style={{ backgroundColor: "#0000ff" }}>Box 4</Box> */}
            {/* <Box style={{ backgroundColor: "#8a2be2" }}>Box 5</Box>
            <Box style={{ backgroundColor: "#a52a2a" }}>Box 6</Box>
            <Box style={{ backgroundColor: "#deb887" }}>Box 7</Box>
            <Box style={{ backgroundColor: "#7fff00" }}>Box 8</Box>
            <Box style={{ backgroundColor: "#d2691e" }}>Box 9</Box>
            <Box style={{ backgroundColor: "#dc143c" }}>Box 10</Box> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline",
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red",
    },
    // darkMode: {
    //     backgroundColor: "black",
    // },
    // darkModeText: {
    //     color: "#fff",
    // },
    // boldText: {
    //     fontWeight: "bold",
    // },
    // title: {
    //     color: "white",
    //     fontSize: 18,
    // },
    // box: {
    //     width: 250,
    //     height: 250,
    //     padding: 10,
    //     marginVertical: 10,
    //     borderColor: "red",
    //     borderWidth: 2,
    //     borderRadius: 4,
    // },
    // lightgreenBg: {
    //     backgroundColor: "lightgreen",
    // },
    // lightblueBg: {
    //     backgroundColor: "lightblue",
    // },
    // boxShadow: {
    //     shadowColor: "#333333",
    //     shadowOffset: {
    //         width: 100,
    //         height: 100,
    //     },
    //     shadowOpacity: 0.6,
    //     shadowRadius: 4,
    // },
    // androidShadow: {
    //     elevation: 10,
    // },
});
