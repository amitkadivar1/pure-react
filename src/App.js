const Car =()=>{
    return React.createElement('div',{},[
    React.createElement('h1',{},'HondaCity'),
     React.createElement('h2',{},'2016'),
     React.createElement('h2',{},'10L'),
    ])
}

const App = ()=>{
    return React.createElement('div',{},[
        React.createElement("h1",{},'Car Detail'),
        React.createElement(Car)
    ])
}

ReactDOM.render(React.createElement(App),document.getElementById('root'))