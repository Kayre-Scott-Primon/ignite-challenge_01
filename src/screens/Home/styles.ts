import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        position: 'relative',
        height: 130
    },
    logo: {
        resizeMode: 'contain',
        height: 35,
        marginBottom: 25

    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: -25,
        marginBottom: 25
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0d0d0d',
        marginRight: 5,
        paddingLeft: 20,
        color: '#fff'
    },
    buttom: {
        backgroundColor: '#1e6f9f',
        borderRadius: 10,
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLabel: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewLabel: {
        flexDirection: 'row'
    },
    label: {
        fontSize: 17,
        fontWeight: '800',
        marginRight: 8
    },
    valueLabel: {
        color: '#fff',
        fontSize: 14,
        backgroundColor: '#333333',
        borderRadius: 25,
        paddingHorizontal: 10,
        fontWeight: '700'
    },
    containerList: { 
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#333333',
        marginVertical: 20,
        alignItems: 'center',
    },
    emptyLabel:{
        color: '#808080',
        fontSize: 15,
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    emptyIcon: {
        marginBottom: 10
    }
})