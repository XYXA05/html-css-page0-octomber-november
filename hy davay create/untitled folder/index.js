console.log('Outside');

function onSearchClick() {
    console.log('Inside');
    const element = document.getElementById("search-expand");
    element.classList.remove("hidden-10");
}