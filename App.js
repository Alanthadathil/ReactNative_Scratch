import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: "black",
    },
    darkModeText: {
        color: "#fff",
    },
    boldText: {
        fontWeight: "bold",
    },
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
        width: 250,
        height: 250,
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
    boxShadow: {
        shadowColor: "#333333",
        shadowOffset: {
            width: 100,
            height: 100,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        elevation: 10,
    },
});
