import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

class ToyIcon extends Component {
    render() {
        return (
            <Svg height="24" viewBox="0 0 24 24" width="24" >
                <Path fill={this.props.color} d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z" />
                <Path d="M0 0h24v24H0z" fill="none" />
            </Svg>
        );
    }
}

export default ToyIcon;