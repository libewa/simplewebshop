const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const colorIndices = {
    "black": 0,
    "blue": 1,
    "green": 2
}
var colorPicker = document.getElementById("color")
colorPicker.selectedIndex = colorIndices[urlParams.get("color")]
document.getElementById(`img_${urlParams.get("color")}`).style.display = "block"

colorPicker.onchange = () => {
    for (e of colorPicker.options) {
        document.getElementById(`img_${e.value}`).style.display = "none"
    }
    document.getElementById(`img_${colorPicker.options[colorPicker.selectedIndex].value}`).style.display = "block"
}