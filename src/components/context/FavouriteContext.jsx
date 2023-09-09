import React, {useState} from 'react';

const FavContext = React.createContext();

export function FavContextProvider({children}){
    const [favItems, setFavItem] = useState([]);

    const addToFav = (id, name, price) => {
        setFavItem((prevFavs) => [...prevFavs, {id, name, price}])
    }

    const removeFromFav = (id) => {
        setFavItem((current) => 
        current.filter((item) => item.id !==id)
        );
    }

    return(
        <FavContext.Provider value={{favItems, addToFav, removeFromFav}}>
            {children}
        </FavContext.Provider>
    )
}



export default FavContext;