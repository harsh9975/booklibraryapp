/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchBooksFromSubjects} from '../../api/BookApi';
import {
  commonStyles,
  gothic,
  primaryColor,
  primaryColorShadow,
  textColor,
  windowWidth,
} from '../../consts/const';
import HomeSkeletonLoader from './HomeScreenSkeleton';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
// import {FlatList} from 'react-native-gesture-handler';

export function HomeScreen({navigation}: any) {
  const [booksBySubject, setBooksBySubject] = useState<
    {title: string; data: any[]}[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  const fetchData = async () => {
    try {
      const fetchedBooks = await fetchBooksFromSubjects();
      setBooksBySubject(fetchedBooks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleError = () => {
    setError(false);
    fetchData();
  };

  if (error) {
    return <ErrorButton onPress={handleError} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Discover Latest Books</Text>
      {loading ? (
        <HomeSkeletonLoader loading={loading} />
      ) : (
        <SectionList
          sections={booksBySubject}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({}) => null}
          renderSectionHeader={({section: {title, data}}) => (
            <>
              <View
                style={[
                  commonStyles.rowCB,
                  {marginRight: 10, marginTop: 20, marginBottom: 10},
                ]}>
                <Text style={styles.sectionHeader}>{title}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('ListBook', {title: title})
                  }>
                  <Text style={{color: primaryColor}}>View More</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={data}
                keyExtractor={(book, index) => `${book.title}_${index}`}
                renderItem={({item: book}) => {
                  return (
                    <TouchableOpacity
                      style={styles.bookContainer}
                      onPress={() =>
                        navigation.navigate('BookDetail', {...book})
                      }>
                      <Image
                        source={{uri: book.coverUrl}}
                        style={styles.bookCover}
                      />
                      <View style={styles.bookInfo}>
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text style={styles.bookAuthor}>{book.author}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                horizontal // Make the FlatList horizontal
                showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
              />
            </>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    // fontWeight: '700',
    fontFamily: 'HappyMonkey',
    color: textColor,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  bookContainer: {
    flexDirection: 'column',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 10,
    width: windowWidth * 0.4,
  },
  bookCover: {
    width: '100%',
    height: windowWidth * 0.55,
    borderRadius: 10,
  },
  bookInfo: {
    flex: 1,
    marginTop: 5,
  },
  bookTitle: {
    fontSize: 14,
    fontFamily: 'HappyMonkey',
    color: textColor,
  },
  bookAuthor: {
    fontSize: 14,
    fontFamily: gothic,
    color: textColor,
  },
  sectionHeader: {
    // fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#261209',
    textTransform: 'capitalize',
    fontFamily: 'HappyMonkey',
  },
  button: {
    borderColor: primaryColor,
    backgroundColor: primaryColorShadow,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
