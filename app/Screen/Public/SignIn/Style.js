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
        marginTop: 10,
        marginBottom: 10,
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
    forgotBtn: {
        backgroundColor: 'transparent',
        padding: 10,
        alignItems: 'flex-end'
    },
    forgotBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#FFF',
        marginLeft: 5,
    },

    smnHeader: {
        marginTop: 40,
        marginBottom: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#FFF',
    },
    smn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smnFacebook: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2F5695',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    smnGoogle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#DD4B39',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    smnText: {
        flexDirection: 'row',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#FFF',
    },
    smnIcon: {
        fontSize: 18,
        color: '#FFF',
        marginRight: 5,
    },
}