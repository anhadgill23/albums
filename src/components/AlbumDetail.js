import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

// ask whather it is a class based component or a functional component
// Does it need lifecyccle methods or need access to state?

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
