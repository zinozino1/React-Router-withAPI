import React, { useState, useEffect } from "react";

const usePromise = (promiseCreator, deps) => {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        console.log("loading중...");
        const executeFetch = async () => {
            try {
                const result = await promiseCreator();
                setResolved(result);
                console.log("resolve 완료");
            } catch (error) {
                setError(error);
            }
            setLoading(false);
            console.log("loading 끝...");
        };
        executeFetch();
    }, deps);

    return [resolved, loading, error];
};

export default usePromise;
