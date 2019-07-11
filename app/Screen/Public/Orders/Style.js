const React = require("react-native");
const { Platform } = React;

export default {

    /** order **/
    order: {
        paddingBottom: 15,
        paddingHorizontal: 15,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 14,
    },
    orderItem: {
        flex: 1,
        padding: 15,
        backgroundColor: '#282828',
        marginBottom: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    orderItemRow: {
        flexDirection: 'row',
        width: '100%',
    },
    orderItemCol: {
        flex: 1,
        flexWrap: 'wrap',
    },
    orderName: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        marginBottom: 10,
    },
    orderId: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        marginRight: 10,
        marginTop: 3,
    },
    orderNo: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 11,
    },
    orderDate: {
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 10,
    },
    
    orderContent: {
        flex: 3,
    },
    orderRight: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    orderIcon: {
        fontSize: 20,
        color: '#EFBC0E'
    },
    
}