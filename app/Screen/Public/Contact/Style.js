const React = require("react-native");
const { Platform } = React;

export default {

    /** form **/
    form: {
        width: '100%',
        paddingVertical: 15,
    },
    formHeader: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 14,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    formCol: {
        flex: 1,
        flexDirection: 'row',
    },
    formGroup: {
        flex: 1,
        flexDirection: 'column',
    },
    formLabel: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: 'rgba(255,255,255,0.5)',
        paddingHorizontal: 20,
    },
    formInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#FFF',
        paddingHorizontal: 20,
    },
    formTextarea: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#FFF',
        paddingHorizontal: 20,
        textAlignVertical: 'top',
    },
    formBtn: {
        backgroundColor: '#EFBC0E',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 20,
    },
    formBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#111',
    },

    /** Social Media Network **/
    smnHeader: {
        paddingHorizontal: 20,
        marginBottom: 20,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#EFBC0E',
    },
    smn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 50,
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
    smnTwitter: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#00ACED',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    smnYouTube: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#D23536',
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