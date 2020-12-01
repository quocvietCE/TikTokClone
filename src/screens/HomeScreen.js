import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Post from '../components/Post';
import data from '../assets/postsData';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Post item={item} />}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
