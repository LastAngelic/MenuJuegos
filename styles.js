import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
    },

    text: {
        marginBottom: 10,
        fontSize: 50,
        fontWeight: "bold",
    },

    box: {
        width: 120,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: 'gold',
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        margin: 10,
    },

    boxText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
    },

    row: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },

    column: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },
})