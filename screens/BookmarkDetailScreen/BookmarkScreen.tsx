/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ListBookScreenRouteProp} from '../../types';
import {fetchBooksFromSubject} from '../../api/BookApi';
import {convertToSnakeCase} from '../../utils';
import {FlatList} from 'react-native';
import {primaryColor, textColor, width, windowWidth} from '../../consts/const';
import {Image} from 'react-native';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import ListBookSkeleton from '../ListBooksScreen/ListBookSekeleton';
import {useBookContext} from '../../context/BookContext';
import Button from '../../components/Button/Button';

type ListBookProps = {
  route: ListBookScreenRouteProp;
  navigation: any;
};

type BookList = {
  title: string;
  author: string;
  coverUrl: string;
  key: string;
};

export function BookmarkScreen({navigation}: ListBookProps) {
  const {bookmarkedBooks} = useBookContext();
  // console.log(title);

  if (!bookmarkedBooks.length) {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <Text style={{color: textColor, fontSize: 20}}>Empty Bookmark</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
          style={{marginTop: 20}}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={bookmarkedBooks}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookDetail', {...item});
                }}>
                <View style={styles.cardContainer}>
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: 5,
                      width: width * 0.45,
                    }}>
                    <Text
                      style={{
                        // color: textColor,
                        fontSize: 24,
                        // fontWeight: '900',
                        color: '#fff',
                        fontFamily: 'HappyMonkey',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        // color: textColor,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#fff',
                      }}>
                      {item.author}
                    </Text>
                  </View>
                  <Image
                    source={{uri: item.coverUrl}}
                    style={styles.bookCover}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* <View style={styles.bg} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: textColor,
  },
  cardContainer: {
    backgroundColor: primaryColor,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bookCover: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: 10,
  },
  // bg: {
  //   position: 'absolute',
  //   width: width,
  //   height: height,
  //   backgroundColor: 'red',
  //   transform: [{translateY: height / 2}],
  //   borderRadius: 32,
  // },
});
