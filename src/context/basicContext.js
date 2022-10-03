import { createContext, useEffect, useState } from "react";

const ls = localStorage;

const CountrieList = createContext();
const CountrieListProvider = ({children})=>{    
    const initialCountrieList = ls.getItem("countrieList") ?JSON.parse(ls.getItem("countrieList")) :[];
    
    //paese per aggiungere
    const [addCountrie, setAddCountrie] = useState(null);
    //lista dei paesi per aggiungere
    const [countrieList, setCountrieList] = useState(initialCountrieList);

    //effect per modificare il countrieList
    useEffect(() => {        
        if(addCountrie!==null){
            if(countrieList.find(e=>e.nativeName===addCountrie.nativeName)){
                const newCnLs = countrieList.filter(e=>e.nativeName!==addCountrie.nativeName);
                setCountrieList(newCnLs);
            }else{                
                setCountrieList([...countrieList,addCountrie]);
            };
        }        
    }, [addCountrie]);


    //effect per salvare le modifiche nell LocalStorage
    useEffect(() => {
        ls.setItem("countrieList",JSON.stringify(countrieList));
    }, [countrieList]);
    
    
    const data = {setAddCountrie,addCountrie,countrieList,setCountrieList};
    return <CountrieList.Provider value={data}>{children}</CountrieList.Provider>
};
export {CountrieListProvider};
export default CountrieList;