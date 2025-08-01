import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
import { globalStyles } from '../../styles/globalStyles';

const NewsCard = ({ news }) => {
  return (
    <View style={[globalStyles.card, styles.container]}>
      <View style={globalStyles.row}>
        <Text style={styles.emoji}>{news.image}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.description}>{news.content}</Text>
          <Text style={styles.time}>{news.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.margin,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.body,
    fontWeight: '600',
    color: COLORS.gray[900],
    marginBottom: 4,
  },
  description: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginBottom: 8,
    lineHeight: 20,
  },
  time: {
    fontSize: SIZES.small,
    color: COLORS.gray[500],
  },
});

export default NewsCard;