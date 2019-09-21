# OrcidJS
This is a small script that allows you to get the information of all the publication information of a given Orcid.
You have to configure the script (in the HTML file) with your orcid and set where to print it. 

# Basic Usage
Look at the index.html file attached to the repository to see how it works.
Install the ```js``` files in a folder and add them to the HTML web page.
````
    <script src="js/getOrcidPubs.js"></script>
    <script src="js/Publication.js"></script>
```` 
In this version, just create an element somewhere in your home page, for example:
````
    <h1>Publications</h1>
    <div id="myPublications"></div>
````
Then setup the script with your Orcid. that's it.  
```
    <script>
        printPubList("0000-0001-8041-4403", "myPublications");
    </script>
```