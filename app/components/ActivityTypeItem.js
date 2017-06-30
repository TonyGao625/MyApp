import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import FullBackImage from './FullBackImage';
import Styles from './Styles/ActivityTypeItem';
import enumerator from '../lib/enumerator';

class ActivityTypeItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <TouchableHighlight
                style={Styles.flex1}
                underlayColor='#ccc'
                key={item.key}
                onPress={this.props.onPress}>
                <View style={Styles.flex1}>
                    <FullBackImage
                        viewStyle={Styles.flex1}
                        source={item.source}
                        imageStyle={Styles.imageStyle}>
                        <Text style={Styles.fontStyle}>{enumerator.typeTitle[item.type]}</Text>
                    </FullBackImage>
                </View>

            </TouchableHighlight>
        );
    }
}

export default ActivityTypeItem;