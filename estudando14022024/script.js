document.getElementById('verify-btn').addEventListener('click', function() {
    document.getElementById('pop-up').style.display = 'block';
});

document.getElementById('confirm-btn').addEventListener('click', function() {
    document.getElementById('pop-up').style.display = 'none';
});

function replaceString() {
    let string = parseFloat(document.getElementById('inputword'))
}