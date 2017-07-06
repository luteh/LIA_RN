/**
 * Created by Luteh on 22/06/2017.
 */
import {StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: 20
    }
});