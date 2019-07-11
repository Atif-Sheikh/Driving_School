const React = require("react-native");
const { Platform } = React;

export default {

    bgImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
    },
    
    account: {
    },
    accountImg: {
        width: '100%',
        height: 350,
    },
    accountLogin: {
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    accountLoginTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    accountLoginDesc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#999',
        marginBottom: 15,
    },
    accountLoginNote: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: '#999',
        marginBottom: 5,
    },
    accountLoginInput: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#666',
        borderBottomWidth: 1,
        borderColor: '#999',
        marginBottom: 10,
    },
    accountLoginBtn: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#ED5D02',
        paddingVertical: 15,
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        ...Platform.select({
            android: {
                height: 50,
            },
        }),
    },
    accountLoginBtnText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign: 'center',
    },


    accountOthers: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#999',
        marginTop: 30,
        paddingTop: 15,
    },
    accountOthersIcon: {
        fontSize: 18,
        color: '#666'
    },
    accountOthersTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#333'
    },
    accountOthersDesc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: '#999'
    },


    /** Sign Up **/
    signUp: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
        height: 320,
    },
    signUpCloseBtn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10,
    },

    signUpClose: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: '#FF0000',
        zIndex: 2000,
    },
}