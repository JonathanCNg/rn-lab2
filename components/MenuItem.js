import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from "react-native";

function MenuItem(props) {
  // Keep track of quantity
  const [quantity, setQuantity] = useState(0);
  const [isMaxQuantity, setIsMaxQuantity] = useState(quantity >= props.maxQuantity);
  // const [isSpecialInstructions, toggleSpecialInstructionTo] = useState(false);
  // const [specialInstructions, setSpecialInstructions] = useState("");
  // TODO (part 3): add state for special instructions text
  // Return JSX to render

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          source={props.imageSource}
          style={styles.photo}
        />
      </View>
      <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
      <Text style={styles.detail}>Price: ${props.price}</Text>
      <Text style={{color: (quantity >= props.maxQuantity) ? 'red' : "black"}}>Quantity: {quantity} {(quantity >= props.maxQuantity) ? "(Max)" : ""}</Text>
      <View style={styles.buttonsContainer}>
        <Button 
          disabled={(quantity == 0)}
          title="-"
          onPress={() => {
            console.log("minus pressed");
            // TODO (part 2): decrease quantity by 1
            // watch out for negative quantity
              setQuantity(quantity-1)
          }}
        />
        <Button
          disabled={(quantity >= props.maxQuantity)}
          title="+"
          onPress={() => {
            console.log("plus pressed");
            // TODO (part 2): increase quantity by 1
            setQuantity(quantity+1)
          }}
        />
      </View>
      <Text style={styles.detail}>Total Cost: ${(props.price*quantity).toFixed(2)}</Text>
      <Text style={{paddingTop: 20}}>Special Instructions:</Text>
      {/* <Text style={{height:20}}>{isSpecialInstructions ? specialInstructions : ""}</Text> */}
      <TextInput style={styles.detail}
        useRef={input => {this.textInput = input}}
        // clearButtonMode="always"
        textAlign={'left'}
        placeholder="Type instructions here"
        onSubmitEditing={({ nativeEvent, currentTarget }) => {
          console.log(nativeEvent.text);
          // TODO (part 3): Update special instructions text
          // toggleSpecialInstructionTo(true);
          // setSpecialInstructions(nativeEvent.text)
          // currentTarget.clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    // rowGap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 20,
    borderRadius: 30,
  },
  photoContainer: {
    padding: 5,
  },
  photo: {
    resizeMode: "cover",
    width: "75%",
    // aspectRatio: 1,
    padding: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
  detail: {
    paddingTop: 5,
  }
});

export default MenuItem;
