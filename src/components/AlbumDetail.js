import React, { Component } from 'react';
import { Text, View } from 'react-native';

// ask whather it is a class based component or a functional component
// Does it need lifecyccle methods or need access to state?

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
