/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {fetchBookDetails} from '../../api/BookApi';
import {
  gothic,
  primaryColor,
  secTextColor,
  textColor,
  windowHeight,
  windowWidth,
} from '../../consts/const';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Button/Button';
import BookDetailSkeleton from './BookDetailSkeleton';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import {isObject} from '../../utils';
import {useBookContext} from '../../context/BookContext';
import Comment from '../../components/Comments/Comments';

type BookDetailProps = {
  route: any;
  navigation: any;
};

export function BookDetailScreen({route}: BookDetailProps) {
  const [bookDetail, setBookDetail] = React.useState<any>('');
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const {key, coverId, coverUrl, author} = route.params;
  const {likeBook, likedBooks, comments, addComment} = useBookContext();
  const isBookLiked = likedBooks.some(book => book.key === key);

  const handleLike = (data: string) => {
    likeBook(data);
  };

  const fetchData = async () => {
    try {
      const fetchedBooks: any = await fetchBookDetails(key, coverId);
      if (fetchedBooks) {
      }
      setBookDetail(fetchedBooks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  React.useEffect(() => {
    if (key) {
      fetchData();
    }
  }, [coverId, key]);

  const handleError = () => {
    setError(false);
    fetchData();
  };

  if (error) {
    return <ErrorButton onPress={handleError} />;
  }

  if (loading) {
    return <BookDetailSkeleton />;
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScrollView style={styles.container}>
        <View style={styles.ratingContainer}>
          {/* <View style={styles.imageContainer}></View> */}
          <Image source={{uri: coverUrl}} style={styles.imageContainer} />
          <View style={styles.rating}>
            <View style={styles.ratingCol}>
              <Icon name="star" size={25} color="#fdb853" />
              <View style={styles.ratingMain}>
                <Text style={styles.ratingCount}>4.5</Text>
                <Text style={styles.secRatingText}>Rating</Text>
              </View>
            </View>
            <View style={styles.ratingCol}>
              <EntypoIcon name="open-book" size={25} color="#d276d1" />
              <View style={styles.ratingMain}>
                <Text style={styles.ratingCount}>450</Text>
                <Text style={styles.secRatingText}>Pages</Text>
              </View>
            </View>
            <View style={styles.ratingCol}>
              <FontAwesome name="book-reader" size={25} color="#228cc7" />
              <View style={styles.ratingMain}>
                <Text style={styles.ratingCount}>335</Text>
                <Text style={styles.secRatingText}>Reading</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleMain}>
            <Text style={styles.titleText}>
              {bookDetail?.title ? bookDetail?.title : null}
            </Text>
            <Text style={[styles.authorText, {fontSize: 16}]}>{author}</Text>
            {/* <Text>{bookDetail.authors[0].}</Text> */}
          </View>
          <Icon
            name={isBookLiked ? 'heart' : 'hearto'}
            size={25}
            color={primaryColor}
            onPress={() => handleLike({key, title: bookDetail?.title})}
          />
        </View>
        <View>
          <Text style={[styles.titleText, {fontSize: 20}]}>Description</Text>
          <Text style={styles.authorText}>
            {isObject(bookDetail?.description)
              ? bookDetail?.description.value
              : bookDetail?.description}
          </Text>
        </View>
        <View style={{paddingBottom: 200, paddingTop: 29}}>
          <Comment
            onAddComment={addComment}
            bookId={key}
            comments={comments[`${key}`]}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button title="Buy a Book" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: textColor,
  },
  ratingContainer: {
    height: windowHeight * 0.45,
    flexDirection: 'row',
    gap: 20,
  },
  imageContainer: {
    width: '70%',
    height: '100%',
    borderRadius: 15,
  },
  rating: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: 40,
    justifyContent: 'center',
    // paddingLeft: 5,
  },
  ratingCol: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  secRatingText: {
    color: secTextColor,
    fontSize: 14,
    width: 80,
    fontFamily: gothic,
  },
  ratingMain: {
    flexDirection: 'column',

    // alignItems: 'center',
  },
  ratingCount: {
    color: textColor,
    fontSize: 27,
    fontWeight: '900',
  },
  titleContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
  titleMain: {
    flexDirection: 'column',
    gap: 4,
    width: '70%',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'HappyMonkey',
    color: textColor,
  },
  authorText: {
    color: secTextColor,
    fontSize: 18,
    fontFamily: gothic,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    left: 0,
    width: windowWidth,
    backgroundColor: '#fff',
    height: 90,
    padding: 10,
  },
});
