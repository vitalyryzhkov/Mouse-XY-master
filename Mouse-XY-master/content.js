// window.onclick = mouseXY;

// function mouseXY(e) {
//     console.log(`Position: (X: ${e.clientX}, Y: ${e.clientY})`);
//     // alert(`Position: (X: ${e.clientX}, Y: ${e.clientY})`);
// }

chrome.runtime.sendMessage('get-user-data', (response) => {
    console.log('received user data', response);
    initializeUI(response);
});