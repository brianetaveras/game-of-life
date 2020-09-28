import {createContext} from 'react'


export const store = {
      cols: 25,
      rows: 25,
      simulation_running: false,
      current_generation: 0,
      grid: null
    
}

export default createContext(store);