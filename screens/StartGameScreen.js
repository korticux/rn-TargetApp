import {TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function StartGameScreen() {
    return ( 
    <View style={styles.inputContainerY}>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '72063c',
        marginHorizontal: 34,
        borderRadius: 8
    }
});