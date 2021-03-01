import { useEffect } from 'react';
import useTimeRestrictedAxios from './useTimeRestrictedAxios';
import axios from '../api/birdie'; 

const useTimeRestrictedSearch = ({query, setResults, url}) => {
    const [get] = useTimeRestrictedAxios({axios, delay: 1000, setResponse: setResults});

    useEffect(async () => {
        if (query.length < 4) {
            setResults([]);
            return;
        }
        await get(`${url}/${query}`, { withCredentials: true });
    }, [query]);
}

export default useTimeRestrictedSearch;