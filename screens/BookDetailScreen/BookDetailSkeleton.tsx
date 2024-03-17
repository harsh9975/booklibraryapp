import React from 'react';
import {View, StyleSheet} from 'react-native';
import {windowHeight} from '../../consts/const';

const BookDetailSkeleton: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 20}}>
        <View style={styles.imageSkeleton} />
        <View style={styles.ratingContainer}>
          <View style={styles.ratingColSkeleton} />
          <View style={styles.ratingColSkeleton} />
          <View style={styles.ratingColSkeleton} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleMain}>
          <View style={styles.titleTextSkeleton} />
          <View style={styles.authorTextSkeleton} />
        </View>
        <View style={styles.heartIconSkeleton} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
        <View style={styles.descriptionTextSkeleton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  imageSkeleton: {
    width: '70%',
    height: windowHeight * 0.45,
    borderRadius: 15,
    backgroundColor: '#d0d0d0',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 40,
  },
  ratingColSkeleton: {
    width: '20%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleMain: {
    width: '70%',
  },
  titleTextSkeleton: {
    width: '80%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  authorTextSkeleton: {
    width: '60%',
    height: 20,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#d0d0d0',
  },
  heartIconSkeleton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  descriptionContainer: {
    marginBottom: 20,
    marginTop: 30,
  },
  descriptionTextSkeleton: {
    width: '100%',
    height: 20,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#d0d0d0',
  },
});

export default BookDetailSkeleton;
