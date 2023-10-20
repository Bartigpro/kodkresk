async function getProd(){

    const data = await fetch("https://api.github.com/user/repos", {
       headers: {
           authorization: `Token ${"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"}`
       }
    })
    const json = await data.json()
    const list = document.createElement("ul")
    for(let i in json){

       
        const body = document.querySelector("body")
       
        const frag = document.createElement("li")
        frag.setAttribute("id", `${i}`)
      
        frag.innerHTML =  json[i].full_name + "   ID: " + json[i].id
        frag.setAttribute("onhover", json[i].id)
        body.appendChild(list)
        list.appendChild(frag)

    }
}
getProd()



