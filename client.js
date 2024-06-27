const eventSource = new EventSource('http://localhost:8000')


eventSource.onmessage = msg => {
    console.log(msg)
}

eventSource.onopen = msg => {
    console.log('connection opened')
    console.log(msg)
}