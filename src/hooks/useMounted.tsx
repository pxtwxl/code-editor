"use client";
import { useEffect, useState } from 'react'

const useMounted = () => {
    const [mounted,setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;
  
    return mounted;
}

export default useMounted
