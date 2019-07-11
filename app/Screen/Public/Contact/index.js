import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card, InputGroup, Label } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Contact/Style'

export default class extends React.Component {

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
                        <Text style={Style.navMiddleText}>{'Contact'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>


                <View style={Styles.form}>
                    <Text style={Styles.formHeader}>We're open for any suggestion</Text>
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
                    <View style={Styles.formGroup}>
                        <Label style={Styles.formLabel}>{'Your Message'.toUpperCase()}</Label>
                        <TextInput style={Styles.formInput} placeholder="" multiline={true} placeholderTextColor="#FFF" />
                    </View>
                    <TouchableOpacity style={Styles.formBtn} onPress={() => {
                        NavigationService.navigate('PublicHome')
                    }}>
                        <Text style={Styles.formBtnText}>{'Submit'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>

                <Text style={Styles.smnHeader}>Reach us on</Text>
                <View style={Styles.smn}>
                    <TouchableOpacity style={Styles.smnFacebook}>
                        <Icon type="FontAwesome" name="facebook" style={Styles.smnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.smnTwitter}>
                        <Icon type="FontAwesome" name="twitter" style={Styles.smnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.smnYouTube}>
                        <Icon type="FontAwesome" name="youtube" style={Styles.smnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.smnGoogle}>
                        <Icon type="FontAwesome" name="google-plus" style={Styles.smnIcon} />
                    </TouchableOpacity>
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
                    <Icon type="FontAwesome" name="user" style={Style.botIcon} />
                    <Text style={Style.botText}>Account</Text>
                </TouchableOpacity>
            </View>

        </Container>
    }
}