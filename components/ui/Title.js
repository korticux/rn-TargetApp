import { Text, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

function Title({children}){
    return <Text style={styles.title}>Guess My Number</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderColor: Colors.accent500,
        borderWidth: 4,
        padding: 12
    }
})

export default Title;