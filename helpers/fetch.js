const URL = "http://localhost:3333/api/transactions"

export function getAllTransactions(){
        return fetch(URL)
        .then((res)=> res.json())
}

export function getOneTransaction(id){
    return fetch(`${URL}/${id}`)
    .then((res)=> res.json())
}

export function createTransaction(transaction) {
    const options = {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}`, options).then((response) => {
      return response.json();
    });
}

export function updateTransaction(id, transaction) {
    const options = {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}/${id}`, options).then((response) => {
      return response.json();
    });
}
