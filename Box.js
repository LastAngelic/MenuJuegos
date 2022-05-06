import React from 'react';
// import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './styles';

function Box ({children}) {

    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;