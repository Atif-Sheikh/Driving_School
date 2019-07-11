import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

import DrawerContent from '@Component/Menu/Left'

import PublicIntro from '@Screen/Public/Intro'
import PublicHome from '@Screen/Public/Home'
import PublicSignUp from '@Screen/Public/SignUp'
import PublicSignIn from '@Screen/Public/SignIn'
import PublicBooking from '@Screen/Public/Booking'
import PublicPayment from '@Screen/Public/Payment'
import PublicPaymentConfirm from '@Screen/Public/Payment/Confirm'
import PublicAttributes from '@Screen/Public/Attributes'
import PublicAttributesDetail from '@Screen/Public/Attributes/Detail'
import PublicLessons from '@Screen/Public/Lessons'
import PublicLessonsDetail from '@Screen/Public/Lessons/Detail'
import PublicPlan from '@Screen/Public/Plan'
import PublicAccount from '@Screen/Public/Account'
import PublicAboutUs from '@Screen/Public/AboutUs'
import PublicContact from '@Screen/Public/Contact'
import PublicOrders from '@Screen/Public/Orders'



import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get("window").width;

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome,
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    headerMode: "none",
    initialRouteName: "PublicHome",
    drawerWidth: deviceWidth - 50
  }
)

const AppNav = createStackNavigator(
  {
    PublicIntro: {
      screen: PublicIntro
    },
    PublicSignUp: {
      screen: PublicSignUp
    },
    PublicSignIn: {
      screen: PublicSignIn
    },
    PublicBooking: {
      screen: PublicBooking
    },
    PublicPayment: {
      screen: PublicPayment
    },
    PublicPaymentConfirm: {
      screen: PublicPaymentConfirm
    },
    PublicAttributes: {
      screen: PublicAttributes
    },
    PublicAttributesDetail: {
      screen: PublicAttributesDetail
    },
    PublicLessons: {
      screen: PublicLessons
    },
    PublicLessonsDetail: {
      screen: PublicLessonsDetail
    },
    PublicAccount: {
      screen: PublicAccount
    },
    PublicPlan: {
      screen: PublicPlan
    },
    PublicAboutUs: {
      screen: PublicAboutUs
    },
    PublicContact: {
      screen: PublicContact
    },
    PublicOrders: {
      screen: PublicOrders
    },

    Drawer: {
      screen: Drawer
    }
  },

  {
    headerMode: "none",
    initialRouteName: "Drawer"
  }
)

export default class App extends React.Component {
  render() {
    return (
      <AppNav ref={(r) => { NavigationService.setTopLevelNavigator(r) }} />
    );
  }
}