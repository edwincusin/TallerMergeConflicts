import { View, Text, StyleSheet, Button } from 'react-native'

export const Product = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>Bienvenidos a mi tienda, soy Joanthan</Text>
        <Text style={styles.product1}>Manzanas</Text>
        <Text style={styles.product2}>Peras</Text>
        <Text style={styles.product3}>Naranjas</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('WelcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0ffff', // Color de fondo cambiado
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    product1: {
        color: 'red',
        fontSize: 16
    },
    product2: {
        color: 'green',
        fontSize: 16
    },
    product3: {
        color: 'orange',
        fontSize: 16
    }
});