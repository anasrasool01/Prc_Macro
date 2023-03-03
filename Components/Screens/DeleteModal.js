import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DeleteAccountModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
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
                        <Image style={styles.image} source={require("../Assets/Images/BinDelIcon.png")} />

                        <Text style={styles.modalheadingText}>Delete Account?</Text>
                        <Text style={styles.modalsmallText}>Are you Sure,You want to Delete thi account?</Text>


                        <View style={styles.btnS}>
                            <TouchableOpacity style={styles.btn2} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btnText2}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.btnText}>Yes,Delete</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default DeleteAccountModal;

const styles = StyleSheet.create({
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
        color: '#4A5981',
        fontStyle: "normal",
        fontWeight: '600',
        fontSize: 25,
        textAlign: "center"
    },
    modalsmallText: {
        fontWeight: "600",
        fontSize: 16,
        marginTop: "8%",
        textAlign: "center",
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
    btnS: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom : 20,
    },
    btn: {
        marginTop: "25%",
        backgroundColor: "#F01716",
        width: "50%",
        height: "48%",
        borderRadius: 8,
    },
    btn2: {
        marginTop: "25%",
        // backgroundColor: "#F01716",
        borderWidth: 1,
        borderColor: "#F01716",
        width: "50%",
        height: "48%",
        borderRadius: 8,
        marginRight: 20,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "700",
        marginTop: 15,
    },
    btnText2: {
        color: "#F01716",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "700",
        marginTop: 15,
    },
    image: {
        alignSelf: "center",
        marginVertical: 30,
    },
})
