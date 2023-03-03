import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const ProfileInformationScreen = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    const onCheck = () => {
        setChecked(!checked);
    };
    return (
        <ScrollView>
            <View>

                <View style={styles.start}>
                    <Pressable style={styles.Card1} onPress={() => navigation.navigate('SettingsScreen')}>
                        <Image source={require("../Assets/Images/BackArrowICon.png")} />
                    </Pressable>

                    <View style={styles.via}>
                        <Text style={styles.font}>Profile Information</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock1}>
                        <Text style={styles.Text1} >Preferred Interest</Text>
                        <Pressable style={styles.btn} >
                            <Text style={styles.btnt}>EDIT</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>



                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
                    </View>
                </View>



                <View style={styles.Card1}>
                    <View style={styles.TextBlock}>
                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>

                        <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                        <Text style={styles.Text5} >Intrest Name</Text>
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
    Text1: {
        fontSize: 25,
        fontWeight: "500",
        color: "black",
        margin: "4%",
        color: "#4A5981",
        marginTop: 50,
        marginBottom: 50,
    },
    image: {
        alignSelf: "center",
        marginTop: "3%",
        marginRight: "3%",
    },
    TextBlock: {
        flexDirection: "row",
    },
    TextBlock1: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    TikBox: {
        width: "6%",
        height: "60%",
        borderRadius: 4,
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "#F1F1F1",
        margin: "3%",
    },
    Text4: {
        fontSize: 17,
        fontWeight: "500",
        color: "black",
        marginStart: 5,
        margin: 12,
        color: "#F01716"
    },
    btn: {
        margin: 10,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "#EAEAEA",
        borderRadius: 6,
        backgroundColor: "#F01716",
        width: "20%",
        height: "40%"
    },
    btnt: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        marginTop: "15%"
    },
})