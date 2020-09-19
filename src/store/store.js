import {createContext} from 'react'


export const store = {
      cols: 30,
      rows: 30,
      simulation_running: false,
      current_generation: 0
    
}

export default createContext(store);