/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
    ScrollView
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>USERS</Text>
    </Layout>
);

const OrdersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ORDERS</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='USERS'/>
        <BottomNavigationTab title='ORDERS'/>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Users' component={UsersScreen}/>
        <Screen name='Orders' component={OrdersScreen}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);


import {getCards} from './http'

import Card from './src/Card';

const App = () => {
    const [index, setIndex] = React.useState(0);
    const isDarkMode = useColorScheme() === 'dark';
    // const cards = getCards()

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const appStyle = StyleSheet.create({
        BodyStyle: {
            width: '100%',
            height: '100%',
        },
        TabItemStyle: {
            width: '100%',
            height: '90%'
        },
        TabStyle: {
            width: '100%',
            height: '10%'
        }
    })

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <SafeAreaView style={backgroundStyle}>
              <AppNavigator />
            </SafeAreaView>
        </ApplicationProvider>
    );
};

export default App;
