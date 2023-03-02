import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
            <View>

                <View style={styles.start}>
                    <Pressable alert>
                        <Image source={require("../Assets/Images/BackArrowICon.png")} />
                    </Pressable>

                    <View style={styles.via}>
                        <Text style={styles.font}>Settings</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Profile Information</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Change Password</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </View>


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

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Feedback</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Terms & Conditions</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Privacy Policy</Text>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Delete Account</Text>
                        <Pressable style={styles.image}>
                        <Image source={require("../Assets/Images/DelIcon.png")} />
                        </Pressable>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Profile Information</Text>
                        <Pressable style={styles.image}>
                        <Image source={require("../Assets/Images/ShutDownIcon.png")} />
                        </Pressable>
                    </View>
                </View>

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
    }
})