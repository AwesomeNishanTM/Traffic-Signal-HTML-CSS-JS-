function red() {
    document.getElementById('red').style.backgroundColor = 'red'
    document.getElementById("signal-text").innerText = 'red'
    setTimeout(function() {
        document.getElementById('red').style.backgroundColor = ''
        yellow()
    }, 2000)

}

function yellow() {
    document.getElementById('yellow').style.backgroundColor = 'yellow'
    document.getElementById("signal-text").innerText = 'yellow'
    setTimeout(function() {
        document.getElementById('yellow').style.backgroundColor = ''
        green()
    }, 2000)

}

function green() {
    document.getElementById('green').style.backgroundColor = 'green'
    document.getElementById("signal-text").innerText = 'green'
    setTimeout(function() {
        document.getElementById('green').style.backgroundColor = ''
        red()
    }, 2000)
}



document.getElementById("lightButtonOn").addEventListener('click', () => {
    red()

})