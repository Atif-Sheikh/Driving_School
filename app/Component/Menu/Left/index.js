import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import {
  Content,
  Text,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View,
} from "native-base";
import styles from "./Style";
import NavigationService from './../../../Service/Navigation'

const drawerCover = require("@Asset/images/bg.png");
const drawerImage = require("@Asset/images/avatar.png");
const datas1 = [
  {
    name: "Home",
    route: "PublicHome",
    icon: "home",
  },
  {
    name: "Sign Up",
    route: "PublicSignUp",
    icon: "pencil",
  },
  {
    name: "Sign In",
    route: "PublicSignIn",
    icon: "login",
    type: "MaterialCommunityIcons",
  },
  {
    name: "My Account",
    route: "PublicAccount",
    icon: "user",
  },
  {
    name: "Booking",
    route: "PublicBooking",
    icon: "calendar",
  },
  {
    name: "Payment",
    route: "PublicPayment",
    icon: "credit-card",
  },
  {
    name: "Our Attributes",
    route: "PublicAttributes",
    icon: "checklist",
    type: "Octicons",
  },
  {
    name: "Lessons",
    route: "PublicLessons",
    icon: "ios-car",
    type: "Ionicons",
  },
  {
    name: "Price Plan",
    route: "PublicPlan",
    icon: "attach-money",
    type: "MaterialIcons",
  },
  {
    name: "About Us",
    route: "PublicAboutUs",
    icon: "info-circle",
  },
  {
    name: "Contact Us",
    route: "PublicContact",
    icon: "ios-mail",
    type: "Ionicons",
  },
];
const datas2 = [
  
];

class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  renderList(datas) {
    return (
      <FlatList
        data={datas}
        renderItem={({item}) =>
          <ListItem
            button
            noBorder
            onPress={() => NavigationService.navigate(item.route)}
          >
            <Left>
              <Icon
                active
                name={item.icon}
                style={{ color: "rgba(255,255,255,0.7)", fontSize: 24, width: 30 }}
                type={item.type || 'FontAwesome'}
              />
              <Text style={styles.text}>
                {item.name}
              </Text>
            </Left>
            {
              item.types &&
              <Right style={{ flex: 1 }}>
                <Badge>
                  <Text
                    style={styles.badgeText}
                  >{`${item.types}`}</Text>
                </Badge>
              </Right>
            }
          </ListItem>}
      />
    )
  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={styles.darkBg}
          render
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <View style={styles.drawerBg}>
            <Image square style={styles.drawerImage} source={drawerImage} />
            <Text style={styles.drawerText}>Charles Susainathan</Text>
          </View>

          <View style={styles.divider}>
            {this.renderList(datas1)}
          </View>
          <View>
            {this.renderList(datas2)}
          </View>

        </Content>
      </Container>
    );
  }
}

export default MenuLeft;
