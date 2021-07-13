import React from "react";
import { Text, View, ImageBackground } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

export default class FeatureCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Toán Học 10",
          price: "$ 100",
        },
        {
          title: "Lý 10",
          price: "$ 200",
        },
        {
          title: "Hóa Học 10",
          price: "$ 300",
        },
        {
          title: "Toán Học 11",
          price: "$ 400",
        },
        {
          title: "Hóa Học 11",
          price: "$ 500",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    const image = { uri: "https://loremflickr.com/g/320/240/paris" };

    const styles = {
      itemWrp: {
        backgroundColor: "floralwhite",
        borderRadius: 20,
        height: 150,
        marginLeft: 22,
        marginRight: 15,
        marginTop: 10,
      },
      image: { borderRadius: 20 },
      imageBackground: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
      },
      title: {
        color: "white",
        fontSize: 28,
        fontWeight: "600",
      },
      price: {
        backgroundColor: "#da5d58",
        width: 60,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 5,
        marginTop: 4,
      },
      priceText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
      },
    };

    return (
      <View style={styles.itemWrp}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "black",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View>
        <Carousel
          data={this.state.carouselItems}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
          windowSize={1}
          sliderWidth={400}
          itemWidth={400}
        />
        {this.pagination}
      </View>
    );
  }
}
