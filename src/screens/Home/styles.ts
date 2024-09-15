import { StyleSheet } from "react-native";



export const primaryColor = 'blue'
export const lightPrimary = '#3B3BFF'
export const secondaryColor = '#7C1BFD'
export const lightSecondary = '#5602C6'

export const styles = StyleSheet.create({
    container: {
        margin: 35,
    },
    
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        flexDirection: 'row',
    },

    to: {
        color: secondaryColor,
        fontSize: 48,
        marginBottom: 5,
        fontWeight: 'bold'
    },

    do: {
        color: primaryColor,
        fontSize: 48,
        marginBottom: 5,
        fontWeight: 'bold'
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor:'gray',
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 16,
        marginRight: 5,
        color: 'white'
    },

    addButton: {
        width: 56,
        height: 56,
        backgroundColor: primaryColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // addButtonText: {
    //     color: 'white',
    //     fontSize: 24,
    // },

    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    statistics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 15,
    },

    created: {
        color: lightSecondary,
        marginEnd: 90,
        fontWeight: 'bold',
        fontSize: 20,
    },

    completed: {
        color: lightPrimary,
        fontWeight: 'bold',
        fontSize: 20,
    },

    flatList: {
        marginBottom: 250
    }
})