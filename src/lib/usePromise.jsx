import React, { useState, useEffect } from "react";

const usePromise = (promiseCreator, deps) => {
    const [loading, setLoading] = useState(false); // 대기중
    const [resolved, setResolved] = useState(null); // 완료결과
    const [error, setError] = useState(null); // 실패결과

    useEffect(() => {
        console.log("마운트완료");
        console.log(2);
        const process = async () => {
            setLoading(true); // 여기서 리렌더 1
            console.log("리렌더 1");
            try {
                const resolved = await promiseCreator();
                setResolved(resolved); // 리렌더 2
                console.log("리렌더 2");
            } catch (error) {
                setError(error);
            }
            setLoading(false); // 리렌더 3
            console.log("리렌더 3");
        };
        process();
    }, deps);
    return [loading, resolved, error];
};

export default usePromise;
