import { useEffect } from "react";


const useTitle = (title) => {
  useEffect(() =>{
    document.title = `${title} - Cafe Fajitas`
  },[title])
    
};

export default useTitle;