import { createContext, useEffect, useState } from "react";

const ls = localStorage;

const FavListContext = createContext();
const FavListProvider = ({children})=>{    
    const [favList, setFavList] = useState(undefined);

    useEffect(() => {
        ls.setItem("countryFavList",JSON.stringify(favList));
    }, [favList]);
    
    const data = {favList,setFavList};
    return <FavListProvider value={data}>{children}</FavListProvider>
};
export {FavListProvider};
export default FavListContext;