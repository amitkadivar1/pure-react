// Pure React Concept 
const Car =({name,model,price})=>{
    // Destructore Concept
    return React.createElement('div',{},[
    React.createElement('h1',{},name),
     React.createElement('h2',{},model),
     React.createElement('h2',{},price),
    ])
}

const App = ()=>{
    return React.createElement('div',{},[
        React.createElement("h1",{},'Adopt Me!'),
        React.createElement(Car,{name:'HondaCity',model:'2016',price:'10L'}),
        React.createElement(Car,{name:'Fortuner',model:'2019',price:'26L'})
    ])
}

ReactDOM.render(React.createElement(App),document.getElementById('root'))