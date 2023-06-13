import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    label: {
        color: '#fff',
        flexWrap: 'wrap',
        width: '75%',
        fontSize: 15,
        fontWeight: '500'
    }
})