import { useState,useEffect } from "react";
import {searchMovies,nowPlayingMovies} from "../data/TheMovieDbSource"
import SearchBar from "../components/SearchBar";
import ListMovie from "../components/ListMovie";

const ExploreMovie = ()=>{
    const [filterText,setFilterText] = useState('');
    const [data,setData] = useState([])
    const handleFilterTextChange=async (filterText)=>{
        const movieSearch = await searchMovies(filterText) || await nowPlayingMovies();
        setFilterText(filterText);
        setData(movieSearch);
    }
    useEffect(()=>{
        const fetchData = async () => {
            const movies = await nowPlayingMovies();
            setData(movies)
        }
        fetchData()
    },[])
    return (
        <>
        <SearchBar onFilterTextChange={handleFilterTextChange}/>
        <ListMovie movies = {data}/>
        </>
    )
}
export default ExploreMovie