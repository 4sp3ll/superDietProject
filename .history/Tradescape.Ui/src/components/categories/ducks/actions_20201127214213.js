export const RECEIVE_DATA = 'RECEIVE_DATA'


function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

function receiveData(chosenCategoryId, json) {
    return {
        type: RECEIVE_DATA,
        chosenCategoryId,
        posts: json.data.children.map(child => child.data),
    }
}


function fetchData(chosenCategoryId, action) {
    return fetch => {
        return fetch(`${process.env.REACT_APP_API}/api/categories/${chosenCategoryId}`)
            .then(result => result.json())
            .then(json => dispatch(receiveData(chosenCategoryId, json)))
    }
}