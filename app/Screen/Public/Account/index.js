import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Accordion, Picker, CheckBox, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card, InputGroup, Label } from 'native-base'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Account/Style'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
        this.renderAccordionContent = this.renderAccordionContent.bind(this)
        this.renderAccordionContentProfile = this.renderAccordionContentProfile.bind(this)
        this.renderAccordionContentChangePassword = this.renderAccordionContentChangePassword.bind(this)
        this.renderAccordionContentNotification = this.renderAccordionContentNotification.bind(this)
    }
    renderAccordionHeader(item, expanded) {
        return (
            <View style={Styles.accordionTab}>
                <Text style={Styles.accordionTabText}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={Styles.accordionTabIconActive} name="ios-arrow-down" type="Ionicons" />
                    : <Icon style={Styles.accordionTabIcon} name="ios-arrow-forward" type="Ionicons" />}
            </View>
        );
    }
    renderAccordionContent(item) {
        var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1));
        return <View style={Styles.accordionContent}>
            {this[fn]()}
        </View>
    }
    renderAccordionContentProfile() {
        return <View style={Styles.card}>

            <View style={Styles.cardCol}>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>First Name</Text>
                    <TextInput style={Styles.cardInput} placeholder="Charles" placeholderTextColor="#FFF" />
                </InputGroup>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>Last Name</Text>
                    <TextInput style={Styles.cardInput} placeholder="Susainathan" placeholderTextColor="#FFF" />
                </InputGroup>
            </View>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Email Address</Text>
                <TextInput style={Styles.cardInput} placeholder="mr.charlessusainathan@gmail.com" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Mobile Number</Text>
                <TextInput style={Styles.cardInput} placeholder="+91 9444495566" placeholderTextColor="#FFF" />
            </InputGroup>
            <TouchableOpacity style={Styles.formBtn} onPress={() => {
                NavigationService.navigate('PublicDashboard')
            }}>
                <Text style={Styles.formBtnText}>{'Update'.toUpperCase()}</Text>
            </TouchableOpacity>

        </View>
    }
    renderAccordionContentChangePassword() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>New Password</Text>
                <TextInput style={Styles.cardInput} placeholder="*****" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Confirm New Password</Text>
                <TextInput style={Styles.cardInput} placeholder="*****" placeholderTextColor="#FFF" />
            </InputGroup>
            <TouchableOpacity style={Styles.formBtn} onPress={() => {
                NavigationService.navigate('PublicDashboard')
            }}>
                <Text style={Styles.formBtnText}>{'Change Password'.toUpperCase()}</Text>
            </TouchableOpacity>

        </View>
    }
    renderAccordionContentNotification() {
        return <View style={Styles.card}>

            <View style={Styles.cardSave}>
                <CheckBox  style={Styles.cardCheckbox} />
                <Text style={Styles.cardSaveText}> Send Newseltter</Text>
            </View>
            <TouchableOpacity style={Styles.formBtn} onPress={() => {
                NavigationService.navigate('PublicDashboard')
            }}>
                <Text style={Styles.formBtnText}>{'Update'.toUpperCase()}</Text>
            </TouchableOpacity>

        </View>
    }

    render() {
        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />

                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon type="Feather" name="arrow-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleText}>{'My Account'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>


                <View style={Styles.payment}>
                    <Accordion
                        style={Styles.accordion}
                        dataArray={[
                            {
                                type: 'profile',
                                title: 'Manage Profile',
                            },
                            {
                                type: 'changePassword',
                                title: 'Change Password'
                            },
                            {
                                type: 'notification',
                                title: 'Notification'
                            },
                        ]}
                        expanded={0}
                        renderHeader={this.renderAccordionHeader}
                        renderContent={this.renderAccordionContent}
                    />
                </View>
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
                    <Icon type="FontAwesome" name="user" style={Style.botIconActive} />
                    <Text style={Style.botTextActive}>Account</Text>
                </TouchableOpacity>
            </View>

        </Container>
    }
}