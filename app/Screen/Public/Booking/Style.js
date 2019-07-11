const React = require("react-native");
const { Platform } = React;

export default {

    logo: {
    },



    /** Plan **/
    plan: {
        paddingBottom: 15,
        paddingHorizontal: 15,
    },
    planHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 14,
    },
    planItem: {
        flexDirection: 'row',
        width: 150,
        padding: 15,
        backgroundColor: '#282828',
        marginRight: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
    planItemGet: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 10,
    },
    planItemLesson: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15,
    },
    planItemStart: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        textAlign: 'center',
    },
    planItemPriceFrom: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    planItemDesc: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        textAlign: 'center',
    },
    planItemPriceTo: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
    },

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
        marginBottom: 50,
        marginHorizontal: 20,
    },
    formBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#111',
    },

    
    /** Time **/
    time: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    timeHeader: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        marginBottom: 5,
    },
    timeDesc: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 10,
        marginBottom: 20,
    },
    timeItem: {
        flex: 1,
        backgroundColor: '#282828',
        padding: 15,
        borderRadius: 5,
        margin: 2,
    },
    timeItemText: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
        alignSelf: 'center',
    }
    

}