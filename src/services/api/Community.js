export function loadCommunities(callback){
    fetch('/api/community')
        .then(response => response.json())
        .then(data => {
            callback(data.content)
        })
        .catch(err => {
            console.error('Can\'t fetch communities')
        })
}