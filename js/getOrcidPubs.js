function printPubList(orcid, idelement) {
    let list = [];
    let link = "https://pub.orcid.org/v2.0/" + orcid + "/works";
    httpGet(link).then(function (data) {
        data = JSON.parse(data);
        for (let i in data.group) {
            let linkpub = "https://pub.orcid.org/v2.0/" + orcid + "/work/" + data.group[i]["work-summary"][0]["put-code"];
            httpGet(linkpub).then(function (pubdetails) {
                pubdetails = JSON.parse(pubdetails);
                let pub = createPubObj(pubdetails["citation"]["citation-value"]);
                printElement(pub, idelement);
                list.push(pub);
            });
        }
    });
    return list;
}

function httpGet(url) {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status >= 300) {
                    reject("Error, status code = " + request.status)
                } else {
                    resolve(request.responseText);
                }
            }
        };
        request.open('get', url, true);
        request.setRequestHeader("Accept", "application/orcid+json");
        request.send();
    });
}

function createPubObj(details) {

    let reg = /title *= *\{(.*?)\}/;
    let s = details.match(reg);
    let title = s[1];

    reg = /author *= *\{(.*?)\}/;
    s = details.match(reg);
    let author = s[1];

    reg = /booktitle *= *\{(.*?)\}/;
    s = details.match(reg);
    if (s == null) {
        reg = /journal *= *\{(.*?)\}/;
        s = details.match(reg);
    }
    let confjournal = s[1];

    reg = /volume *= *\{(.*?)\}/;
    s = details.match(reg);
    let volume = null;
    if (s != null) {
        volume = s[1];
    }

    reg = /pages *= *\{(.*?)\}/;
    s = details.match(reg);
    let pages = s[1];

    reg = /year *= *\{(.*?)\}/;
    s = details.match(reg);
    let year = s[1];

    reg = /organization *= *\{(.*?)\}/;
    s = details.match(reg);
    if (s == null) {
        reg = /publisher *= *\{(.*?)\}/;
        s = details.match(reg);
    }
    let organization = s[1];
    return new Article(author, title, confjournal, volume, pages, year, organization);
}

function printElement(e, idelement) {
    let output = e.printDetails();
    document.getElementById(idelement).innerHTML += output;
}