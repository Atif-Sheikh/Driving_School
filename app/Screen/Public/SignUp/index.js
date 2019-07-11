import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Icon, Text, Tabs, Tab, Separator, DatePicker, View, Card, Input, InputGroup, Left, Right, Body, List, ListItem } from 'native-base'
import Button from 'react-native-button'
import Modal from 'react-native-modalbox'
import Slider from 'react-native-slider'


import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignUp/Style'

var screen = Dimensions.get('window');
export default class extends React.Component {

    render() {
        return <Container>

            <StatusBar translucent hidden backgroundColor="rgba(0,0,0,1)" barStyle="light-content" />
            <Content contentContainerStyle={Style.layout}>
                
                <ImageBackground source={require('@Asset/images/bg.png')} style={Styles.bgImg} >
                    <Image source={require('@Asset/images/logo.png')} style={Styles.logo} />

                    <View style={Styles.form}>
                        <View style={Styles.formCol}>
                            <TextInput style={Styles.formInput} placeholder="FIRST NAME" placeholderTextColor="#FFF" />   
                            <TextInput style={Styles.formInput} placeholder="LAST NAME"  placeholderTextColor="#FFF" /> 
                        </View>
                        <TextInput style={Styles.formInput} placeholder="EMAIL ADDRESS" placeholderTextColor="#FFF" /> 
                        <TextInput style={Styles.formInput} placeholder="MOBILE NUMBER" placeholderTextColor="#FFF" />
                        <TouchableOpacity style={Styles.formBtn} onPress={() => { 
                            NavigationService.navigate('PublicSignIn') 
                        }}>
                            <Text style={Styles.formBtnText}>{'Sign Up!'.toUpperCase()}</Text>
                        </TouchableOpacity>
                        <View style={Styles.formCol}>
                            <Text style={Styles.signText}>Already have an account ?</Text>
                            <TouchableOpacity style={Styles.signBtn} onPress={() => { 
                                NavigationService.navigate('PublicSignIn') 
                            }}>
                                <Text style={Styles.signBtnText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

            </Content>

        </Container>
    }
}
