import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import StatusBar from "./components/status-bar";
import TabLayout from "./components/tab-layout";

const window = Dimensions.get("window");
const HEIGHT = window.height;
const WIDTH = window.width;

const Layout = props => {
  const {
    title,
    navigator,
    isHome,
    component: NewView,
    linkProps,
    openSafari,
    saveStory,
    unSaveStory
  } = props;

  return (
    <View style={styles.layout}>
      <StatusBar
        style={styles.statusBar}
        title={title}
        navigator={navigator}
        isHome={isHome}
      />
      {isHome &&
        <TabLayout style={styles.tabLayout} {...props} height={HEIGHT} />}
      {!isHome &&
        <NewView
          {...linkProps}
          openSafari={openSafari}
          unSaveStory={unSaveStory}
          saveStory={saveStory}
        />}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: WIDTH
  },
  statusBar: {
    alignSelf: "flex-start"
  },
  tabLayout: {
    alignSelf: "flex-end"
  }
});

export default Layout;
