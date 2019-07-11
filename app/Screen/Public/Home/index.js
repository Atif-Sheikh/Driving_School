import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card } from 'native-base'

import NavigationService from '@Service/Navigation'

import HIGHLIGHTS from './Highlights'
import LESSON from './Lesson'
import PLAN from './Plan'
import ATTRIBUTES from './Attributes'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'

export default class extends React.Component {
  render () {
    return <Container style={Style.darkBg}>
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#222' barStyle='light-content' />

        <View style={Style.nav}>
          <View style={Style.navLeft}>
            <Button transparent onPress={() => {
              NavigationService.openDrawer()
            }}>
              <Icon type='Entypo' name='menu' style={Style.iconYellow} />
            </Button>
          </View>
          <View style={Style.navMiddle}>
            <Image source={require('@Asset/images/logo-sm.png')} style={Styles.logo} />
          </View>
          <View style={Style.navRight} />
        </View>
      </Header>

      <Content contentContainerStyle={Style.layout}>

        <View style={Styles.slider}>
          <FlatList
            data={HIGHLIGHTS}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={Styles.sliderList}
            renderItem={({ item, separators }) => (
              <TouchableOpacity style={Styles.sliderBig} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicBooking') }}>
                <View>
                  <Image source={{ uri: item.image }} style={Styles.sliderImg} />
                  <View style={Styles.sliderOverlay}>
                    <View style={Styles.sliderContent}>
                      <View>
                        <Text style={Styles.sliderTitle}>{item.title}</Text>
                        <Text style={Styles.sliderDesc}>{item.desc}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style={Styles.sliderBtn}>
                          <Text style={Styles.sliderBtnText}>{'Book Now'.toUpperCase()}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={Styles.attributes}>
          <Text style={Styles.attributesHeader}>Our Attributes</Text>
          <ImageBackground source={require('@Asset/images/attributes-bg.png')} style={Styles.attributesImg} resizeMode='stretch'>
            <FlatList
              data={ATTRIBUTES}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={Styles.attributesMain}
              renderItem={({ item, separators }) => (
                <TouchableOpacity style={Styles.attributesItem} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicAttributesDetail') }}>
                  <View>
                    <View style={Styles.attributesImgBg}>
                      <Image source={item.image} />
                    </View>
                    <Text style={Styles.attributesTitle}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ImageBackground>
        </View>

        <View style={Styles.plan}>
          <Text style={Styles.planHeader}>Your Pricing Plan</Text>
          <FlatList
            data={PLAN}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <TouchableOpacity style={Styles.planItem} underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicBooking') }}>
                <View>
                  <Text style={Styles.planItemGet}>GET</Text>
                  <Text style={Styles.planItemLesson} >{item.lesson}</Text>
                  <Text style={Styles.planItemStart} >{item.start}</Text>
                  <Text style={Styles.planItemPriceFrom} >{item.pricefrom}</Text>
                  <Text style={Styles.planItemDesc} >{item.desc}</Text>
                  <Text style={Styles.planItemPriceTo} >{item.priceto}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={Styles.lesson}>
          <Text style={Styles.lessonHeader}>Lessons</Text>
          <FlatList
            data={LESSON}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <TouchableOpacity underlayColor='transparent' onPress={() => { NavigationService.navigate('PublicLessonsDetail') }}>
                <View style={Styles.lessonItem}>
                  <Image source={item.image} style={Styles.lessonItemImg} />
                  <View style={Styles.lessonItemContent}>
                    <Text style={Styles.lessonItemTitle}>{item.name}</Text>
                    <Text style={Styles.lessonItemDesc}>{item.desc}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

      </Content>

      <View style={Style.bot}>
        <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicHome') }}>
          <Icon type='FontAwesome' name='home' style={Style.botIconActive} />
          <Text style={Style.botTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicPlan') }}>
          <Icon type='MaterialCommunityIcons' name='cards' style={Style.botIcon} />
          <Text style={Style.botText}>Plan</Text>
        </TouchableOpacity>
        <View style={Style.botPop}>
          <TouchableOpacity style={Style.botPopBtn} onPress={() => { NavigationService.navigate('PublicBooking') }}>
            <Text style={Style.botPopTextSm}>Book</Text>
            <Text style={Style.botPopText}>Now</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicLessons') }}>
          <Icon type='MaterialCommunityIcons' name='car' style={Style.botIcon} />
          <Text style={Style.botText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicAccount') }}>
          <Icon type='FontAwesome' name='user' style={Style.botIcon} />
          <Text style={Style.botText}>Account</Text>
        </TouchableOpacity>
      </View>

    </Container>
  }
}
