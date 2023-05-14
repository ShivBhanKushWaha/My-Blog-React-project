// custom hook create by me for fetching the data from server
import { useEffect ,useState } from 'react';

const useData = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data for that resources');
          }
          // console.log(res);
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if(err.name === 'AbortError'){
            console.log('fetch aborted');
          }
          else{
            setIsPending(false);
            setError(err.message);
          }
        })
    }); // we can use set time like 1000 to delay the output

    return () => abortCont.abort();
  },[url]);
  return {data,isPending,error};
}

export default useData;