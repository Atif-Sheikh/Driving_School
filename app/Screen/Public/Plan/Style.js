const React = require("react-native");
const { Platform } = React;

export default {

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
        flex: 1,
        padding: 15,
        backgroundColor: '#282828',
        marginBottom: 10,
        borderRadius: 10,
    },
    planItemRow: {
        flexDirection: 'row',
        width: '100%',
    },
    planItemCol: {
        flex: 1,
        flexWrap: 'wrap',
    },
    planItemLesson: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
        fontSize: 14,
        marginBottom: 15,
    },
    planItemStart: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
    },
    planItemPriceFrom: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 18,
        marginVertical: 10,
    },
    planItemDesc: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12,
    },
    planItemPriceTo: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },
}