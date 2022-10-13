let API_KEY_DATA = '';

// Get key data from the local storage.
if (API_KEY_DATA == '') {
    API_KEY_DATA = localStorage.getItem('localkeydata');
}

// You can also save your key with this function.
// const setKeyData = function (argument) {
//     localStorage.setItem(localkeydata, argument);
// }