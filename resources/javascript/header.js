
function displayHeader() {
    document.write("<nav id=\"nav\">")
    document.write("<ul>")
    document.write("\t<li><a href=\"index.html\">Home</a></li>")
    document.write("\t<li><a href=\"general-developer-help.html\">General Developer Help</a></li>")
    document.write("\t<li><a href=\"file-navigation.html\">Basic File Navigation</a></li>")
    document.write("\t<li><a href=\"github-help.html\">Help with GitHub</a></li>")
    document.write("\t<li><a href=\"vscode-help.html\">Help with Visual Studio Code</a></li>")
    document.write("\t<li><a href=\"python-help.html\">Help with Python</a></li>")
    document.write("\t<li><a href=\"ai-interest.html\">Interesting (to me) AI Links</a></li>")
    document.write("\t<li><a href=\"projects.html\">Projects</a></li>")
    document.write("\t<li class=\"burger\"><a href=\"#\" id=\"burger\" class=\"fa fa-bars\"></a></li>")
    document.write("</ul>")
    document.write("</nav>")
}

displayHeader()