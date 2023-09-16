import useSWR from 'swr'

function fetcher(id:number) {
    
    return fetch(`/api/texts/${id}`).then(data => data.json())

}

export default function useGetText(id:number) {
    
    const { data, isLoading } = useSWR('text',() => fetcher(id) )

    return {
        text:data,
        isLoading
    }

}