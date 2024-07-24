import { SearchBar } from "./SearchBar"


export const AppBar = ()=>{
    return <div className="flex justify-between m-2 pr-5 pl-5 ">
        <div>
            youtube logo
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            sign-in
        </div>
    </div>
}