import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}) {
    const {id, description} = route.params;

    return (
        <View style = {{flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
            <Text style = {styles.title}>Details Screen</Text>
            <Text style = {styles.text}>Task: {id}</Text>
            <Text style = {styles.text}>Description: {description}</Text>

            <View style = {styles.containerButton}> 
                <Button 
                    color="gold"
                    title="Back" 
                    onPress={() => navigation.goBack()} 
                />

                <Button 
                    color="gold"
                    title="Home" 
                    onPress={() => navigation.popToTop()} 
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'lightyellow',

        margin: 20,
        padding: 5,

        width: 400,
        height: 100,
    },

    title: {
        fontSize: 50,
    },

    text: {
        fontSize: 25,
    }
})

export default DetailScreen;