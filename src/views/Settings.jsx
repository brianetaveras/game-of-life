import React from 'react';



function Settings(props) {
    return (
        <div id="settings-page">
            <div className="settings-container">

                <h1>Conway's Game of Life</h1>
                <p>
                    The 'Game of Life' is not actually a game, but a 'cellular automation' invented by John Conway in 1970. Each cell in a grid represents a biological cell, and the cells will live or die based on a set of mathematical rules. A player interacts with the game only at the beginning by setting an inital configuration of the grid and then observing the outcome.
            </p>
                <h2>The Rules:</h2>
                <ul>
                    <li>
                        Any live cell with fewer than two live neighbors dies, as if by underpopulatio
                </li>
                    <li>
                        Any live cell with two or three live neighbors lives on to the next generation.
                </li>
                    <li>
                        Any live cell with more than three live neighbors dies, as if by overpopulation.
                </li>
                    <li>
                        Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                </li>
                </ul>
                <p>
                    The first generation is created by applying the above rules to the initial configuration of the grid. Deaths and births occur simultaneously and the next generations and created applying the rules to the new configuration.
            </p>

                <h2>Initial Settings</h2>
                <h4 className="settings-label">Columns</h4>
                <div className="number-selector-container">
                    <button onClick={() => {
                        props.adjustColOrRow('cols', 'decrease')

                    }} className="left-arrow">-</button>
                    <input onChange={props.handleInput} name="cols" type="number" value={props.cols} className="number-container" />
                    <button onClick={() => {
                        props.adjustColOrRow('cols', 'increase')
                    }} className="right-arrow">+</button>
                </div>
                <h4 className="settings-label">Rows</h4>
                <div className="number-selector-container">
                    <button onClick={() => {
                        props.adjustColOrRow('rows', 'decrease')

                    }} className="left-arrow">-</button>
                    <input onChange={props.handleInput} name="rows" type="number" value={props.rows} className="number-container" />
                    <button onClick={() => {
                        props.adjustColOrRow('rows', 'increase')
                    }} className="right-arrow">+</button>
                </div>
                <button onClick={() => { props.history.push('/game') }} className="start-button">Take me there</button>
                {props.cols > 50 || props.rows > 50 ? (
                    <div className="warning">
                        These settings will required a lot of processing power. I sure hope your device can handle it :)
                    </div>
                ) : null}
            </div>

        </div>
    )
}

export default Settings;