import { StyleSheet } from "react-native";
import { primaryColor } from "../../screens/Home/styles";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginBottom: 10,
        // marginHorizontal: 35,
        paddingLeft: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },

    description: {
        flex: 1,
        width: '100%',
        color: 'white',
        fontSize: 16,
        marginLeft: 16,
        paddingVertical: 5,
    },

    removeButton: {
        width: 56,
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})