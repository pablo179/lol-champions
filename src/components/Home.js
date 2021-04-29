import React, { Component } from 'react';
import ChampionCard from './ChampionCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
    constructor(props) {
        super(props);
        const { champions } = this.props
        this.state = {
          original: {...champions},
          filtered: Object.keys(champions),
          filterText: '',
          isFiltering: false,
        }
        this.filter = this.filter.bind(this);
        this.deleteFilter = this.deleteFilter.bind(this);
    }
    filter(e) {
      const { original } = this.state
      const filterText = e.target.value
      this.setState({isFiltering: filterText !== ''})
      this.setState({filterText})
      const filtered = Object.keys(original).filter(item => original[item].name.toUpperCase().includes(filterText.toUpperCase()));
      this.setState({filtered})
    }
    deleteFilter() {
      const { isFiltering } = this.state
      const { champions } = this.props
      if(!isFiltering) {
        return;
      }
      this.setState({filterText: ''})
      this.setState({filtered: Object.keys(champions)})
    }
    render(){
      const { isFiltering, filterText, filtered, original } = this.state
      const { deleteFilter, filter } = this;
      return (
        <div className="App">
          <form className="search-container" onSubmit={(e)=> e.preventDefault()} >
            <FontAwesomeIcon icon={isFiltering ? faTimes : faSearch} className="search--icon" size="lg" onClick={deleteFilter} />
            <input type="text" required className="search" placeholder="search..." onChange={filter} value={filterText}/>
          </form>
          <div className="championsContainer">
            {
              filtered.map(item => <ChampionCard propertyName={item} {...original[item]} /> )
            }
          </div>
        </div>
      );
    }
}

export default Home