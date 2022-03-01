function func1(){
    console.log('birinci çalıştı')
    func2()
    console.log('birinci tekrar çalıştı')
}
function func2(){
    console.log('ikinci çalıştı')
    func3()
    console.log('ikinci tekrar çalıştı')
}
function func3(){
    console.log('üçüncü çalıştı')
}
func1()



async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
    const data = await response.json()
    data.forEach(i => {
        console.log('i', i)
    });
}
fetchPosts()

