import {TextInput, 
    KeyboardAvoidingView, 
    View, StyleSheet, 
    Alert, 
    Text,
    useWindowDimensions, 
    Dimensions,
    ScrollView} 
    from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState} from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }] 
                );
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30: 100;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View styles={[styles.rootContainer, { marginTop: marginTopDistance }]}>   
             <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                style={styles.numberinput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}> 
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View> 
    </KeyboardAvoidingView>
    </ScrollView>
    );
}

//const deviceHeight = Dimensions.get('window').height;

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        //marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    screen: {
        flex: 1,
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
    numberinput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});