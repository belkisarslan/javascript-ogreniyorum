async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
    const data = await response.json()
    data.forEach(i => {
        console.log('i', i)
    });
}
fetchPosts()