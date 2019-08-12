import React, { Component } from "react";
import {  } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button,
  Card,
  Spinner,
  Icon,
  Subtitle,
  CardItem
} from "native-base";
import { Actions } from "react-native-router-flux";

import GeneralStyle from "../styles/GeneralStyle";

class Details extends Component { 

	//Vars
  state = {
    page: this.props.pageGet,
    types: this.props.types,
    titleType: this.props.titleType,
    loading: true
  };

	//Fetch information to api
  componentDidMount() {
    fetch(this.state.page)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ data: json, loading: false });
      })
      .catch(err => {
        console.warn("Error", err);
      });
	}
	
	//if else for types to api
	renderElement(){
		if (this.state.types == 'people') 
			return <Body>
					<Text>Height: {this.state.data.height}</Text>
					<Text>Mass: {this.state.data.mass}</Text>
					<Text>Hair Color: {this.state.data.hair_color}</Text>
					<Text>Skin Color: {this.state.data.skin_color}</Text>
					<Text>Eye Color: {this.state.data.eye_color}</Text>
					<Text>Birth Year: {this.state.data.birth_year}</Text>
					<Text>Gender: {this.state.data.gender}</Text>
				</Body>;
		else if (this.state.types == 'planets') 
			return <Body>
					<Text>Rotation Period: {this.state.data.rotation_period}</Text>
					<Text>Orbital Period: {this.state.data.orbital_period}</Text>
					<Text>Diameter: {this.state.data.diameter}</Text>
					<Text>Climate: {this.state.data.climate}</Text>
					<Text>Gravity: {this.state.data.gravity}</Text>
					<Text>Terrain: {this.state.data.terrain}</Text>
					<Text>Surface Water: {this.state.data.surface_water}</Text>
					<Text>Population: {this.state.data.population}</Text>
				</Body>;
		else if (this.state.types == 'films') 
			return <Body>
					<Text>Episode: {this.state.data.episode_id}</Text>					
					<Text>Director: {this.state.data.director}</Text>
					<Text>Producer: {this.state.data.producer}</Text>
					<Text>Release Date: {this.state.data.release_date}</Text>
					<Text>Opening Crawl: {this.state.data.opening_crawl}</Text>
				</Body>;
		else if (this.state.types == 'species') 
		return <Body>
				<Text>Classification: {this.state.data.classification}</Text>
				<Text>Designation: {this.state.data.designation}</Text>
				<Text>Average Height: {this.state.data.average_height}</Text>
				<Text>Skin Color: {this.state.data.skin_colors}</Text>
				<Text>Hair Color: {this.state.data.hair_colors}</Text>
				<Text>Eye Color: {this.state.data.eye_color}</Text>
				<Text>Average Lifespan: {this.state.data.average_lifespan}</Text>
			</Body>;
		else if (this.state.types == 'vehicles') 
		return <Body>
				<Text>Model: {this.state.data.model}</Text>
				<Text>Manufacturer: {this.state.data.manufacturer}</Text>
				<Text>Cost In Credits: {this.state.data.cost_in_credits}</Text>
				<Text>Length: {this.state.data.length}</Text>
				<Text>Max Atmosphering Speed: {this.state.data.max_atmosphering_speed}</Text>
				<Text>Crew: {this.state.data.crew}</Text>
				<Text>Passengers: {this.state.data.passengers}</Text>
				<Text>Cargo Capacity: {this.state.data.cargo_capacity}</Text>
				<Text>Consumables: {this.state.data.consumables}</Text>
				<Text>Vehicle Class: {this.state.data.vehicle_class}</Text>
			</Body>;
		else if (this.state.types == 'starships') 
		return <Body>
				<Text>Model: {this.state.data.model}</Text>
				<Text>Manufacturer: {this.state.data.manufacturer}</Text>
				<Text>Cost In Credits: {this.state.data.cost_in_credits}</Text>
				<Text>Length: {this.state.data.length}</Text>
				<Text>Max Atmosphering Speed: {this.state.data.max_atmosphering_speed}</Text>
				<Text>Crew: {this.state.data.crew}</Text>
				<Text>Passengers: {this.state.data.passengers}</Text>
				<Text>Cargo Capacity: {this.state.data.cargo_capacity}</Text>
				<Text>Consumables: {this.state.data.consumables}</Text>
				<Text>Hyperdrive Rating: {this.state.data.hyperdrive_rating}</Text>
				<Text>MGLT: {this.state.data.MGLT}</Text>
				<Text>Starship Class: {this.state.data.starship_class}</Text>
			</Body>;
		 
		return null;
 }

  render() {
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
						{ this.state.loading ? null : (
							<Title>{this.props.types == "films" ? this.state.data.title : this.state.data.name}</Title>
						)}
						<Subtitle>{this.props.titleType}</Subtitle>
          </Body>
          <Right />
        </Header>        

        {this.state.loading ? (
					<Spinner color="blue" />
				) : (
					<Card>
						<CardItem header bordered>
							<Text>{this.props.types == "films" ? this.state.data.title : this.state.data.name}</Text>
						</CardItem>
						<CardItem>
							{ this.renderElement() }
						</CardItem>
					</Card>
				)}    
        
      </Container>
    );
  }
}


export default Details;
