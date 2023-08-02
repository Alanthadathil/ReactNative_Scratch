import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.lightgreenBg]}>
                <Text>StyleSheet Api</Text>
            </View>
            <View style={[styles.box, styles.lightblueBg]}>
                <Text>StyleSheet Api</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
    },
    title: {
        color: "white",
        fontSize: 18,
    },
    box: {
        width: 100,
        height: 100,
        padding: 10,
        marginVertical: 10,
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 4,
    },
    lightgreenBg: {
        backgroundColor: "lightgreen",
    },
    lightblueBg: {
        backgroundColor: "lightblue",
    },
});
