import {useWeb3React} from '@web3-react/core';
import {useCallback, useState, useEffect} from "react";
import usePlatziPunks from "../../hooks/usePlatziPunks";




const Home = () => {
    
    const {active} = useWeb3React();
    const [maxSupply, setMaxSupply] = useState();

    const  PlatziPunks = usePlatziPunks();

    const getMaxSupply = useCallback(async () => {
        if(PlatziPunks) {
            const result = await PlatziPunks.methods.maxSupply().call();
            setMaxSupply(result)
        }
    }, [PlatziPunks])
   
    useEffect(() => {
        getMaxSupply();
      }, [getMaxSupply]);
    
    

    if(!active) return "Conecta la Wallet";

    return (
        <>
        <p>Max Supply: {maxSupply}</p>
        </>
    );
};

export default Home;