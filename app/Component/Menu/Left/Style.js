const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
  },
  darkBg: {
    backgroundColor: '#111',
    flex: 1, 
    top: 0, 
  },
  drawerBg: {
    position: 'absolute',
    flexDirection: 'row',
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 15 : deviceWidth / 14,
    top: Platform.OS === "android" ? deviceHeight / 17 : deviceHeight / 14,
    resizeMode: "cover",
    borderRadius: 50,
  },
  drawerText: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 15 : deviceWidth / 14,
    top: Platform.OS === "android" ? deviceHeight / 5 : deviceHeight / 5,
    fontSize: 16,
    color: '#EFBC0E',
    fontFamily: 'Montserrat-SemiBold',
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 12,
    marginLeft: 20,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Montserrat-Regular',
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined,
    justifyContent: "center",
  },
  divider: {
    borderBottomWidth: 0,
    borderColor: 'rgba(255,255,255,0.08)',
    paddingBottom: 20,
    marginBottom: 20,
  },
  
};
