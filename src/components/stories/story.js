import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Web from '../web'
import Thread from '../../connected/thread.connected'
import fromNow from '../../helpers/from-now'
import formatUrl from '../../helpers/format-url'

const Story = (props) => {
  const {
    title,
    time,
    score,
    kids,
    navigator,
    descendants,
    url
 } = props

 //TODO: detect if url is hackernews and navigate to Thread

  return (
    <TouchableHighlight
      style={styles.story}
      underlayColor='#53887f'
      activeOpacity={.8}
      onPress={() => navigator.push({
        title: 'Hacker News',
        component: Web,
        index: 1,
        props: {
          url
        }
      })}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.url}>{formatUrl(url)}</Text>
        <View style={styles.sub}>
          <View>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text style={styles.score}>{score} points</Text>
          </View>
          <TouchableHighlight
            style={styles.commentsContainer}
            activeOpacity={.5}
            underlayColor='#fbfbfb'
            onPress={() => navigator.push({
              title: 'Comments',
              component: Thread,
              index: 1,
              props: {
                title,
                time,
                score,
                descendants,
                kids,
                url
              }
            })}>
            <Text style={styles.comments}>{descendants} comments</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#66a3b430'
  },
  title: {
    color: '#333333',
    fontSize: 28
  },
  url: {
    paddingTop: 15,
    paddingBottom: 15
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 14,
    color: '#adadad'
  },
  score: {
    paddingTop: 5,
    fontSize: 16,
    color: '#ff6600'
  },
  commentsContainer: {

  },
  comments: {
    color: '#00A287',
    fontWeight: '800'
  }
})

export default Story
