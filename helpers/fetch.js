const URL = "http://localhost:3333/api/transactions"

export function getAllTransactions(){
        return fetch(URL)
        .then((res)=> res.json())
}

export function getOneTransaction(id){
    return fetch(`${URL}/${id}`)
    .then((res)=> res.json())
}
