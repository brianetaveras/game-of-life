import {createContext} from 'react'


export const store = {
      cols: 50,
      rows: 50,
      simulation_running: false,
      current_generation: 0,
      grid: null
    
}

export default createContext(store);