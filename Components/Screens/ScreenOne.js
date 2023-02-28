import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const SignIN = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image source={require("../Assets/Images/BackgroundImage.png")} />
                </View>
                <View style={styles.Logo}>
                    <Image source={require("../Assets/Images/LogoPRC.png")} />
                </View>
                <View style={styles.Box}>
                    <Text style={styles.Heading}>Sign In</Text>

                    <View>
                        <View style={styles.Input}>
                            <Image style={styles.ImageOne} source={require("../Assets/Images/MessageIcon.png")} />
                            <TextInput style={styles.Textinput} placeholder="jerry@walla.com" />
                            <Image style={styles.ImageTwo} source={require("../Assets/Images/checkIcon.png")} />
                        </View>
                    </View>

                    <View>
                        <View style={styles.Input}>
                            <Image style={styles.ImageOne} source={require("../Assets/Images/Vector.png")} />
                            <TextInput style={styles.Textinput} placeholder= "Enter Password  " />
                            <Image style={styles.ImageTwo} source={require("../Assets/Images/EyeIcon.png")} />
                        </View>
                    </View>


                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={styles.underline}></View>
                    <View style={styles.DontRemember}>
                        <Text style={styles.DontRememberT}>Don't Remember Password?</Text>
                    </View>
                    <View style={styles.Forget}>
                        <Text style={styles.ForgetT}>Forget Password?</Text>
                    </View>

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
        alignItems: 'center',
        height : 1,
    },
    Logo: {
        marginVertical: 110,
        alignItems: "center",
    },
    Box: {
        alignSelf: "center",
        width: 302,
        height: 415,
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
    btnText: {
        color: "white",
        alignSelf: "center",
        marginTop: 15,
        fontWeight: "500",
    },
    underline: {
        width: 130,
        alignSelf: "center",
        marginTop: 20,
        borderBottomColor: "grey",
        borderWidth: 0.3,
    },
    DontRemember: {
        alignSelf: "center",
        marginTop: 20,
    },
    DontRememberT: {
        fontWeight: "700"
    },
    Forget: {
        alignSelf: "center",
    },
    ForgetT: {
        color: "red",
        fontWeight: "700"
    },
});
export default SignIN;