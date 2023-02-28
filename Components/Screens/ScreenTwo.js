import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const ForgetPassword = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                
                <View style={styles.background}>
                    <Image source={require("../Assets/Images/BackgroundImage.png")} />
                </View>
                <View style={styles.Back}>
                    <Image source={require("../Assets/Images/BackIcon.png")} />
                    <Text style={styles.BackText}>Back</Text>
                </View>
                <View style={styles.Logo}>
                    <Image source={require("../Assets/Images/LogoPRC.png")} />
                </View>
                <View style={styles.Box}>
                    <Text style={styles.Heading}>Forget Password</Text>

                    <View style={styles.DontRemember}>
                        <Text style={styles.DontRememberT}>To reset your password please provide your email</Text>
                    </View>

                    <View>
                        <View style={styles.Input}>
                            <Image style={styles.ImageOne} source={require("../Assets/Images/MessageIcon.png")} />
                            <TextInput style={styles.Textinput} placeholder="jerry@walla.com" />
                            <Image style={styles.ImageTwo} source={require("../Assets/Images/checkIcon.png")} />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background :{
        height : 1,
        alignItems: 'center',
    },
    Back :{
        flexDirection : "row",
        marginTop : 20,
        marginLeft: 40
    },
    Logo: {
        marginVertical: 110,
        alignItems: "center",
    },
    Box: {
        alignSelf: "center",
        width: 302,
        height: 315,
        bottom: 50,
        borderRadius: 5,
        backgroundColor: "white",
    },
    Heading: {
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 20,
        fontWeight : "700",
    },
    Input: {
        flexDirection: "row",
        borderWidth: 1,
        width: 270,
        alignSelf: "center",
        marginVertical: 10,
    },
    ImageOne: {
        marginLeft: 10,
        marginTop: 20,
    },
    ImageTwo: {
        marginTop: 20,
        marginLeft: 95,
    },
    Textinput: {
        marginTop: 2,
        marginLeft: 10,
    },
    btn: {
        backgroundColor: "red",
        width: 150,
        height: 50,
        alignSelf: "center",
        marginVertical: 30,
        borderRadius: 8,
    },
    BackText : {
        color: "white",
        alignSelf: "center",
        marginTop: -3,
        marginLeft : 10,
        fontWeight: "500",
    },
    btnText: {
        color: "white",
        alignSelf: "center",
        marginTop: 15,
        fontWeight: "500",
    },
    DontRemember: {
        alignSelf: "center",
        marginBottom: 30,
    },
    DontRememberT: {
        textAlign : "center",
        fontWeight: "700",
        width : 250,
    },
});
export default ForgetPassword;