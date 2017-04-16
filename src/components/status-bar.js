import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from './generic/button'

const StatusBarWrapper = ({title, showBackArrow, navigator, isHome}) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      {!isHome && (
        <Button onPress={() => navigator.pop()}>
          <Icon
            name={'arrow-left'}
            size={20}
            color={'white'} />
        </Button>
      )}
      <Text style={[styles.title]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 64,
    paddingTop: 25,
    backgroundColor: 'black',
  },

  title: {
    fontSize: 20,
    color: 'white'
  }
})

export default StatusBarWrapper