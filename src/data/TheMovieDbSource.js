import API_ENDPOINT from "../globals/api-endpoint";

export const nowPlayingMovies=async ()=>{
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
}
export const searchMovies=async (search)=>{
    const response = await fetch(API_ENDPOINT.SEARCH(search));
    const responseJson = await response.json();
    return responseJson.results;
}
export const upcomingMovies=async ()=>{
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
}
export const detailMovie=async (id)=>{
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
}

