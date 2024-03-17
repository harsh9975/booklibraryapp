import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  primaryColor,
  primaryColorShadow,
  secTextColor,
  textColor,
} from '../../consts/const';
import Button from '../Button/Button';

interface CommentProps {
  bookId: string;
  comments: string[];
  onAddComment: (bookId: string, comment: string) => void;
}

const Comment: React.FC<CommentProps> = ({bookId, comments, onAddComment}) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(bookId, newComment);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newComment}
          placeholderTextColor={secTextColor}
          multiline
          onChangeText={text => setNewComment(text)}
        />
        <Button title="Comment" onPress={handleAddComment} />
      </View>
      <View>
        <Text style={styles.heading}>Comments:</Text>
        {comments !== undefined &&
          !!comments.length &&
          comments.map((comment, index) => (
            <Text style={styles.authorText} key={index}>
              {comment}
            </Text>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginBottom: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    height: 80,
    color: textColor,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  authorText: {
    color: primaryColor,
    fontSize: 18,
    fontWeight: '900',
    backgroundColor: primaryColorShadow,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Comment;
