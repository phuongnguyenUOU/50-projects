const insert = document.getElementById('insert')

window.addEventListener('keydown', (event => {
    const { key, keyCode, code } = event;
    insert.innerHTML = `
    <div class="key">
    ${key === '' ? 'Space' : key}
    <small>key</small>
    </div>

    <div class="key">
    ${keyCode}
    <small>keyCode</small>
    </div>

    <div class="key">
    ${code}
    <small>Code</small>
    </div>
    `
}))
