import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return (
    <div>
      <h1>
        Custom App | Chai aur react
      </h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit goodle'
// }

const anotherElement = (
  <a href ="https://google.com" target='_blank'> Visit Google
  </a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: "https://google.com",target:'_blank'},
  'click me to visit goolgle',
  anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <App />
    
    <Chai/>
  </React.StrictMode>,

)
