import { SafeAreaView, StyleSheet, Text, View,Modal,Pressable, } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/color';
import LottieView from 'lottie-react-native';
const Loader = ({loading}) => {
  return (
    <SafeAreaView backgroundColor={Colors?.white} flex={1}>
     <Modal
        animationType="slide"
        visible={loading}
        statusBarTranslucent
        transparent>
        <Pressable
          style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32, backgroundColor: "#0005" }}>
          <View style={styles.modalView}>
            <LottieView
            source={require('../../assets/Animations/loading.json')}
            autoPlay
            loop
            style={{height:100,width:100}}
            />
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  )
}

export default Loader
    const styles = StyleSheet.create({
        modalView: {
          margin: 20,
          backgroundColor: Colors?.white,
          borderRadius: 20,
          alignItems: 'center',
          shadowColor: Colors?.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
      })
