import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card, InputGroup, Label } from 'native-base'

import NavigationService from '@Service/Navigation'

import TIME from './Time'
import PLAN from './Plan'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Booking/Style'

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
                        <Text style={Style.navMiddleText}>{'Step 1 - Let\'s Make A Booking'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>


                <View style={Styles.form}>
                    <Text style={Styles.formHeader}>Your Personal Details</Text>
                    <View style={Styles.formCol}>
                        <View style={Styles.formGroup}>
                            <Label style={Styles.formLabel}>{'First Name'.toUpperCase()}</Label>
                            <TextInput style={Styles.formInput} placeholder="Charles" placeholderTextColor="#FFF" />
                        </View>
                        <View style={Styles.formGroup}>
                            <Label style={Styles.formLabel}>{'Last Name'.toUpperCase()}</Label>
                            <TextInput style={Styles.formInput} placeholder="Susainathan" placeholderTextColor="#FFF" />
                        </View>
                    </View>
                    <View style={Styles.formGroup}>
                        <Label style={Styles.formLabel}>{'Email Address'.toUpperCase()}</Label>
                        <TextInput style={Styles.formInput} placeholder="mr.charlessusainathan@gmail.com" placeholderTextColor="#FFF" />
                    </View>
                    <View style={Styles.formGroup}>
                        <Label style={Styles.formLabel}>{'Mobile Number'.toUpperCase()}</Label>
                        <TextInput style={Styles.formInput} placeholder="+91 9444495566" placeholderTextColor="#FFF" />
                    </View>
                </View>

                <View style={Styles.plan}>
                    <Text style={Styles.planHeader}>Please select a suitable category</Text>
                    <FlatList
                        data={PLAN}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity style={Styles.planItem} underlayColor='transparent'>
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

                <View style={Styles.form}>
                    <Text style={Styles.formHeader}>Booking Date</Text>
                    <View style={Styles.formGroup}>
                        <Label style={Styles.formLabel}>{'Would you like to add special instructions?'.toUpperCase()}</Label>
                        <TextInput style={Styles.formTextarea} multiline={true} maxLength={40} placeholder="" placeholderTextColor="#FFF" />
                    </View>
                    <View style={Styles.formGroup}>
                        <Label style={Styles.formLabel}>{'Select Booking Date'.toUpperCase()}</Label>
                        <TextInput style={Styles.formInput} placeholder="22/11/2018" placeholderTextColor="#FFF" />
                    </View>
                </View>

                <View style={Styles.time}>
                    <Text style={Styles.timeHeader}>Select Suitable Time For Booking</Text>
                    <Text style={Styles.timeDesc}>* Booked slots are disabled. Select next date if all slots are taken.</Text>
                    <FlatList
                        data={TIME}
                        numColumns="3"
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, separators }) => (
                            <TouchableOpacity underlayColor='transparent' style={Styles.timeItem}>
                                <View>
                                    <Text style={Styles.timeItemText}>{item.time} {item.session}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>


                <TouchableOpacity style={Styles.formBtn} onPress={() => {
                    NavigationService.navigate('PublicPayment')
                }}>
                    <Text style={Styles.formBtnText}>{'Book Now!'.toUpperCase()}</Text>
                </TouchableOpacity>





            </Content>

            <View style={Style.bot}>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicHome') }}>
                    <Icon type="FontAwesome" name="home" style={Style.botIcon} />
                    <Text style={Style.botText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicPlan') }}>
                    <Icon type="MaterialCommunityIcons" name="cards" style={Style.botIcon} />
                    <Text style={Style.botText}>Plan</Text>
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