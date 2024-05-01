
const { VITE_API_URL } = import.meta.env

export async function getValues() {
    let res = await fetch(VITE_API_URL);
    return await res.json()
}

export async function setNewValues(arrayValuesObjects) {
    let res = await fetch(VITE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(arrayValuesObjects)
    });
    return
}

export async function findByNameReturnIndex(nome) {
    const {id} = await getValues().find(el => el.name === nome);
    return id
}

export async function findByIndex(id) {
    let res = await fetch(VITE_API_URL+"/"+id);
    return await res.json()
}

export async function updateValue(id, chave, valor, op) {
    let res = await fetch(VITE_API_URL+"/"+id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({chave, valor, op})
    });
    return
}
