![200](logo.png)

# OrcidJS
This is a small script that allows you to get the information of all the publication details of a given Orcid.
OrcidJs is totally written in JS, so it does not need a server (such as APACHE or NGINX) to elaborate the information from the Orcid website.
You have to configure the script (in the HTML file) with a valid orcid and set where to print the list of the results. 


# Basic Usage
Look at the ```index.html``` file attached to this repository to see how the script works. 
To let it work on your website follow those steps.

### 1) Download and install
Download the source of the script and unzip it into the main folder of your website.
Copy the ```js``` files in a folder called "js" and add the link the HTML web page.
````
    <script src="js/getOrcidPubs.js"></script>
```` 

### 2) Configure the HTML file
In this version of the script, just create an element somewhere in your HTML page where the OrcidJS is going to print the results, for example:
````
    <h1>Publications</h1>
    <div id="myPublications"></div>
````

### 3) Configure the Script
Setup the script with your Orcid: call `````printPubList(orcid, htmlid, sort, classify)`````. Where:

`orcid` is the Orcid of the author you want to list the publications.

`htmlid` is the HTML element ID you created in step 2).

`sort` is a boolean variable that you can use to sort by year the publications before printing.

`classify` is a boolean variable that you can use to sort and print articles with "Journal or Book, Conference, Other" headings.

For example:
```
    <script>
        printPubList("0000-0001-8041-4403", "myPublications", sort=false, classify=true);
    </script>
```
### NOTES
The script only parse Bibtex records stored on the Orcid Web page. 
For a better result, I suggest you to import them from uniform sources.
For example, if you use Google Scholar, go on your profile, select all the files and export them as Bibtex.
On the Orcid website, import your publications from the Bibtex file you have just saved. 