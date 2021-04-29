import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ChampionPage from './components/ChampionPage'

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={ ()=> <Home champions={this.props.champions} />} />
                <Route exact path="/champion/:name" component={ ()=> <ChampionPage champions={this.props.champions} />} />
            </Switch>
        )
    }
}

export default Routes;
