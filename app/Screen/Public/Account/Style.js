const React = require("react-native");
const { Platform } = React;

export default {

    /* Accordion */
    accordion: {
        width: '100%',
    },
    accordionTab: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    accordionTabText: {
        color: '#EFBC0E',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
    },
    accordionTabIcon: {
        fontSize: 18,
        color: '#EFBC0E',
    },
    accordionTabIconActive: {
        fontSize: 18,
        color: '#EFBC0E',
    },
    accordionContent: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },



    payment: {
        flex: 1,
        marginVertical: 10,
    },
    card: {
        paddingTop: 10,
    },
    cardGroup: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 15,
        borderBottomWidth: 0,
    },
    cardLabel: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        marginBottom: 5,
    },
    cardInput: {
        width: '100%',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#FFF',
        borderBottomWidth: 1,        
        borderColor: 'rgba(255,255,255,0.5)',
        paddingTop: 5,
        paddingBottom: 5,
        ...Platform.select({
            android: {
                height: 40,
            },
        }),
        marginBottom: 15,
    },
    cardCol: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardCvv: {
        flex: 0.5,
        alignItems: 'center',
    },
    cardCvvIcon: {
        color: '#EFBC0E',
    },
    cardCheckbox: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.1)',
    },
    cardPickerBg: {
        borderBottomWidth: 1,        
        borderColor: 'rgba(255,255,255,0.09)',
        paddingHorizontal: 5,
        marginBottom: 15,
    },
    cardPicker: {
        width: '100%',
        fontSize: 12,
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
    },
    cardSave: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    cardSaveText: {
        marginLeft: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(255,255,255,0.5)',
    },

    /** -- Radio Group -- **/
    contactFormRow: {
        flexDirection: 'row',
        marginBottom: 10,

    },
    contactForm: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    contactFormText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },

    /* Card Holder */
    listItem: {
        borderBottomWidth: 0
    },
    placeHolder: {
        margin: 5
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        margin: 5
    },
    expiry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0,
    },
    cvv: {
        width: '50%',
        justifyContent: 'flex-start',
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateText: {
        width: '50%'
    },
    noValue: {
        width: '50%'
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
        marginTop: 10,
        marginBottom: 30,
    },
    formBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#111',
    },




}