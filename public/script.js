async function getInsults() {
    // Kallar på en server från en annan dator
    const request = await fetch('http://localhost:8080/insults', {
        method: 'GET'
    })
    const data = await request.json() // Hämtar och väntar på att listan blir klar
    console.log(data.insults)
    return data.insults
}