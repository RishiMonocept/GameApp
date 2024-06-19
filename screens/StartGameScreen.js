import { TextInput, View, StyleSheet, Alert,Text } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../ui/Title";


function StartGameScreen({onPickNumber}) {

    const [enteredBNumber,setEnteredNumber]=useState('')

    function numberInputHaddler(enteredText){
     setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
      setEnteredNumber('')
    }

    function confirmInputHandler(){
     const chosenNumber = parseInt(enteredBNumber);

     if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
      Alert.alert('Invalid number',
        'Number has to be number between 1 and 99.',
        [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
      )
      return;
     }
     onPickNumber(chosenNumber);
    }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <View style={styles.inputContainer}>
      <Text style={styles.instructionText}> Enter a Number</Text>
      <TextInput
       style={styles.numberInput} 
       maxLength={2}
       keyboardType="number-pad"
       autoCapitalize="none"
       autoCorrect={false} 
       onChangeText={numberInputHaddler}
       value={enteredBNumber}
       />
       <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
      <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
      <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
      </View>
    </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  instructionText:{
    color:Colors.accent500,
    fontSize:24
  },
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer:{
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1
  }
});
