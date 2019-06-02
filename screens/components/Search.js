import * as React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = { firstQuery: '', search: false };
  }

  render() {
    const { firstQuery } = this.state;
    
    if(this.state.firstQuery.length == 13 && !isNaN(this.state.firstQuery)){
        this.setState({search: true});
    }
    return (
    <SafeAreaView>
      <Searchbar
        placeholder="Rechercher un codebar..."
        onChangeText={(query) => this.setState({ firstQuery: query })}
        value={firstQuery}
      />
        <Button title='Rechercher' onPress={() => {}} />
    </SafeAreaView>
    );
  }
}
