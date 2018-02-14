export function loadUsers(callback){
    console.log('==> loadUsers()')
    fetch('http://localhost:8090/api/user')
        .then(response => response.json())
        .then(data => {
            callback(data.content)
        })
        .catch(err => console.error(err.toString()))

}