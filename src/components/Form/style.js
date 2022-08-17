import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        marginTop:70,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        textTransform: 'uppercase',
        fontWeight:'bold',
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin:12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#ff0046',
        paddingTop: 14,
        paddingBottom: 14,
        
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize:20,
        color: '#ffffff',
    },

})

export default styles;