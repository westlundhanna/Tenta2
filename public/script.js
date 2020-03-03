async function getInsults() {
    let listItems = document.querySelectorAll('li')
        for(let i = 1; i <= listItems.length; i++) {
            let listItem = listItems[i-1]
            listItem.addEventListener("click", async (event) => {
                const request = await fetch('http://localhost:8090/insults/' + i, {
                method: 'GET'

            })
                const data = await request.json()
                let insultsContainer = document.querySelector(".Insults__Container")
                insultsContainer.innerHTML = ""

                if(typeof data.severity !== "undefined") {
                    for(let j = 0; j <= data.severity.length; j++) {
                        let h3 = document.createElement('h3')
                        h3.innerHTML = await JSON.stringify(data.severity[j].text)
                        insultsContainer.append(h3)
                        let p = document.createElement('p')
                        p.innerHTML = await JSON.stringify(data.severity[j].origin)
                        insultsContainer.append(p)
                        
                    }
                }else{
                    let errorMessage = document.createElement('p')
                    errorMessage.innerHTML = "No insults found"
                    insultsContainer.append(errorMessage)
                }
                return data
            })
            
        }

}
getInsults()