import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SearchPresenter from "./SearchPresenter";
import {tvApi, movieApi} from '../../api';


export default () => {

    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies: [],
        tvs: [],
        moviesError: null,
        tvsError: null
    });

    const onChange = text => setKeyword(text);

    const Search = async() => {
        const [movies, moviesError] = await movieApi.search(keyword);
        const [tvs, tvsError] = await tvApi.search(keyword);
        setResults({
            movies,
            tvs,
            moviesError,
            tvsError
        });
        console.log(results.movies);
    }


    return(
      <SearchPresenter
          {...results}
          onChange={onChange}
          onSubmit={Search}
          keyword={keyword}
      />
    );
}

