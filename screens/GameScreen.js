import {View,Text ,StyleSheet ,Alert,FlatList} from 'react-native';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../ui/PrimaryButton';

function generateRandomBetween(min, max, exclude){
    const randNum=Math.floor(Math.random()* (max-min))+min;
    
    if(randNum === exclude){
        return generateRandomBetween(min,max,exclude);

    }
    else{
        return randNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber,onGameOver}){

    const initialGuess = generateRandomBetween(1,100,userNumber );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds]= useState([initialGuess])

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
          minBoundary=1;
          maxBoundary=100;
    },[])
     
    function nextGuessHandler(direction){

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!",'You know that this is wrong...',[{text:'Sorry!',style:'cancel'}])
           return;
        }

        if(direction === 'lower'){
            maxBoundary=currentGuess;
        //    const newRndNumber= generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        }
        else{
            minBoundary=currentGuess+1;
            // const newRndNumber= generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        }
        const newRndNumber= generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds,])
    }


    return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
            </View>
           <FlatList data={guessRounds}
            renderItem={(itemData)=> <Text>{itemData.item}</Text>} 
            keyExtractor={(item)=>item}/>
        </View>
        
        </View>
)
}
export default GameScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:28
  }
  
})
