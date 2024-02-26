

const searchOne = document.getElementById("leftSearchForm")

searchOne.addEventListener("submit", e => {
    e.preventDefault();
    const leftSearchValue = document.getElementById("leftSearch").value;
    console.log(leftSearchValue);
    searchOne.reset();
})

