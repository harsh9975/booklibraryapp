import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {gothic, primaryColor, textColor} from '../../consts/const';
import {useBookContext} from '../../context/BookContext';

interface CustomHeaderProps {
  navigation: any;
  route: any; // Update the type according to your navigation library
}

export const HomeHeader: React.FC<CustomHeaderProps> = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="segment" size={32} color={textColor} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <AntIcon
          name="search1"
          size={25}
          color={textColor}
          onPress={() => navigation.navigate('Search')}
        />
        <Icon
          name="collections-bookmark"
          size={27}
          color={textColor}
          onPress={() => navigation.navigate('Bookmark')}
          //   style={styles.icon}
        />
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/33349461?v=4',
            }}
            style={[styles.icon, styles.profileIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ListHeader: React.FC<CustomHeaderProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={32}
            color={textColor}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{route?.params?.title}</Text>
      </View>
      {/* <View style={styles.rightContainer}> */}
      {/* <AntIcon name="search1" size={25} color={textColor} /> */}
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/33349461?v=4',
          }}
          style={[styles.icon, styles.profileIcon]}
        />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export const DetailsHeader: React.FC<CustomHeaderProps> = ({
  navigation,
  route,
}) => {
  const {bookmarkBook, isBookmarked} = useBookContext();
  console.log('=========', route.params);
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={32}
            color={textColor}
            style={styles.icon}
          />
        </TouchableOpacity>
        {/* <Text style={styles.text}>{route?.params?.title}</Text> */}
      </View>
      {/* <View style={styles.rightContainer}> */}
      {/* <AntIcon name="search1" size={25} color={textColor} /> */}
      <TouchableOpacity>
        <Icon
          name={
            isBookmarked(route?.params?.key) ? 'bookmark' : 'bookmark-border'
          }
          size={26}
          color={isBookmarked(route?.params?.key) ? primaryColor : textColor}
          style={styles.icon}
          onPress={() => bookmarkBook(route?.params)}
        />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    height: 110,
    backgroundColor: '#fff',
  },
  icon: {
    width: 40,
    height: 40,
  },
  profileIcon: {
    borderRadius: 55,
  },
  rightContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: textColor,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
});
