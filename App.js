import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={{backgroundColor: '#d8f6fe'}}>
      <SafeAreaView style={styles.container}>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 3, width: '100%'}}>
          <Text style={{ fontSize: 20, padding: 10, alignSelf: 'center', fontFamily: 'Rockwell' }}>SNAP EATING ACCOUNT</Text>
        </View>
        <ScrollView style={{width: '100%', backgroundColor: '#e4fcfc'}}>
          <View style={{width: '70%', alignSelf: 'center'}}>
            {/* TODO (part 1): update these props with your favorite food item */}
            <MenuItem name={'Cookies (5)'} price={100} imageSource={{uri: 'https://image.freepik.com/free-photo/chocolate-chip-cookies-white-background_146936-712.jpg'}} />
            <MenuItem name={'Milk (Liter)'} price={250} imageSource={{uri: 'https://img1.cgtrader.com/items/717115/a69ed5d165/milk-carton-3d-model-obj-mtl-fbx-blend.png'}} />
            <MenuItem name={'Lactase (32)'} price={250} imageSource={{uri: 'https://www.kroger.com/product/images/large/front/0030045091032'}} />
          </View>
        </ScrollView>
        {/* TODO (part 2): add another MenuItem! */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
