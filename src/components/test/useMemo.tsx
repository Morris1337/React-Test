import React, { useMemo } from 'react';

    const MovieList = ({ movies, tab }) => {

        const visibleMovie = useMemo(
          () => filterMovies(movies, tab),
          [todos, tab]
        );
      
        // ...
      }
      