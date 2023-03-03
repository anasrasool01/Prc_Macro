import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const NewsFeed = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                <View style={[styles.start]}>

                    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} >
                        <Image source={require("../Assets/Images/SettingIcon.png")} />
                    </TouchableOpacity>

                    <View style={[styles.via, styles.font]}>
                        <Text style={[styles.via, styles.font]}>Home</Text>
                    </View>

                    <TouchableOpacity style={styles.via} onPress={() => navigation.navigate('NotificationScreen')}>
                        <Image source={require("../Assets/Images/BellIcon.png")} onPress={() => { alert('Home') }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.start2}>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('NewsFeed')}>
                        <Image style={styles.image} source={require("../Assets/Images/HomeIcon.png")} />
                        <Text style={styles.btnText2}>HOME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3} onPress={() => navigation.navigate('FavouriteScreen')}>
                        <Image style={styles.image} source={require("../Assets/Images/HeartIcon.png")} />
                        <Text style={styles.btnText2}>FAVOURITE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn4} onPress={() => navigation.navigate('PodCastScreen')}>
                        <Image style={styles.image} source={require("../Assets/Images/MicrophoneIcon.png")} />
                        <Text style={styles.btnText3}>PADCAST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn5} onPress={() => navigation.navigate('ClintCallsScreen')}>
                        <Image style={styles.image} source={require("../Assets/Images/CallIcon.png")} />
                        <Text style={styles.btnText2}>CLINT CALLS</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.underLine}></View>



                <View style={styles.start2}>
                    <TouchableOpacity style={styles.btn6}>
                        <Image style={styles.image2} source={require("../Assets/Images/CalenderIcon.png")} />
                        <Text style={styles.btnText2}>Mar 14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn7}>
                        <TextInput style={styles.btnText2} placeholder="Search..." />
                        <Image style={styles.image2} source={require("../Assets/Images/SearchIcon.png")} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btn8}>
                        <Image style={styles.image2} source={require("../Assets/Images/SetIcon.png")} />
                    </TouchableOpacity>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>

                <View >
                    <View style={styles.Header} >
                        <Image style={styles.image3} source={require("../Assets/Images/PRCcardIcon.png")} />
                        <Image style={styles.image3} source={require("../Assets/Images/HeartRedIcon.png")} />
                    </View>

                    <View style={styles.Body} >
                        <Text style={styles.Text1} >China 2020 RMB Outlook_Jan 2020</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text3} >Finance</Text>
                        </View>
                        <Text style={styles.Text4} >Political and cyclical Factors Publishing For Stronger RMB</Text>
                        <Text style={styles.Text5} >March 05,2020</Text>
                    </View>
                </View>


                <View style={styles.End}>
                    <TouchableOpacity style={styles.btn9}>
                        <Image style={styles.image5} source={require("../Assets/Images/BackArrowIcon.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn10}>
                        <Text style={styles.btnText2}> Page 1</Text>
                        <Image style={styles.image2} source={require("../Assets/Images/DownArrowIcon.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn9}>
                        <Image style={styles.image4} source={require("../Assets/Images/BackArrowIcon.png")} />
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    )
}
export default NewsFeed;

const styles = StyleSheet.create({
    start: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        color: 'black',
    },
    start2: {
        alignItems: 'center',
        alignSelf: "center",
        marginHorizontal: 10,
        justifyContent: "space-evenly",
        marginRight: 20,
        flexDirection: 'row',
        color: 'black',
    },
    End : {
        alignItems: 'center',
        alignSelf: "center",
        marginHorizontal: 10,
        marginVertical : 70,
        justifyContent: "space-evenly",
        marginRight: 20,
        flexDirection: 'row',
        color: 'black',
    },
    via: {
        margin: 5,
        color: 'black',
    },
    font: {
        fontSize: 30,
    },
    btn: {
        backgroundColor: "red",
        width: 70,
        height: 50,
        marginVertical: 10,
        borderRadius: 8,
    },
    btn2: {
        borderWidth: 2,
        width: 70,
        height: 50,
        marginVertical: 10,
        borderRadius: 8,
    },

    btnText2: {
        alignSelf: "center",
        fontWeight: "500",
        color: "#4A5981",
        fontSize : 10,
        marginTop : 7,
    },
    btnText3 : {
        alignSelf: "center",
        fontWeight: "500",
        color: "#4A5981",
        fontSize : 10,
    },
    btn1: {
        width: "25%",
        height: 47,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F01716",

    },
    btn3: {
        marginLeft: 10,
        width: "25%",
        height: 47,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn4: {
        marginLeft: 10,
        width: "25%",
        height: 47,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn5: {
        marginLeft: 10,
        width: "25%",
        height: 47,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn6: {
        flexDirection: "row",
        width: "23%",
        height: 43,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn7: {
        marginLeft: 10,
        flexDirection: "row",
        width: "67%",
        height: 43,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
        justifyContent: "space-between",
    },
    btn8: {
        marginLeft: 10,
        flexDirection: "row",
        width: "10%",
        height: 43,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn9 : {
        marginLeft: 10,
        flexDirection: "row",
        width: "15%",
        height: 53,
        borderWidth: 1,
        borderRadius: 6,
    },
    btn10: {
        marginLeft: 10,
        flexDirection: "row",
        width: "50%",
        height: 53,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
        justifyContent: "space-between",
    },
    image: {
        alignSelf: "center",
        marginTop: 10,
    },
    image1: {
        alignSelf: "center",
        marginTop: 1,
    },
    image2 : {
        alignSelf: "center",
        alignContent : "center",
        marginHorizontal :5,
    },
    image3 : {
        alignSelf: "center",
        alignContent : "center",
        marginHorizontal :10,
    },
    image4 : {
        alignSelf: "center",
        marginHorizontal :"50%",
        transform: [{rotate: '180deg'}],
    },
    image5 : {
        alignSelf: "center",
        marginHorizontal :"50%",
    },
    underLine: {
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 55,
        borderColor: "#DCDCDC",
    },
    Header: {
        backgroundColor: "black",
        width: "95%",
        alignSelf: "center",
        marginTop: 30,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 58,
    },
    Body: {
        backgroundColor: "#EAEAEA",
        width: "95%",
        alignSelf: "center",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        height: 203,
    },
    TextBlock: {
        flexDirection: "row",
    },
    Text1: {
        fontSize: 16,
        margin: 20,
        fontWeight: "700",
        color: "black",
    },
    Text2: {
        fontSize: 16,
        marginStart: 20,
        fontWeight: "500",
    },
    Text3: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
    },
    Text4: {
        fontSize: 16,
        margin: 20,
        fontWeight: "500",
        color: "black",
        textAlign : "left",
    },
    Text5: {
        fontSize: 16,
        marginStart: 20,
        fontWeight: "500",
    },
})