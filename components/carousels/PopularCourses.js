import * as React from "react";
import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
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
    const styles = {
      item: {
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 100,
      },
      containerWrp: {
        display: "flex",
        flexDirection: "row",
      },
      contentWrp: {
        paddingVertical: 20,
        paddingHorizontal: 10,
      },
      image: {
        width: 120,
        height: 100,
      },
      title: {
        fontSize: 18,
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
      <View style={styles.item}>
        <View style={styles.containerWrp}>
          <Image
            style={styles.image}
            source={{ uri: "https://loremflickr.com/g/320/240/paris" }}
          />
          <View style={styles.contentWrp}>
            <Text style={styles.title}>{`${item.title}`}</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const styles = {
      containerWrp: {
        marginBottom: 20,
      },
      titleWrp: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: "600",
      },
      subTitle: {
        fontSize: 18,
        color: "#da5d58",
      },
    };
    return (
      <View style={styles.containerWrp}>
        <View style={styles.titleWrp}>
          <Text style={styles.title}>{this.props.label}</Text>
          <Text style={styles.subTitle}>Tất cả</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={320}
            itemWidth={280}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </View>
    );
  }
}
