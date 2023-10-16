const endpointsklep = "http://192.168.15.10/wordpresskk"
const endpointhurtownia = "http://192.168.15.7/kgwordpress"

const idproduktusklep = 93
const idproduktuhurtownia = 35

async function getProd(){

     const data = await fetch(endpointsklep + "/wp-json/wc/v3/products/93", {
        headers: {
            authorization: `Basic ${btoa("kamil:kamil")}`
        }
     })
     const json = await data.json()
     console.log(json)

}
getProd()