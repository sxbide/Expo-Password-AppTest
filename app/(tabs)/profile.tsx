import { ThemedText } from "@/components/ThemedText";
import { ScrollView, StyleSheet } from "react-native";

export default function UserOptionScreen() {
    return (
        <ScrollView>
            <ThemedText style={styles.test}>User</ThemedText>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    test: {
        color: 'black',
        marginTop: 70,
        fontSize: 30
    }
});