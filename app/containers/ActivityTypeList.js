import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeItem from '../components/ActivityTypeItem';

class ActivityTypeList extends Component {

    _onPress = (type) => {
        this.props.navigate('ActivitySearched', { type: type });
    }

    render() {
        const data = [
            {
                source: require('../assets/default/food.jpg'),
                type: 'food'
            },
            {
                source: require('../assets/default/in-out-activity.jpg'),
                type: 'party'
            },
            {
                source: require('../assets/default/movie.jpg'),
                type: 'movie'
            },
            {
                source: require('../assets/default/trip.jpg'),
                type: 'travel'
            }
        ]
        return (
            <View style={{ flex: 1 }}>
                {
                    data.map((item, key) => {
                        return (
                            <ActivityTypeItem
                                item={item}
                                key={key}
                                onPress={() => this._onPress(item.type)} />
                        )
                    })
                }
            </View>

        );
    }
}

export default ActivityTypeList;