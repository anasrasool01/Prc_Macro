import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'

const NotificationScreen = () => {
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
                        <Text style={styles.font}>Notifications</Text>
                    </View>
                </View>


                <View style={styles.start2}>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.btnText2}>ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3}>
                        <Text style={styles.btnText2}>UNREAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn4}>
                        <Text style={styles.btnText2}>ARTICLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn5}>
                        <Text style={styles.btnText2}>PODCAST</Text>
                    </TouchableOpacity>

                </View>



                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>

                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>


                <View style={styles.Card1}>
                    <View style={styles.CardText1}>
                        <Text style={styles.Text3}>New Podcast "Conversion with shin" has arrived today!</Text>
                        <View style={styles.TextBlock}>
                            <Text style={styles.Text2} >Category:</Text>
                            <Text style={styles.Text5} >Finance</Text>
                        </View>
                        <View style={styles.TextBlock}>
                            <Pressable style={styles.TikBox} checked={checked} onPress={onCheck} />
                            {/* <CheckBox title='Checkbox' checked={checked} onPress={onCheck}/> */}
                            <Text style={styles.Text4}>{checked ? 'Mark as Read' : 'Dont Mark '}</Text>
                            {/* <Text  >Finance</Text> */}
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
export default NotificationScreen;

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
    start2 : {
        marginVertical : 20,
        marginHorizontal: 10,
        justifyContent: "space-evenly",
        flexDirection: 'row',
    },
    CardText1 : {
        margin: 10,
        marginLeft : 10,
        borderWidth : 1,
        borderColor :"#EAEAEA",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        paddingBottom : "3%",
    },
    via: {
        marginLeft : "30%",
    },
    font: {
        alignContent: "center",
        fontSize: 20,
        color: "white",
    },

    btn1: {
        width: "22%",
        borderRadius: 6,
        backgroundColor: "#F01716",
    },
    btn3: {   
        marginLeft: 10,
        width: "22%",
        height: 47,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn4: {
        marginLeft: 10,
        width: "22%",
        height: 47,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btn5: {
        marginLeft: 10,
        width: "22%",
        height: 47,
        borderRadius: 6,
        backgroundColor: "#F1F1F1",
    },
    btnText2: {
        alignSelf: "center",
        fontWeight: "500",
        color: "#4A5981",
        fontSize: 12,
        marginTop: 15,
    },
    TextBlock: {
        flexDirection: "row",
    },
    Text2: {
        fontSize: 16,
        marginLeft : "3%",
        fontWeight: "500",
    },
    Text3: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
        margin : "3%",
    },
    Text4 : {
        fontSize: 17,
        fontWeight: "500",
        color: "black",
        marginStart: 5,
        margin : 12,
        color : "#F01716"
    },
    Text5 : {
        fontSize: 17,
        fontWeight: "500",
        color: "black",
        marginStart: 5,
        color : "black"
    },
    TikBox : {
        width: "6%",
        height: "60%",
        borderRadius: 4,
        borderColor : "red",
        borderWidth:1,
        backgroundColor: "#F1F1F1",
        margin:"3%",
    }
   

})