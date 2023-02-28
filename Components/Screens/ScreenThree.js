import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'

const NewsFeed = () => {
    return (
        <ScrollView>
            <View>
                <View style={[styles.start]}>

                    <View >
                        <Image source={require("../Assets/Images/SettingIcon.png")} />
                    </View>

                    <View style={[styles.via, styles.font]}>
                        <Text style={[styles.via, styles.font]}>Home</Text>
                    </View>

                    <View style={styles.via}>
                        <Image source={require("../Assets/Images/BellIcon.png")} onPress={() => { alert('Home') }} />
                    </View>
                </View>

                <View style={styles.start2}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText2}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText2}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText2}>Submit</Text>
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
        marginLeft : 20,
        justifyContent: 'space-around',
        marginRight : 20,
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
        borderWidth : 2,
        width: 70,
        height: 50,
        marginVertical: 10,
        borderRadius: 8,
    },
    btnText: {
        color: "white",
        alignSelf: "center",
        marginTop: 15,
        fontWeight: "500",
    },
    btnText2: {
        alignSelf: "center",
        marginTop: 15,
        fontWeight: "500",
    },
})