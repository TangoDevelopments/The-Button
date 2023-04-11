let count = 1

const changeNumber = () => {
    document.querySelector(".counter").innerText = count;
    count++;
}

document.querySelector("button").addEventListener("click", changeNumber)