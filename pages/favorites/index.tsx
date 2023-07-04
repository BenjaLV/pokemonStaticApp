import { useState, useEffect } from 'react'

import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import FavoritePokemons from '@/components/pokemon/FavoritePokemons';

const FavoritePage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokémons Favoritos'>

      {favoritesPokemons.length === 0
        ? (<NoFavorites />)
        : (
          <FavoritePokemons favoritesPokemons={favoritesPokemons} />
        )}

    </Layout>
  )
}


export default FavoritePage;