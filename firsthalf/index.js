const APIKEY = '47428f5f18b3afcd1dadc445b030afb6'

// fetch with callback and promises

const fetchCallWithCallback=(cb)=>{
    const response = fetch("https://favqs.com/api/qotd",
   {headers:{
        Authorization: `Token token=${APIKEY}`,
        "Content-Type": "application/json"
    }}).then((response)=>response.json())
        .then((data)=>cb(data))
            .catch((error)=>console.error(error))
}

const callbackFetch =(data)=>{
    console.log("Fetch Callback", data)
    //do stuff with data
}

fetchCallWithCallback(callbackFetch)



// const fetch async and await
const fetchCallWithAsyncAwait= async () => {
   const response = await fetch("https://favqs.com/api/qotd",
   {headers:{
        Authorization: `Token token=${APIKEY}`,
        "Content-Type": "application/json"
    }})
    data = await response.json()
    console.log("fetch async await", data)
    // do stuff with data
}

fetchCallWithAsyncAwait()


// AXIOS
// with a callback then chains
const axiosWithCallback=(cb)=>{
    axios.get("https://favqs.com/api/qotd",{
        headers:{
            Authorization: `Token token=${APIKEY}`,
            "Content-Type": "application/json"
        }
    }).then((response)=>cb(response.data))
        .catch((error)=>console.error(error))

}

const callBackAxios=(data)=>{
    console.log("Axios with callback",data)
    //do stuff with our data

}
axiosWithCallback(callBackAxios)

// AXIOS async await

const axiosCallWithAsyncAwait = async () =>{
    const response = await axios.get("https://favqs.com/api/qotd",{
        headers:{
            Authorization: `Token token=${APIKEY}`,
            "Content-Type": "application/json"
        }
    })
    data= response.data
    console.log("Axios Async Await", data)
    //use Data here
}
