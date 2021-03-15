var addButton = document.getElementById("addB");
var delButton = document.getElementById("delB");

addButton.onclick = function addFunction()
{
    var subjectNr = prompt("Bitte geben Sie Ihr Fachnummer ein: ");
    var url = prompt("Bitte geben Sie die URL an: ");
    var shortcut = prompt("Bitte geben Sie ihren Shortcut ein: ");

    if(subjectNr === "" || url === "" || shortcut === "")
    {
        alert("Falsche Eingabe!");
    }
    else
    {
        var node = document.createElement("p");
        var link = document.createElement("a");
        link.setAttribute("href", url);
        node.appendChild(link);
        var textnode = document.createTextNode(shortcut);
        link.appendChild(textnode);
        var subjectDiv = document.getElementById("subject" + subjectNr);
        subjectDiv.appendChild(node);
    }
}

delButton.onclick = function delteFunction ()
{
    var subjectNr = prompt("Bitte geben Sie Ihr Fachnummer ein: ");
    if(subjectNr === "")
    {
        alert("Falsche Eingabe!");
    }
    else
    {
        var targetDiv = document.getElementById("subject" + subjectNr);
        targetDiv.removeChild(targetDiv.lastChild);
    }

}





