import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Icon, Text, Tabs, Tab, Separator, DatePicker, View, Card, Input, InputGroup, Left, Right, Body, List, ListItem } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/SignIn/Style'

var screen = Dimensions.get('window');
export default class extends React.Component {

    render() {
        return <Container>

            <StatusBar translucent hidden backgroundColor="rgba(0,0,0,1)" barStyle="light-content" />
            <Content contentContainerStyle={Style.layout}>
                
                <ImageBackground source={require('@Asset/images/bg.png')} style={Styles.bgImg} >
                    <Image source={require('@Asset/images/logo.png')} style={Styles.logo} />

                    <View style={Styles.form}>
                        <TextInput style={Styles.formInput} placeholder="EMAIL ADDRESS OR MOBILE NUMBER" placeholderTextColor="#FFF" /> 
                        <TextInput style={Styles.formInput} placeholder="PASSWORD" placeholderTextColor="#FFF" />
                        
                        <TouchableOpacity style={Styles.forgotBtn}>
                            <Text style={Styles.forgotBtnText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.formBtn} onPress={() => { 
                            NavigationService.navigate('PublicHome') 
                        }}>
                            <Text style={Styles.formBtnText}>{'Login!'.toUpperCase()}</Text>
                        </TouchableOpacity>
                        
                        <View style={Styles.formCol}>
                            <Text style={Styles.smnHeader}>{'Or Connect with:'.toUpperCase()}</Text>
                        </View>

                        <View style={Styles.smn}>
                            <TouchableOpacity style={Styles.smnFacebook}>
                                <Icon type="FontAwesome" name="facebook" style={Styles.smnIcon} />
                                <Text style={Styles.smnText}>{'Facebook'.toUpperCase()}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.smnGoogle}>
                                <Icon type="FontAwesome" name="google-plus" style={Styles.smnIcon} />
                                <Text style={Styles.smnText}>{'Google+'.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

            </Content>

        </Container>
    }
}
