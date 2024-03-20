import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'istanbul',
                    limit: 20,
                }
            })
            setResults(response.data.businesses) //useState ile datayı state içina at
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Bağlanti Hatasi Mevcut')
        }
    }

    useEffect(() => {
        searchApi('Toast')
    }, [])

    return [searchApi, results,errorMessage] // stateyi dışarı aç
}