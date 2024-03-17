/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {debounce} from 'lodash';

import {searchBooks} from '../../api/BookApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  primaryColor,
  secTextColor,
  textColor,
  width,
  windowWidth,
} from '../../consts/const';
import ListBookSkeleton from '../ListBooksScreen/ListBookSekeleton';

interface Book {
  title: string;
  author_name: string;
  coverUrl: string;
  key: string;
  cover_i: string;
}

type SearchProps = {
  route: any;
  navigation: any;
};

export function SearchScreen({navigation}: SearchProps) {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const debouncedHandleSearch = React.useMemo(
    () =>
      debounce((text: string) => {
        handleSearchQueryChange(text);
      }, 1000),
    [],
  );

  const handleInputChange = (text: string) => {
    setQuery(text);
    setLoading(true);
    // Call the debounced function
    debouncedHandleSearch(text);
  };

  const handleSearchQueryChange = async (text: string) => {
    try {
      // Your searchBooks logic here
      // Example:
      const response = await searchBooks(text);
      setSearchResults(response);
      setLoading(false);
    } catch (error) {
      console.error('Error searching books:', error);
      setLoading(false);
    }
  };

  console.log('cehck====', searchResults);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={32}
            color={textColor}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search Books"
          value={query}
          onChangeText={handleInputChange}
          placeholderTextColor={secTextColor}
        />
      </View>
      {loading ? (
        <ListBookSkeleton />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={item => item?.key}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookDetail', {
                    key: item?.key,
                    coverId: item?.cover_i,
                    coverUrl: `https://covers.openlibrary.org/b/id/${item?.cover_i}-L.jpg`,
                    author: item?.author_name ? item?.author_name[0] : null,
                    title: item?.title,
                  });
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
                      {item?.author_name ? item?.author_name[0] : null}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri: `https://covers.openlibrary.org/b/id/${item?.cover_i}-L.jpg`,
                    }}
                    style={styles.bookCover}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: textColor,
    borderRadius: 15,
  },
  bookContainer: {
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: primaryColor,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 20,
  },
  bookCover: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: 10,
  },
});
