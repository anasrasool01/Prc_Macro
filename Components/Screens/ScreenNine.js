import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const ProfileInformationScreen = () => {
    const [checked, setChecked] = useState(false);

    const onCheck = () => {
        setChecked(!checked);
      };
    return (
        <ScrollView>
            <View>

                <View style={styles.start}>
                    <Pressable alert>
                        <Image source={require("../Assets/Images/BackArrowICon.png")} />
                    </Pressable>

                    <View style={styles.via}>
                        <Text style={styles.font}>Profile Information</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                    <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                        <Text style={styles.Text5} >Change Password</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Text style={styles.Text5} >Notifications</Text>
                        <Text style={styles.Text5} >Change Password</Text>
                       
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                        <Text style={styles.Text5} >Feedback</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                        <Text style={styles.Text5} >Terms & Conditions</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Image style={styles.image} source={require("../Assets/Images/FrontIcon.png")} />
                        <Text style={styles.Text5} >Privacy Policy</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.image}>
                        <Image source={require("../Assets/Images/DelIcon.png")} />
                        </Pressable>
                        <Text style={styles.Text5} >Delete Account</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.image}>
                        <Image source={require("../Assets/Images/ShutDownIcon.png")} />
                        </Pressable>
                        <Text style={styles.Text5} >Profile Information</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
export default ProfileInformationScreen;

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
 
    via: {
        marginLeft: "20%",
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
    },
    TikBox : {
        width: "6%",
        height: "60%",
        borderRadius: 4,
        borderColor : "red",
        borderWidth:1,
        backgroundColor: "#F1F1F1",
        margin:"3%",
    },
    Text4 : {
        fontSize: 17,
        fontWeight: "500",
        color: "black",
        marginStart: 5,
        margin : 12,
        color : "#F01716"
    },
})