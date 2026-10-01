const loadingBar = document.getElementById("loadingBar");

async function task() {
    return new Promise((res) => {
        setTimeout(res, Math.random() * 5000);
    });
}

function loadingBarStatus(current, max) {
    loadingBar.textContent = `Loading ${current} of ${max}`;
}

(async () => {
    let current = 1;
    const promises = new Array(100)
        .fill(0)
        .map(() => task().then(() => loadingBarStatus(current++, 100)));

    await Promise.all(promises);
    loadingBar.textContent = `Loading Finished`;
})();
