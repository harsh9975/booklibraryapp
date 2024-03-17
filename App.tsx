/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DetailsHeader,
  Header,
  HomeHeader,
  ListHeader,
} from './components/Header/Header';
import {AnimatedBootSplash} from './screens/AnimatedBootSplash';
import {BookDetailScreen} from './screens/BookDetailScreen/BookDetailScreen';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {ListBooksScreen} from './screens/ListBooksScreen/ListBooksScreen';
import {SearchScreen} from './screens/SearchScreen/SeachScreen';
import {BookProvider} from './context/BookContext';
import {BookmarkScreen} from './screens/BookmarkDetailScreen/BookmarkScreen';

function App(): React.JSX.Element {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    if (visible) {
      StatusBar.setBarStyle('dark-content');

      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }
  }, [visible]);

  const Stack = createNativeStackNavigator();

  return visible ? (
    <AnimatedBootSplash
      onAnimationEnd={() => {
        setVisible(false);
      }}
    />
  ) : (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <BookProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: ({navigation}) => (
                  <HomeHeader navigation={navigation} />
                ),
              }}
            />
            <Stack.Screen
              name="ListBook"
              component={ListBooksScreen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: ({navigation, route}) => (
                  <ListHeader navigation={navigation} route={route} />
                ),
              }}
            />
            <Stack.Screen
              name="BookDetail"
              component={BookDetailScreen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: ({navigation, route}) => (
                  <DetailsHeader navigation={navigation} route={route} />
                ),
              }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Bookmark"
              component={BookmarkScreen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                header: ({navigation, route}) => (
                  <ListHeader navigation={navigation} route={route} />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BookProvider>
    </>
  );
}

export default App;
