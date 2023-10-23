import './App.css'
import PokemonList from './components/PokemonList'
import SearchInput from './components/SearchInput'

function App() {

  return (
    <section className='pokemon'>
      <SearchInput />
      <PokemonList />
    </section>
  )
}

export default App