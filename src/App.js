import React from 'react';
import Router from './routes/index';
import StoreContext, { store } from '../src/store/store';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.toggleSimulationStatus = () => {
      this.setState(state => ({
        ...state,
        simulation_running: !state.simulation_running
      }))
    }

    this.increaseGeneration = () => {
      this.setState(state => ({
        ...state,
        current_generation: state.current_generation + 1
      }))
    }

    this.handleInput = (e) => {
      const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
      const name = e.target.name;
      this.setState(state => ({
        ...state,
        [name]: value
      }))

    }

    this.adjustColOrRow = (type, action) =>{
      this.setState(state =>({
        ...state,
        [type]: action == 'increase' ? state[type] + 1 : state[type] - 1
      }))
    }


    this.state = {
      ...store,
      toggleSimulationStatus: this.toggleSimulationStatus,
      increaseGeneration: this.increaseGeneration,
      handleInput: this.handleInput,
      adjustColOrRow: this.adjustColOrRow

    }



  }

  render() {
    return (
      <div className="App">
        <StoreContext.Provider value={this.state}>
          <StoreContext.Consumer>
            {(store) => {
              return (
                <Router {...store} />
              )
            }}

          </StoreContext.Consumer>
        </StoreContext.Provider>
      </div>
    );

  }
}



export default App;
