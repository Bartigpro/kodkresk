const endpointsklep = "http://localhost/wordpress"
const endpointhurtownia = "http://192.168.15.7/kgwordpress"

const idproduktusklep = 93
const idproduktuhurtownia = 35
var dane_zam = []

async function getProd(){

     const data = await fetch(endpointsklep + "/wp-json/wc/v3/products/17", {
        headers: {
            authorization: `Basic ${btoa("barto:Bartigzz")}`
        }
     })
     const json = await data.json()
     console.log(json.stock_quantity)
     const iloscprodoktowwsklepie = json.stock_quantity

     if(iloscprodoktowwsklepie <=10 && dane_zam != undefined){
          console.log("bullets")
          zamowienia()
     }
     else{
          console.log("jest g")
     }


}


setInterval(() => {getProd()},5000)
getProd()

async function zamowienia(){
     const url = new URL(endpointhurtownia)

     const params = {"lineitems": ({product_id: 17, quantity: 134})
}

for(let i in params){
     url.searchParams.append(i, params[i])
}
const data = await fetch(url, {
     method: "POST",
     headers: {
          authorization: `Basic ${btoa("hurtownia:hurtownia")}`
     }

  })
  const dane_zam = await data.json()
  console.log(dane_zam)
     }

