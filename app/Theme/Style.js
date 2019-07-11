const React = require('react-native')
const { Platform } = React

export default {

  /** **/
  layout: {
    flexGrow: 1
  },

  darkBg: {
    backgroundColor: '#222'
  },

  /** navigation **/
  navigation: {
    width: '100%',
    borderBottomWidth: 0,
    backgroundColor: '#222',
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0
  },

  nav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    width: '100%',
    borderBottomWidth: 0
  },
  navTitle: {
    color: '#FFF',
    fontFamily: 'Amigos',
    fontSize: 24
  },
  navLeft: {
    flex: 1.5
  },
  navMiddle: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'

  },
  navMiddleText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)'
  },
  navRight: {
    flex: 1.5
  },

  /** Custom Navigation **/
  customNav: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 10
  },
  customNavSearch: {
    borderBottomWidth: 0,
    justifyContent: 'space-between'
  },
  customNavInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    flex: 1
  },
  customNavIcon: {
    fontSize: 18,
    color: '#666'
  },

  /** Icon Colors **/
  iconWhite: {
    color: '#FFF'
  },
  iconBlack: {
    color: '#000'
  },
  iconYellow: {
    color: '#EFBC0E'
  },

  /** Footer **/
  bot: {
    height: 60,
    backgroundColor: '#222',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#222'
  },
  botPop: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222',
    justifyContent: 'center'
  },
  botPopBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#EFBC0E',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#EFBC0E',
    position: 'absolute',
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 40,
    bottom: 5
  },
  botPopText: {
    color: '#222',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },
  botPopTextSm: {
    color: '#222',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular'
  },
  botPopIcon: {
    color: '#222',
    marginBottom: 5
  },
  botBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#222'
  },
  botText: {
    color: '#666',
    fontSize: 8,
    fontFamily: 'Montserrat-Regular'
  },
  botIcon: {
    color: '#666',
    marginBottom: 5
  },
  botTextActive: {
    color: '#EFBC0E',
    fontSize: 8,
    fontFamily: 'Montserrat-Regular'
  },
  botIconActive: {
    color: '#EFBC0E',
    marginBottom: 5
  }

}
