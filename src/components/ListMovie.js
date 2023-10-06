import ItemMovie from "./ItemMovie";
const ListMovie = ({movies})=>{
    if(movies.length<=0){
        return (
            <section className="msg-failed mt2">
              <h2 className="center">there is no movie data to display</h2>
            </section>
          );
    }
    return (
        <section className="list-movie mt2">{
          movies.map((movie, i) => {
            return (<ItemMovie key={i} dataMovie = {movie} />);
          })
        }
        </section>
      );
}
export default ListMovie;