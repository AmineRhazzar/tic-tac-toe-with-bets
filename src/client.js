function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

function getRoomState(callBackSuccess) {
    return fetch('http://localhost:5000/testroom', {
        headers: {
            Accept: 'application/json',
        },
    }).then(checkStatus)
        .then(parseJSON)
        .then(callBackSuccess);
}

function updateRoomState(data) {
    return fetch('http://localhost:5000/testroom', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
}



module.exports = {
    getRoomState,
    updateRoomState
};