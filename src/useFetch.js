import { useState } from "react";


export function useFetch(uri) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    if (!uri) return;

    fetch(uri)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)

    return { loading, data, error }
}