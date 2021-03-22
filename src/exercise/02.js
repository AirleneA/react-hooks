// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  
  // useState, quando recebe um valor estático, vai sempre inicializar
  //o componente em toda atualização do componente que houver.
  //Para evitar isso, em vez de passar o valor estático, passamos a FUNÇÃO
  //que será chamado e iicializara a variável de estado apenas quando necessário
  //Isso é chamado de LAZY INITIALIZER (inicializador "Preguicoso")
  const [name, setName] = React.useState(window.localStorage.getItem('name')|| initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  React.useEffect(() => {
 //Atualizando p localStorage como um efetio colateral de atualização do
 //componente que foi disparada pela atualização
    window.localStorage.setItem('name', name)
  }, [name]) // Dependencia -> só chama useEffect quando a variável de estado name for alterada
  
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
