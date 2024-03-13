const btn = document.getElementById('button')


async function requestApi(){
    const url = `https://cat-fact.herokuapp.com/facts`
    const request =  await fetch(url) 
    const result = await request.json()
    let randomNumber = Math.floor(Math.random() * result.length)
    return result[randomNumber].text
}

btn.addEventListener('click', async()=>{
   const resultado =  await requestApi()
   const input = document.getElementById('boxText')

   if(resultado){
        input.innerHTML = resultado
    
   }
})
