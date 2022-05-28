import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Box from './Box';
import Column from './Column';
import Row from './Row';

function MenuScreen({route, navigation}) {
    const {id, description} = route.params;

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 1.0)'}}>
            
            <Column>
                <Row>
                    <Box>Juego #1
                        <Button 
                            color="gold"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 1, 
                                description: 'Guess the Number',
                            })} 
                        />
                    </Box>
                    <Box>Juego #2
                        <Button 
                            color="gold"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 2, 
                                description: 'Juego #2',
                            })} 
                        />
                    </Box>
                    
                </Row>

                <Row>
                    <Box>Juego #3
                        <Button 
                            color="gold"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 1, 
                                description: 'Desayunar',
                            })} 
                        />
                    </Box>
                    <Box>Juego #4
                        <Button 
                            color="gold"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 2, 
                                description: 'Lavarse los dientes',
                            })} 
                        />
                    </Box>
                    
                </Row>

            </Column>

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
})

export default MenuScreen;