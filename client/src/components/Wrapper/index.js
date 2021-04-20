import React from 'react'

export default function Wrapper() {
    return (
        <div className="Wrapper">
            <header className="Wrapper-header">
                <img src={logo} className="Comedy-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    rel="noopener noreferrer"
                >
                    Learn React
          </a>
            </header>
        </div>
    );
}

export default App;