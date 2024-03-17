import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListBookSkeleton: React.FC = () => {
  return (
    <View style={styles.container}>
      {[...Array(5).keys()].map(index => (
        <View key={index} style={styles.skeletonItem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  skeletonItem: {
    marginBottom: 15,
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
});

export default ListBookSkeleton;
