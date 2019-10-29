function includeJS(incFile) {
    document.write('<script type="text/javascript" src="'+ incFile+ '"></script>');
}


async function getPubList(orcid) {
    includeJS("js/Publication.js");
    includeJS("js/ParseBibtex.js");
    let link = "https://pub.orcid.org/v2.0/" + orcid + "/works";
    let list = [];
    await httpOrcidGet(link).then(async function (data) {
        data = JSON.parse(data);
        for (let i in data.group) {
            let publink = "https://pub.orcid.org/v2.0/" + orcid + "/work/" + data.group[i]["work-summary"][0]["put-code"];
            let pub = await httpOrcidGet(publink).then(function (pubdetails) {
                pubdetails = JSON.parse(pubdetails);
                return new ParseBibtex(pubdetails["citation"]["citation-value"]);
            });
            list.push(pub);
        }
    });
    return list;
}

function httpOrcidGet(url) {
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

async function printList(orcid, idelement, sort=false) {
    let publist = await getPubList(orcid);
    if (sort===true) {
        publist.sort(function (a,b) {
            return b._year - a._year;
        });
    }
    let year = publist[0]._year;
    document.getElementById(idelement).innerHTML = "<h1>"+year+"</h1>";
    for (let i=0; i<publist.length; i++) {
        let head="";
        if (publist[i]._year !== year) {
            year =publist[i]._year;
            head = "<h1>"+year+"</h1>";
        }
        let output = publist[i].printDetails();
        document.getElementById(idelement).innerHTML += head + output;
    }
}
