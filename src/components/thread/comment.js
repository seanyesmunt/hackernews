import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import moment from 'moment'
import Button from '../generic/button'
import LoadReplies from './load-replies'
import { fromNow } from '../../helpers/story-helpers'
import Collapsible from 'react-native-collapsible';

class Comment extends Component  {
  constructor (props) {
    super(props)

    this.state = {
      expanded: true
     }
  }

  _toggleComment () {
    this.setState({
        expanded : !this.state.expanded
    })
  }

  render () {
    const {
      text,
      by,
      id,
      time,
      deleted,
      kids,
      showComment,
      loadComments,
      fetchingReplies,
      fetchingRepliesFor,
      loadReplies,
      commentChain,
      reply
    } = this.props
    return (
      <View style={[styles.comment, reply && styles.reply]}>
        {!deleted && (
            <Button onPress={this._toggleComment.bind(this)}>
              {this.state.expanded && (
                <View style={styles.commentBody}>
                  <HTMLView
                    value={text}
                    onLinkPress={(url) => {}}
                    stylesheet={htmlStyles}
                  />

                  <View>
                    <Text style={[styles.commentInfo]}>
                      {`${by} `}
                      {moment(time * 1000).fromNow()}
                    </Text>
                  </View>

                  {kids && kids.length && typeof kids[0] === 'number' && (
                    <LoadReplies
                      isLoading={fetchingRepliesFor === id}
                      loadReplies={loadReplies}
                      kids={kids}
                      commentChain={commentChain}
                      id={id} />
                  )}

                  {kids && kids.length && typeof kids[0] === 'object' && (
                    kids.map((comment) => (
                      <Comment
                        key={comment.id}
                        reply
                        {...comment}
                        loadReplies={loadReplies}
                        fetchingRepliesFor={fetchingRepliesFor} />
                    ))
                  )}
              </View>
              )}

              {!this.state.expanded && (
                <View>
                  <Text style={[styles.commentInfo]}>
                    {`${by} `}
                    {moment(time * 1000).fromNow()}
                  </Text>
                </View>
              )}
            </Button>
        )}
        { deleted && <Text>deleted</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    marginTop: 30,
    padding: 10,
  },
  commentBody: {
    // flex: 1
  },
  reply: {
    borderLeftWidth: 1,
    borderLeftColor: '#d5d5d5',
    marginLeft: 10
  },
  commentInfo: {
    paddingTop: 10
  }
})

const htmlStyles = StyleSheet.create({

})

export default Comment
