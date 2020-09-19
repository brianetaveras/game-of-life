import React, { Component } from 'react';
import StoreContext, { store } from '../store/store';
import Viewer from '../components/3DViewer';
import Controls from '../components/Controls';
class Home extends Component {

  constructor(props){
    super(props)
    this.toggleSimulationStatus = () =>{
      this.setState(state=> ({
        ...state,
        simulation_running: !state.simulation_running
      }))
    }

    this.increaseGeneration = () =>{
      this.setState(state => ({
        ...state,
        current_generation: state.current_generation + 1
      }))
    }

    this.state = {
      ...store,
      toggleSimulationStatus: this.toggleSimulationStatus,
      increaseGeneration: this.increaseGeneration
    }

    

  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        <StoreContext.Consumer>
          {(store) =>{
            return (
            <div id="home-page">
              <Controls {...store}/>
              <Viewer {...store} />
            </div>

            )
          }}
        </StoreContext.Consumer>
      </StoreContext.Provider>
    );
  }
}

export default Home;
