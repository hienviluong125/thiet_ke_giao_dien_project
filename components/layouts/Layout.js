import React from 'react';
import {
	Appbar,
	DefaultTheme,
	Provider as PaperProvider,
	BottomNavigation,
	Text as PaperText
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import Home from "../pages/Home";
import Category from "../pages/Category";

export default function Layout({ children }) {
	const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Trang chủ', icon: 'heart' },
    { key: 'category', title: 'Danh mục', icon: 'heart' },
    { key: 'learning', title: 'Học tập', icon: 'heart' },
		{ key: 'notification', title: 'Thông báo', icon: 'heart' },
		{ key: 'favorite', title: 'Yêu thích', icon: 'heart' },
  ]);

	const renderScene = BottomNavigation.SceneMap({
    'home': Home,
		'category': Category,
		'learning': Home,
		'notification': Category,
		'favorite': Home
  });

  return (
    <PaperProvider theme={theme}>
        <Appbar.Header style={styles.container} color>
          <Icon name="bars" size={25} color={'#fff'} />
          <Appbar.Content titleStyle={styles.titleStyle} title="Learn anywhere" />
          <Appbar.Action icon="magnify" size={25} />
          <Appbar.Action icon="cart" size={25} />
        </Appbar.Header>
				<BottomNavigation
					navigationState={{ index, routes }}
					onIndexChange={setIndex}
					renderScene={renderScene}
				/>
    </PaperProvider>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#004640",
    accent: "#f1c40f",
  },
};

const styles = StyleSheet.create({
  container: {
    color: "#004640",
    marginLeft: 20,
    marginRight: 20
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 20
  }
});
