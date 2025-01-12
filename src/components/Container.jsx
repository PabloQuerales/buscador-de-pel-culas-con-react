import Card from "./Card"
import Header from "./Header"
import SearchBar from "./SearchBar"

export default function Container(){
  return(
    <div className="container d-flex flex-column align-items-center gap-5 m-5">
      <Header/>
      <SearchBar/>
      <Card/>
    </div>
  )
}