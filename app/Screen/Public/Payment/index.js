import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList, ToolbarAndroid } from 'react-native'
import { Container, Header, Content, Accordion, Picker, CheckBox, Button, Icon, Text, Separator, DatePicker, ListItem, View, Card, InputGroup, Label } from 'native-base'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import NavigationService from '@Service/Navigation'

import Style from '@Theme/Style'
import Styles from '@Screen/Public/Payment/Style'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
        this.renderAccordionContent = this.renderAccordionContent.bind(this)
        this.renderAccordionContentAtm = this.renderAccordionContentAtm.bind(this)
        this.renderAccordionContentDebitcard = this.renderAccordionContentDebitcard.bind(this)
        this.renderAccordionContentCreditcard = this.renderAccordionContentCreditcard.bind(this)
        this.renderAccordionContentNetbanking = this.renderAccordionContentNetbanking.bind(this)
        this.renderAccordionContentPhone = this.renderAccordionContentPhone.bind(this)
        this.renderAccordionContentWallet = this.renderAccordionContentWallet.bind(this)
        this.renderAccordionContentUpi = this.renderAccordionContentUpi.bind(this)
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
    renderAccordionContentAtm() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Card Number</Text>
                <TextInput style={Styles.cardInput} placeholder="9876 5432 1098 7654" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Cardholder's Number</Text>
                <TextInput style={Styles.cardInput} placeholder="Charles Susainathan" placeholderTextColor="#FFF" />
            </InputGroup>
            <View style={Styles.cardCol}>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>Expiry</Text>
                    <TextInput style={Styles.cardInput} placeholder="06/22" placeholderTextColor="#FFF" />
                </InputGroup>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>CVV</Text>
                    <TextInput style={Styles.cardInput} placeholder="123" placeholderTextColor="#FFF" />
                </InputGroup>
                <View style={Styles.cardCvv}>
                    <Icon name="credit-card" type="FontAwesome" style={Styles.cardCvvIcon} />
                </View>
            </View>
            <View style={Styles.cardSave}>
                <CheckBox  style={Styles.cardCheckbox} />
                <Text style={Styles.cardSaveText}>Save this card</Text>
            </View>

        </View>
    }
    renderAccordionContentDebitcard() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Card Number</Text>
                <TextInput style={Styles.cardInput} placeholder="9876 5432 1098 7654" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Cardholder's Number</Text>
                <TextInput style={Styles.cardInput} placeholder="Charles Susainathan" placeholderTextColor="#FFF" />
            </InputGroup>
            <View style={Styles.cardCol}>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>Expiry</Text>
                    <TextInput style={Styles.cardInput} placeholder="06/22" placeholderTextColor="#FFF" />
                </InputGroup>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>CVV</Text>
                    <TextInput style={Styles.cardInput} placeholder="123" placeholderTextColor="#FFF" />
                </InputGroup>
                <View style={Styles.cardCvv}>
                    <Icon name="credit-card" type="FontAwesome" style={Styles.cardCvvIcon} />
                </View>
            </View>
            <View style={Styles.cardSave}>
                <CheckBox  style={Styles.cardCheckbox} />
                <Text style={Styles.cardSaveText}>Save this card</Text>
            </View>

        </View>
    }
    renderAccordionContentCreditcard() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Card Number</Text>
                <TextInput style={Styles.cardInput} placeholder="9876 5432 1098 7654" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Cardholder's Number</Text>
                <TextInput style={Styles.cardInput} placeholder="Charles Susainathan" placeholderTextColor="#FFF" />
            </InputGroup>
            <View style={Styles.cardCol}>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>Expiry</Text>
                    <TextInput style={Styles.cardInput} placeholder="06/22" placeholderTextColor="#FFF" />
                </InputGroup>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>CVV</Text>
                    <TextInput style={Styles.cardInput} placeholder="123" placeholderTextColor="#FFF" />
                </InputGroup>
                <View style={Styles.cardCvv}>
                    <Icon name="credit-card" type="FontAwesome" style={Styles.cardCvvIcon} />
                </View>
            </View>
            <View style={Styles.cardSave}>
                <CheckBox  style={Styles.cardCheckbox} />
                <Text style={Styles.cardSaveText}>Save this card</Text>
            </View>

        </View>
    }
    renderAccordionContentNetbanking() {
        return <View style={Styles.card}>

            <View style={Styles.contactFormRow}>
                <RadioGroup
                    size={0}
                    thickness={0}
                    selectedIndex={1}
                    highlightColor='gold'
                    style={Styles.contactForm}>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://www.kulzy.com/uploads/user/1013278/creatives/images/5979167_546a2078ea298_20150818185814.jpg' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://image3.mouthshut.com/images/imagesp/925004492s.jpg' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_60/fetchdata13/images/a8/54/37/a85437b65b977a05a9ff50d55f7b37ef.jpg' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://image3.mouthshut.com/images/imagesp/925004501s.png' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://www.livechennai.com/businesslistings/News_photo/Canara-Bank15118.jpg' }} />
                    </RadioButton>
                </RadioGroup>
            </View>

            <View style={Styles.cardPickerBg}>
                <Picker style={Styles.cardPicker}>
                    <Picker.Item label="Other Banks" value="other banks" />
                    <Picker.Item label="IOB" value="iob" />
                    <Picker.Item label="HDFC" value="hdfc" />
                </Picker>
            </View>

        </View>
    }
    renderAccordionContentPhone() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>TAP on PAY and complete your paymant on PhonePe page</Text>
            </InputGroup>

        </View>
    }
    renderAccordionContentWallet() {
        return <View style={Styles.card}>

            <View style={Styles.contactFormRow}>
                <RadioGroup
                    size={0}
                    thickness={0}
                    selectedIndex={1}
                    highlightColor='gold'
                    style={Styles.contactForm}>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://img.etimg.com/thumb/msid-65556791,width-300,imgsize-61768,resizemode-4/freecharge.jpg' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b360f8819f3ef7972bfeba2ba708b8a2/mobikwik-logo-large.jpg?627430' }} />
                    </RadioButton>
                    <RadioButton>
                        <Image style={{ width: 64, height: 50 }}
                            source={{ uri: 'https://pbs.twimg.com/profile_images/957100516093259776/FWQndDVb_400x400.jpg' }} />
                    </RadioButton>
                </RadioGroup>
            </View>

        </View>
    }
    renderAccordionContentUpi() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Please enter your VPA and TAP on PAY.You need to approve the request on your UPI App to complete the payment.</Text>
            </InputGroup>

        </View>
    }
    render() {

        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />

                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent onPress={() => {
                            NavigationService.navigate('PublicBooking')
                        }}>
                            <Icon type="Feather" name="arrow-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleText}>{'STEP 2 - Payment Gateway'.toUpperCase()}</Text>
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
                                type: 'atm',
                                title: 'Debit Card (ATM Pin)',
                            },
                            {
                                type: 'debitcard',
                                title: 'Debit Card'
                            },
                            {
                                type: 'creditcard',
                                title: 'Credit Card'
                            },
                            {
                                type: 'netbanking',
                                title: 'Net Banking'
                            },
                            {
                                type: 'phone',
                                title: 'Phone'
                            },
                            {
                                type: 'wallet',
                                title: 'Wallet'
                            },
                            {
                                type: 'upi',
                                title: 'UPI'
                            }
                        ]}
                        expanded={0}
                        renderHeader={this.renderAccordionHeader}
                        renderContent={this.renderAccordionContent}
                    />
                </View>


                <TouchableOpacity style={Styles.formBtn} onPress={() => {
                    NavigationService.navigate('PublicPaymentConfirm')
                }}>
                    <Text style={Styles.formBtnText}>{'Pay Now'.toUpperCase()}</Text>
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