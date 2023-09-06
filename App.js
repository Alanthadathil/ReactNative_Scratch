import { View, Text, StyleSheet, ScrollView } from "react-native";
import Box from "./components/Box";

export default function App() {
    return (
        <View style={styles.container}>
            <Box
                style={{ backgroundColor: "#5f9ea0", flexBasis: 140, flex: 1 }}
            >
                Box 1
            </Box>
            <Box style={{ backgroundColor: "#faebd7", height: 140, flex: 1 }}>
                Box 2
            </Box>
            <Box style={{ backgroundColor: "#00ffff" }}>Box 3</Box>
            <Box style={{ backgroundColor: "#0000ff" }}>Box 4</Box>
            <Box style={{ backgroundColor: "#8a2be2" }}>Box 5</Box>
            <Box style={{ backgroundColor: "#a52a2a" }}>Box 6</Box>
            <Box style={{ backgroundColor: "#deb887" }}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 6,
        borderColor: "red",
    },
});
