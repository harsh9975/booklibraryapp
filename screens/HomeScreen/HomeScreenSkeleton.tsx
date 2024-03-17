import React from 'react';
import {
  FlatList,
  SectionList,
  SectionListData,
  StyleSheet,
  View,
} from 'react-native';
import {windowWidth} from '../../consts/const';

interface SkeletonLoaderProps {
  loading: boolean;
}

const dummySections: readonly SectionListData<any>[] = [
  {
    title: 'Science Fiction',
    data: [1, 2, 3, 4, 5],
  },
  {
    title: 'Fantasy',
    data: [1, 2, 3, 4, 5],
  },
  {
    title: 'Mystery',
    data: [1, 2, 3, 4, 5],
  },
];

const HomeSkeletonLoader: React.FC<SkeletonLoaderProps> = ({loading}) => {
  if (loading) {
    return (
      <SectionList
        sections={dummySections}
        keyExtractor={(item, index) => item.title + index}
        renderItem={() => null}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader} />
            <FlatList
              data={section.data}
              keyExtractor={(item, index) =>
                `${section.title}_${index}_${Math.random()}`
              }
              renderItem={() => <CardSkeleton />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      />
    );
  }

  return null;
};

const CardSkeleton: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, styles.cardSkeleton]} />
      <View style={[styles.card, styles.cardSkeleton]} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#d0d0d0',
    width: 200,
    height: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  card: {
    // width: 120,
    width: windowWidth * 0.4,
    marginRight: 10,
    height: windowWidth * 0.55,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  cardSkeleton: {
    backgroundColor: '#d0d0d0',
  },
});

export default HomeSkeletonLoader;
