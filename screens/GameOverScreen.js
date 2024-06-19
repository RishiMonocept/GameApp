import { View ,Text,StyleSheet} from "react-native";
import Title from "../ui/Title";
import PrimaryButton from "../ui/PrimaryButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    return(
         <View style={styles.rootContainer}>
             <Title>Game Over!</Title>
             <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
             </Text>
             <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
         </View>
    )
}
export default GameOverScreen;

const styles=StyleSheet.create({
 summaryText:{
    fontFamily:'open-sans',
    fontSize:24
 },
 highlight:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500,
 },
 rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },

})