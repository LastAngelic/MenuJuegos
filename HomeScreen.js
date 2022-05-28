import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                color="gold"
                title="Go To Menu" 
                onPress={() => navigation.navigate('Menu', {
                    id: 1, 
                    description: 'Aqui estan todas las tareas',
                })} 
            />
            
        </View>
    );
}

export default HomeScreen;