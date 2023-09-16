import useSWR from "swr"

const fetcher = (url:string) => {

    return fetch(url).then( data => data.json())

}

export default function useList() {
    
    const { data, isLoading } = useSWR('/api/texts',fetcher)

    return {
        list:data,
        isLoading
    }
}