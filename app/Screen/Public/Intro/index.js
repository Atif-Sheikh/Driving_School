import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Icon, Text, Tabs, Tab, Separator, DatePicker, View, Card, Input, InputGroup, Left, Right, Body, List, ListItem } from 'native-base'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Intro/Style'

var screen = Dimensions.get('window');
export default class extends React.Component {

    render() {
        return <Container>

            <StatusBar translucent hidden backgroundColor="rgba(0,0,0,1)" barStyle="light-content" />
            <Content contentContainerStyle={Style.layout}>
                
                <ImageBackground source={require('@Asset/images/bg.png')} style={Styles.bgImg} >
                    <TouchableOpacity onPress={() => { 
                        NavigationService.navigate('PublicSignUp') 
                    }}>
                        <Image source={require('@Asset/images/logo.png')} style={Styles.logo} />
                    </TouchableOpacity>
                </ImageBackground>

            </Content>

        </Container>
    }
}
