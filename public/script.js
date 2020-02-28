async function getInsults() {
    let listItems = document.querySelectorAll('li')
        for(let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i]
            listItem.addEventListener("click", async (event) => {
                const request = await fetch('http://localhost:8090/insults/', {
                method: 'GET'
            })
                const data = await request.json() // Hämtar och väntar på att listan blir klar
                console.log(data.insultsJSON)
                return data.insultsJSON
            })
            
        }

}
getInsults()