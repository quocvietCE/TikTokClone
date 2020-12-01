import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import postProps from '../../assets/postProps';

const Post = ({postData = postProps}) => {
  const [post, setPost] = useState(postData);
  const [isLike, setIsLike] = useState(false);
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const likeOnPress = () => {
    setIsLike(!isLike);
    const addLike = isLike ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + addLike,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPlayPausePress}
        style={styles.videoPlayButton}>
        <View>
          <Video
            source={{
              uri:
                'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
            }}
            style={styles.video}
            resizeMode="cover"
            onError={(e) => console.log('onError: ', e)}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: post.user.imageUri,
                  }}
                />
              </View>

              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={likeOnPress}>
                  {isLike ? (
                    <AntDesign name="heart" size={38} color={'red'} />
                  ) : (
                    <AntDesign name="hearto" size={38} color={'white'} />
                  )}
                </TouchableOpacity>
                <Text style={styles.starLabel}>{post.likes}</Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesome name="commenting" size={40} color={'white'} />
                <Text style={styles.starLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name="share-a" size={35} color={'white'} />

                <Text style={styles.starLabel}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songRow}>
                  <Entypo name="beamed-note" size={24} color={'white'} />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    // borderWidth: 1,
    marginRight: 5,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: '300',
    marginRight: 10,
  },
  songRow: {
    flexDirection: 'row',
  },
  profilePictureContainer: {
    // borderWidth: 2,
    // borderColor: '#fff',
    // borderRadius: 28,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  starLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },
  videoPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
});
