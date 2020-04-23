// ---------------------------------------------------------------------------
import React, { Component } from 'react';
import '../styles/App.css';
import 'whatwg-fetch';
import PokemonIndexList from '../components/PokemonIndexList';
import PokemonModal from '../components/PokemonModal.js';
import TopNavbar from '../components/TopNavbar';
import FilterNavbar from '../components/FilterNavbar';
import PaginationContainer from '../components/PaginationContainer';

// ---------------------------------------------------------------------------
class App extends Component {
  // -------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      total_pokemon: 0,
      all_pokemon: [],
      pokemon_view: [],
      activePage: 1,
      limit: 10,
      offset: 0,
      totalPages: 0,
      loaded: false,
      showModal: false,
      searchfield: '',
      pageRange: 5,
    };

    this.loadAllPokemon = this.loadAllPokemon.bind(this);
    this.loadAllPokemon();

    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetDefaults = this.resetDefaults.bind(this);
  }

  // -------------------------------------------------------------------------
  async loadAllPokemon() {
    fetch(this.props.pokemonUrl)
      .then(resp => resp.json())
      .then(json => this.setState({total_pokemon: json.count}))
      .catch(err => console.log(err))
      .then(() => fetch(`${this.props.pokemonUrl}?limit=${this.state.total_pokemon}`))
      .then(resp => resp.json())
      .then(json => {
        return Promise.all(json.results.map(pokemon => {
          return fetch(`${this.props.pokemonUrl}/${pokemon.name}/`).then(response => response.json());
        }));
      })
      .then((results) => {
        this.setState({
          all_pokemon: results.sort((a, b) => a.name > b.name),
          pokemon_view: results.slice(0, this.state.limit),
          loaded: true,
          totalPages: Math.ceil(results.length / this.state.limit),
        });
      })
      .catch(err => console.log(err))
  }

  // -------------------------------------------------------------------------
  changePageState(limit) {
    const totalPages = Math.ceil(this.state.all_pokemon.length / limit);
    this.setState(
      {
        limit: limit,
        activePage: 1,
        pokemon_view: this.state.all_pokemon.slice(0, limit),
        totalPages: totalPages,
        searchfield: '',
      },
    );
  }

  // -------------------------------------------------------------------------
  handleLimitChange(e) {
    const limit = +e.target.innerHTML || this.state.total_pokemon;
    this.changePageState(limit);
  }

  // -------------------------------------------------------------------------
  handlePaginationSelect(e) {
    let pageNum = e.target.value;
    const activePage = this.state.activePage;
    const pageRange = this.state.pageRange;

    if (pageNum === "next_page") pageNum = activePage + 1;
    else if (pageNum === "next_range") pageNum = activePage + pageRange; 
    else if (pageNum === "prev_page") pageNum = activePage - 1;
    else if (pageNum === "prev_range") pageNum = activePage - pageRange;

    if (pageNum < 1) pageNum = 1;
    if (pageNum > this.state.totalPages) pageNum = this.state.totalPages;

    const offset = this.state.limit * pageNum;
    const start = offset - this.state.limit;
    const current = this.state.all_pokemon.slice(start, offset);
    
    this.setState({ activePage: +pageNum, pokemon_view: current });
  }

  // -------------------------------------------------------------------------
  handleModalOpen(pokemon) {
    this.setState({
      selectedPokemon: pokemon,
      showModal: true,
    });
  }

  // -------------------------------------------------------------------------
  handleModalClose() {
    this.setState({
      showModal: false,
    });
  }

  // -------------------------------------------------------------------------
  resetDefaults() {
    this.changePageState(10)
  }

  // -------------------------------------------------------------------------
  handleSearchChange(event) {
    let searchfield = event.target.value;
    if (searchfield !== '') {  
      let new_pokemon = this.state.all_pokemon.filter((pokemon, index) => {
        return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
      });
      
      this.setState({
        pokemon_view: new_pokemon,
        activePage: 1,
        totalPages: 0,
        limit: this.state.total_pokemon,
      });
    } else {
      this.resetDefaults();
    }
  }

  // -------------------------------------------------------------------------
  render() {
    return (
      <>
        <TopNavbar resetDefaults={this.resetDefaults}/>
        <div className="body">
          <FilterNavbar
            options={[10, 50, 100, 200]}
            selectedValue={this.state.limit}
            total_pokemon={this.state.total_pokemon}
            onOptionSelected={this.handleLimitChange}
            searchChange={this.handleSearchChange}
            searchfield={this.state.searchfield}
          />

          {!(this.state.loaded) ? <p>Loading...</p> :
            <PokemonIndexList
              display={this.state.loaded}
              listOfPokemon={this.state.pokemon_view}
              totalPages={this.state.totalPages}
              activePage={this.state.activePage}
              onSelect={this.handlePaginationSelect}
              openModal={this.handleModalOpen}
              pageRange={this.state.pageRange}
            />
          }

          <PokemonModal
            closeModal={this.handleModalClose}
            show={this.state.showModal}
            pokemon={this.state.selectedPokemon}
          />
        </div>

        <PaginationContainer
          totalPages={this.state.totalPages}
          activePage={this.state.activePage}
          onSelect={this.handlePaginationSelect}
          pageRange={this.state.pageRange}
        />
      </>
    );
  }
}

export default App;



