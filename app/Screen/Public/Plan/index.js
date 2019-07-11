import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card, InputGroup, Label } from 'native-base'

import NavigationService from '@Service/Navigation'

import PLAN from './Plan'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Plan/Style'

export default class extends React.Component {

    render() {

        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />

                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent  onPress={() => { 
                            NavigationService.navigate('PublicHome') 
                        }}>
                            <Icon type="Feather" name="arrow-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleText}>{'Price Plan'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>

                <View style={Styles.plan}>
                    <FlatList
                        data={PLAN}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.planItem} underlayColor='transparent'>
                                    <Text style={Styles.planItemLesson}>{item.lesson}</Text>
                                    <View style={Styles.planItemRow}>
                                        <View style={Styles.planItemCol}>
                                            <Text style={Styles.planItemPriceFrom}>{item.pricefrom}</Text>
                                            <Text style={Styles.planItemStart}>{item.start}</Text>
                                        </View>
                                        <View style={Styles.planItemCol}>
                                            <Text style={Styles.planItemPriceTo} >{item.priceto}</Text>
                                            <Text style={Styles.planItemDesc}>{item.desc}</Text>
                                        </View>
                                    </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

            </Content>

            <View style={Style.bot}>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicHome') }}>
                    <Icon type="FontAwesome" name="home" style={Style.botIcon} />
                    <Text style={Style.botText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicPlan') }}>
                    <Icon type="MaterialCommunityIcons" name="cards" style={Style.botIconActive} />
                    <Text style={Style.botTextActive}>Plan</Text>
                </TouchableOpacity>
                <View style={Style.botPop}>
                    <TouchableOpacity style={Style.botPopBtn} onPress={() => { NavigationService.navigate('PublicBooking') }}>
                        <Text style={Style.botPopTextSm}>Book</Text>
                        <Text style={Style.botPopText}>Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicLessons') }}>
                    <Icon type="MaterialCommunityIcons" name="car" style={Style.botIcon} />
                    <Text style={Style.botText}>Lessons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicAccount') }}>
                    <Icon type="FontAwesome" name="user" style={Style.botIcon} />
                    <Text style={Style.botText}>Account</Text>
                </TouchableOpacity>
            </View>

        </Container>
    }
}