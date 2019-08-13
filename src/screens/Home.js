import React, { Component } from "react";
import { FlatList, BackHandler } from "react-native";
import {
  Container,
  Content,
  Header,
  ListItem,
  Thumbnail,
  Left,
	Right,
	Button,
	Icon,
  Body,
  Title,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";

import GeneralStyle from "../styles/GeneralStyle";

class Home extends Component {

  //Array list for types
  constructor(props) {
    super(props);

    this.state = {
      FlatListItems: [
        { types: 'people', title: 'People', subtitle: 'See all People' },
        { types: 'planets', title: 'Planets', subtitle: 'See all Planets' },
        { types: 'films', title: 'Films', subtitle: 'See all Films' },
        { types: 'species', title: 'Species', subtitle: 'See all Species' },
        { types: 'vehicles', title: 'Vehicles', subtitle: 'See all Vehicles' },
        { types: 'starships', title: 'Starships', subtitle: 'See all Starships' },
      ]
    };
  }

  render() {
    return (
      <Container style={GeneralStyle.Container}>

        <Header noLeft style={GeneralStyle.Header}>
          <Body>
            <Title>Star Wars Universe</Title>
          </Body>
					<Right>
						<Button transparent onPress={() => { BackHandler.exitApp() }}>
								<Icon name='exit' />
						</Button>
					</Right>
        </Header>

        <Content>
          <FlatList
            data={ this.state.FlatListItems }
            renderItem={({item}) => 
            <ListItem avatar onPress={() => {
              Actions.ViewList({types: item.types, title: item.title, subtitle: item.subtitle});
            }}>
              <Left>
                <Thumbnail
                  source={
                    require("../assets/logo-star-wars.png")
                  } 
                />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={2}>{item.subtitle}</Text>
              </Body>
            </ListItem> }
         />
        </Content>        
      </Container>
    );
  }
}

export default Home;
