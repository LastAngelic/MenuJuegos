import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}) {

    const {id, description} = route.params;
    const tareas = new Array(10).fill(null).map((v, i) => i +1);

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2ebf2'}}>
            {/* <Text>Descripcion: {description}</Text> */}

            <View style={styles.containerButton}>
                <Button 
                    title="Tarea 1"
                    onPress={() => navigation.push('Details',
                    {
                        id:1,
                        description: "Ir de compras",
                        color: "#81b9bf",
                    })}
                />
                <Button 
                    title="Tarea 2"
                    onPress={() => navigation.push('Details',
                    {
                        id: 2,
                        description: "Jugar",
                    })}
                />
                <Button 
                    title="Tarea 3"
                    onPress={() => navigation.push('Details', 
                    {
                        id: 3,
                        description: "Asisitir a clase",
                    })}
                />
            </View>
            
            <Button
            title="Inicio"
            onPress={() => navigation.popToTop()}
            />

            <View style={styles.container}>
            {/* <StatusBar hidden={true}/> */}
            {
                tareas.map( v => (
                    <Box key = {v}>#{v}</Box>
                ))
            }
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#e5ffff',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;