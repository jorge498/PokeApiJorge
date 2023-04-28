import { useState } from 'react'
import './App.css'
import { useFetch } from './assets/hooks/useFetch'
import { Pokemon } from './assets/components/pokemon'

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon/`
  const [termino,setTermino ]= useState('')
  const { data } = useFetch(url+termino) 
  const onSearch = (event) => {
    event.preventDefault()
    const inputValue = (document.querySelector('#busqueda').value).toLowerCase()
    setTermino(inputValue)
  } 
    return (
      <>
      <div>
       <h1>Consuminedo la poke api  </h1>
      <form onSubmit={onSearch}>
      <input type="text" placeholder='Ingrese el pokemon que desea buscar ' id='busqueda'/>
      <input type="submit" value ="Buscar pokemon"  />
      </form>
      </div>
      
      <main>
       <Pokemon pokemon={data}></Pokemon>      
      </main>
        
      </>
    )
  
}

export default App
