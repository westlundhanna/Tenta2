async function getInsults() {
    let listItems = document.querySelectorAll('li')
        for(let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i]
            listItem.addEventListener("click", async (event) => {
                const request = await fetch('http://localhost:8090/insults/' + i, {
                method: 'GET'
            })
                const data = await request.json()
                console.log(data.severity)
                return data.severity
            })
            
        }

}
getInsults()