import React, { useState } from 'react';
import { View, Text, Switch, Modal, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const SettingsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Text style={styles.modalheadingText}>Change Password</Text>
                        <Text style={styles.modalsmallText}>CURRENT PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>

                        <Text style={styles.modalsmallText}>NEW PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>


                        <Text style={styles.modalsmallText}>REPEAT PASSWORD</Text>
                        <View style={styles.InputModal}>
                            <TextInput style={styles.TextInputModal} placeholder='Type Password..' />
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.btnText}>Change Password</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <View>

                <View style={styles.start}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewsFeed')}>
                        <Image source={require("../Assets/Images/BackArrowICon.png")} />
                    </TouchableOpacity>

                    <View style={styles.via}>
                        <Text style={styles.font}>Settings</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('ProfileInformationScreen')}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Profile Information</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Card1} onPress={() => setModalVisible(true)}  >
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Change Password</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </TouchableOpacity>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Notifications</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#F01716" }}
                            thumbColor={isEnabled ? "#F01716" : "#F01716"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('FeedBackModal')} >
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Feedback</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('TermsConditionsScreen')} >
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Terms & Conditions</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('PrivacyPolicyScreen')} >
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Privacy Policy</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('DeleteAccountModal')}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Delete Account</Text>
                        <Pressable style={styles.image}>
                            <Image source={require("../Assets/Images/DelIcon.png")} />
                        </Pressable>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Card1} onPress={() => navigation.navigate('NewsFeed')}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Profile Information</Text>
                        <Pressable style={styles.image}>
                            <Image source={require("../Assets/Images/ShutDownIcon.png")} />
                        </Pressable>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
export default SettingsScreen;

const styles = StyleSheet.create({
    start: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "black",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        width: "100%",
        padding: 20,
    },
    Card1: {
        margin: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#EAEAEA",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        paddingTop: "3%",
        paddingBottom: "5%",
    },
    via: {
        marginLeft: "30%",
    },
    font: {
        alignContent: "center",
        fontSize: 20,
        color: "white",
    },
    Text5: {
        fontSize: 17,
        fontWeight: "500",
        color: "black",
        marginTop: "3%",
        marginStart: "4%",
        color: "black",
    },
    image: {
        alignSelf: "center",
        marginTop: "3%",
        marginRight: "3%",
    },
    TextBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },





    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        width: "90%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalheadingText: {
        marginBottom: 25,
        color: '#4A5981',
        fontStyle: "normal",
        fontWeight: '700',
        fontSize: 25,
    },
    modalsmallText: {
        color: '#4A5981',
        fontWeight: "500",
        fontSize: 16,
        marginTop: "8%"
    },
    TextInputModal: {
        width: 310,
        fontSize: 17,
        marginLeft: "3%",
        fontWeight: '500',
    },
    InputModal: {
        marginTop: "5%",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#F2F2F2',
        backgroundColor: '#F2F2F2',
    },
    btn: {
        marginTop: "25%",
        backgroundColor: "#F01716",
        width: "83%",
        height: "12%",
        borderRadius: 8,
        alignSelf: "center",
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "700",
        marginTop: 15,
    },
})