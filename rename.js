var name = prompt('Tab Name');
if (name != "") {
    var title = document.getElementsByTagName('title');
    title[0].innerHTML = name;
}
