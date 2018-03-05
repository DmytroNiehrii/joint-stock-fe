export function loadUsers(callback){
    fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            callback(data.content)
        })
        .catch(err => {
            console.error('Can\'t fetch items')
        })

}