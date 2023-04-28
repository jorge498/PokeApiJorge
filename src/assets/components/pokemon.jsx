function Pokemones({ pokemon }){

return(
<>
<main>
<>
  <ul>
    {
      pokemon?.map((pokemon)=> (
        <li>
          {pokemon.name}
          <br />
          {pokemon.url}
        </li>
      )) 
    }
  </ul>
</>

</main>
</>
)
}
function NoHayResultados(){
    return (
        <p>Asegurese que el pokemon esta bien escrito  </p>
    )
}


export function Pokemon( { pokemon } ) {

  const hayPokemon = pokemon?.length > 0
   
    return (
        hayPokemon?
       <Pokemones pokemon={ pokemon } /> 
       : 
          <NoHayResultados/>       
    )
}

