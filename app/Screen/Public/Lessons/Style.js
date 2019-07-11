const React = require("react-native");
const { Platform } = React;

export default {


    /** Lessons **/
    lessons: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    lessonsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: '#EFBC0E',
        fontSize: 14,
    },
    lessonsItem: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#282828',
        marginBottom: 1,
        alignItems: 'center',
        borderRadius: 10,
    },
    lessonsItemLeft: {
        width: 50,
        alignItems: 'center',
        marginRight: 20,
    },
    lessonsItemContent: {
        flexWrap: 'wrap',
        flex: 1,
    },
    lessonsItemTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 5,
    },
    lessonsItemDesc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'rgba(255,255,255,0.4)',
        lineHeight: 16,
    },
    lessonsItemBtnIcon: {
        color: '#EFBC0E',
        fontSize: 18,
    },
    lessonsItemImg: {
        marginLeft: 10,
    },

    detail: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    detailImg: {
        alignSelf: 'center',
        marginBottom: 50,
    },
    detailTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#EFBC0E',
        marginBottom: 15,
    },
    detailDesc: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'rgba(255,255,255,0.4)',
        lineHeight: 20,
    },
}