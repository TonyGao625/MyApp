import { StackNavigator, TabNavigator } from 'react-navigation'
import ActivityListScreen from '../screens/ActivityListScreen'
//import ActivitySearchedScreen from '../screens/ActivitySearchedScreen'
import AccountScreen from '../screens/AccountScreen'
import MessageScreen from '../screens/MessageScreen'
import ProfileScreen from '../screens/ProfileScreen'
import React from 'react';
import ToyIcon from '../components/Icons/ToyIcon';
import BubbleChatIcon from '../components/Icons/BubbleChatIcon';
import PersonIcon from '../components/Icons/PersonIcon';
//import HeaderInput from '../containers/HeaderInput';
//import enumerator from '../lib/enumerator';
const ActivityNav = StackNavigator(
    {
        ActivityList: {
            screen: ActivityListScreen,
            navigationOptions: {
                header: null
            }
        },
        // ActivitySearched: {
        //   screen: ActivitySearchedScreen,
        //   navigationOptions: ({ navigation }) => ({
        //     title: `${enumerator.typeTitle[navigation.state.params.type]}`,
        //     headerRight: <HeaderInput type={navigation.state.params.type} />
        //   })
        // }
    }
)

const PrimaryNav = TabNavigator(
    {
        Activity: {
            screen: ActivityNav,
            navigationOptions: {
                tabBarLabel: '活动',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <ToyIcon color={tintColor} />
                    )
                },
            }
        },
        Message: {
            screen: MessageScreen,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <BubbleChatIcon color={tintColor} />
                    )
                }
            },
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({ activeTintColor }) => (
                    <PersonIcon color={activeTintColor} />
                ),
            },
        }

    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Activity',
        tabBarOptions: {
            activeTintColor: '#03A9F4',
            inactiveTintColor: '#66757f',
            indicatorStyle: {
                backgroundColor: '#03A9F4'
            },
            style: {
                backgroundColor: 'white',
            },
            showIcon: true
        }
    })

const AccountNav = StackNavigator(
    {
        // Account: {
        //     screen: AccountScreen,
        // },
        Main: {
            screen: PrimaryNav
        },
    },
    {
        headerMode: 'none'
    }
);



export default AccountNav
