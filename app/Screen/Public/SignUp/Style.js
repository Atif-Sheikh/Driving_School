const React = require("react-native");
const { Platform } = React;

export default {

    bgImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        marginBottom: 30,
    },

    form: {
        width: '100%',
    },
    formCol: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    formInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 15,
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: '#FFF',
    },
    formBtn: {
        backgroundColor: '#EFBC0E',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 30,
    },
    formBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#111',
    },

    signText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#FFF',
    },
    signBtn: {
        backgroundColor: 'transparent',
        padding: 0,
    },
    signBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#FFF',
        marginLeft: 5,
    },
}