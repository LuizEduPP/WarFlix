import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Header,
  Segment,
  Left,
  Right,
  Body,
  Title,
  View,
  Spinner,
  Text,
  Button,
  Icon,
  Subtitle
} from "native-base";
import { Actions } from "react-native-router-flux";

import GeneralStyle from "../styles/GeneralStyle";

class ViewList extends Component {

  //vars
  state = {
    data: [],
    dataOther: [],
    titleType: this.props.title,
    page:
      this.props.pageN == null
        ? "https://swapi.co/api/" + this.props.types + "/"
        : this.props.pageN,
    loading: true
  };

  //fetch information to api
  componentDidMount() {
    fetch(this.state.page)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ data: json.results, loading: false });
        this.setState({ dataOther: json, loading: false });
      })
      .catch(err => {
        console.warn("Error", err);
      });
  }

  render() {
		let { data } = this.state;
    return (
      <Container style={GeneralStyle.Container}>

        <Header style={GeneralStyle.Header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                Actions.pop();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
            <Subtitle>{this.props.subtitle}</Subtitle>
          </Body>
          <Right />
        </Header>

        <Segment>
          {this.state.dataOther.previous == null ? (
            <Button last disabled>
              <Icon name="arrow-back" />
            </Button>
          ) : (
            <Button
              first
              onPress={() => {
                Actions.refresh({
									key: Math.random(),
                  pageN: this.state.dataOther.previous,
                  types: this.props.types,
                  title: this.props.title,
                  subtitle: this.props.subtitle
                });
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          )}

          {this.state.dataOther.next == null ? (
            <Button last disabled>
              <Icon name="arrow-forward" />
            </Button>
          ) : (
            <Button
              last
              onPress={() => {
                Actions.refresh({
									key: Math.random(),
									pageN: this.state.dataOther.next,
                  types: this.props.types,
                  title: this.props.title,
                  subtitle: this.props.subtitle,
                });
              }}
            >
              <Icon name="arrow-forward" />
            </Button>
          )}
        </Segment>

        <Content>
          <View>
            {this.state.loading ? (
              <Spinner color="blue" />
            ) : (
              <FlatList
                data={data}
                keyExtractor={item =>
                  this.props.types == "films" ? item.title : item.name
                }
                renderItem={this.renderItem}
              />
            )}
          </View>
        </Content>
      </Container>
    );
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={GeneralStyle.touchableOpacity} 
        onPress={() => Actions.Details(
          {
            pageGet: item.url, 
            types: this.props.types, 
            titleType: this.props.title 
          }
        )}>
        <View>
          <Text>{this.props.types == "films" ? item.title : item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

export default ViewList;
