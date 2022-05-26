import { Text, StyleSheet} from 'react-native';



function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        padding: 12,
        marginTop: 120,
        maxWidth: '80%',
        width: 300,
        marginLeft: 50,
    }
})

export default Title;