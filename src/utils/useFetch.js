import {useEffect, useState} from "react";
import Papa from "papaparse";

//fetch data from csv file
export default function useFetch(path) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await fetch(path)
                    .then(response => response.text())
                    .then(responseText => {
                        setData(removeDuplication(Papa.parse(responseText, {header: true}).data));
                    });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [path]);
    return {isLoading, error, data};
}

// remove duplication data which comes from csv file
function removeDuplication(arr) {
    return arr.reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title && item.gender === current.gender && item.sale_price === current.sale_price);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
}
