class Publication{
    constructor(title, year, doi) {
        this._title = title;
        this._year = year;
        this._doi = doi;
    }

    get title() {
        return this._title;
    }

    get year() {
        return this._year;
    }

    get doi() {
        return this._doi;
    }

    printDetails(){
    }
}

// The following classes implement the different types of publication based on the latex syntax
// This class implements a general Article references
class Article extends Publication {
    constructor(author, title, doi, journal, year, volume, number, pages, month, note) {
        super(title, year, doi);
        this._author = author;
        this._journal = journal;
        this._volume = volume;
        this._number = number;
        this._pages = pages;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get journal() {
        return this._journal;
    }

    get volume() {
        return this._volume;
    }

    get number() {
        return this._number;
    }

    get pages() {
        return this._pages;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year + ', ';

        output += this.journal;
        if (this.volume != null) {
            output += ', Vol. ' + this.volume;
        }
        if (this.number != null) {
            output += ', N. ' + this.number;
        }
        if (this.pages != null) {
            output += ', pp. ' + this.pages;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi + '<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a book reference
class Book extends Publication {
    constructor(authorOrEditor, title, doi, publisher, year,volumeOrNumber, series, address, edition, month, note) {
        super(title, year, doi);
        this._authorOrEditor = authorOrEditor;
        this._publisher = publisher;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._address = address;
        this._edition = edition;
        this._month = month;
        this._note = note;
    }

    get authorOrEditor() {
        return this._authorOrEditor;
    }

    get publisher() {
        return this._publisher;
    }

    get volumeOrNumber() {
        return this._volumeOrNumber;
    }

    get series() {
        return this._series;
    }

    get address() {
        return this._address;
    }

    get edition() {
        return this._edition;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.authorOrEditor + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year + ', ';

        output += this.publisher;
        if (this.series != null) {
            output += ', ' + this.series;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.edition != null) {
            output += ', ' + this.edition;
        }
        if (this.volumeOrNumber != null) {
            output += ', Vol. ' + this.volumeOrNumber;
        }

        if (this.month!= null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a booklet reference
class Booklet extends Publication {
    constructor(title,author, doi, howpublished, address, month, year, note) {
        super(title, year, doi);
        this._author = author;
        this._howpublished = howpublished;
        this._address = address;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get howpublished() {
        return this._howpublished;
    }

    get address() {
        return this._address;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.howpublished != null) {
            output += ', ' + this.howpublished;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }

        if (this.month != null) {
            output += this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a inbook reference
class Inbook extends Publication {
    constructor(authorOrEditor, title, doi, chapterAndOrPages, publisher, year, volumeOrNumber, series, type, address, edition, month, note) {
        super(title, year, doi);
        this._authorOrEditor = authorOrEditor;
        this._chapterAndOrPages = chapterAndOrPages;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._type = type;
        this._address = address;
        this._edition = edition;
        this._month = month;
        this._note = note;
        this._publisher = publisher;
    }

    get authorOrEditor() {
        return this._authorOrEditor;
    }

    get chapterAndOrPages() {
        return this._chapterAndOrPages;
    }

    get publisher() {
        return this._publisher;
    }

    get volumeOrNumber() {
        return this._volumeOrNumber;
    }

    get series() {
        return this._series;
    }

    get type() {
        return this._type;
    }

    get address() {
        return this._address;
    }

    get edition() {
        return this._edition;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.authorOrEditor + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.publisher != null) {
            output += ', ' + this.publisher;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.edition != null) {
            output += ', ' + this.edition;
        }
        if (this.volumeOrNumber != null) {
            output += ', ' + this.volumeOrNumber;
        }
        if (this.series != null) {
            output += ', ' + this.series;
        }
        if (this.type != null) {
            output += ', ' + this.type;
        }
        if (this.chapterAndOrPages != null) {
            output += ', ' + this.chapterAndOrPages;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a incollection reference
class Incollection extends Publication {
    constructor( author, title, doi, booktitle, publisher, year,  editor, volumeOrNumber, series, type, chapter, pages, address, edition, month, note) {
        super(title, year, doi);
        this._author = author;
        this._bookTitle = booktitle;
        this._publisher = publisher;
        this._editor = editor;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._type = type;
        this._chapter = chapter;
        this._pages = pages;
        this._address = address;
        this._edition = edition;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get bookTitle() {
        return this._bookTitle;
    }

    get publisher() {
        return this._publisher;
    }

    get editor() {
        return this._editor;
    }

    get volumeOrNumber() {
        return this._volumeOrNumber;
    }

    get series() {
        return this._series;
    }

    get type() {
        return this._type;
    }

    get chapter() {
        return this._chapter;
    }

    get pages() {
        return this._pages;
    }

    get address() {
        return this._address;
    }

    get edition() {
        return this._edition;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.bookTitle!= null) {
            output += ', ' + this.bookTitle;
        }
        if (this.chapter!= null) {
            output += ', ch. ' + this.chapter;
        }
        if (this.pages!= null) {
            output += ', pp. ' + this.pages;
        }
        if (this.publisher != null) {
            output += ', ' + this.publisher;
        }
        if (this.editor != null) {
            output += ', ' + this.editor;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.edition != null) {
            output += ', ' + this.edition;
        }
        if (this.volumeOrNumber != null) {
            output += ', ' + this.volumeOrNumber;
        }
        if (this.series != null) {
            output += ', ' + this.series;
        }
        if (this.type != null) {
            output += ', ' + this.type;
        }
        if (this.chapterAndOrPages != null) {
            output += ', ' + this.chapterAndOrPages;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a inproceedings reference
class Inproceedings extends Publication {
    constructor(author, title, doi, bookTitle, year, editor, volumeOrNumber, series, pages, address, month, organization, publisher, note) {
        super(title, year, doi);
        this._bookTitle = bookTitle;
        this._author = author;
        this._editor = editor;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._pages = pages;
        this._address = address;
        this._month = month;
        this._organization = organization;
        this._publisher = publisher;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get bookTitle() {
        return this._bookTitle;
    }

    get editor() {
        return this._editor;
    }

    get volumeOrNumber() {
        return this._volumeOrNumber;
    }

    get series() {
        return this._series;
    }

    get pages() {
        return this._pages;
    }

    get address() {
        return this._address;
    }

    get month() {
        return this._month;
    }

    get organization() {
        return this._organization;
    }

    get publisher() {
        return this._publisher;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.bookTitle!= null) {
            output += ', ' + this.bookTitle;
        }
        if (this.pages!= null) {
            output += ', pp. ' + this.pages;
        }
        if (this.publisher != null) {
            output += ', ' + this.publisher;
        }
        if (this.editor != null) {
            output += ', ' + this.editor;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.volumeOrNumber != null) {
            output += ', Vol. ' + this.volumeOrNumber;
        }
        if (this.series != null) {
            output += ', ' + this.series;
        }
        if (this.organization != null) {
            output += ', ' + this.organization;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a manual reference
class Manual extends Publication {
    constructor(title, author, doi, organization, address, edition, month, year, note) {
        super(title, year, doi);
        this._author = author;
        this._organization = organization;
        this._address = address;
        this._edition = edition;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get organization() {
        return this._organization;
    }

    get address() {
        return this._address;
    }

    get edition() {
        return this._edition;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year ;

        if (this.organization!= null) {
            output += ', ' + this.organization;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.edition != null) {
            output += ', ' + this.edition;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a general thesis (Phd, master etc.) reference
class Thesis extends Publication {
    constructor(author, title, doi, school, year, type, address, month, note) {
        super(title, year, doi);
        this._author = author;
        this._school = school;
        this._type = type;
        this._address = address;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get school() {
        return this._school;
    }

    get type() {
        return this._type;
    }

    get address() {
        return this._address;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.school != null) {
            output += ', ' + this.school;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.type != null) {
            output += ', ' + this.type;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a conference proceedings reference
class Proceedings extends Publication {
    constructor(title, year, doi, editor, volumeOrNumber, series, address, publisher, note, month, organization){
        super(title, year, doi);
        this._editor = editor;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._address = address;
        this._publisher = publisher;
        this._note = note;
        this._month = month;
        this._organization = organization;
    }

    get editor() {
        return this._editor;
    }

    get volumeOrNumber() {
        return this._volumeOrNumber;
    }

    get series() {
        return this._series;
    }

    get address() {
        return this._address;
    }

    get publisher() {
        return this._publisher;
    }

    get note() {
        return this._note;
    }

    get month() {
        return this._month;
    }

    get organization() {
        return this._organization;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.editor + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.volumeOrNumber != null) {
            output += ', ' + this.volumeOrNumber;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.series != null) {
            output += ', ' + this.series;
        }
        if (this.publisher != null) {
            output += ', ' + this.publisher;
        }
        if (this.organization != null) {
            output += ', ' + this.organization;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements implements a tech report reference
class TechReport extends Publication {
    constructor(author, title, doi, institution, year,type, number, address, month, note) {
        super(title, year, doi);
        this._author = author;
        this._institution = institution;
        this._type = type;
        this._number = number;
        this._address = address;
        this._month = month;
        this._note = note;
    }

    get author() {
        return this._author;
    }

    get institution() {
        return this._institution;
    }

    get type() {
        return this._type;
    }

    get number() {
        return this._number;
    }

    get address() {
        return this._address;
    }

    get month() {
        return this._month;
    }

    get note() {
        return this._note;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.institution != null) {
            output += ', ' + this.school;
        }
        if (this.address != null) {
            output += ', ' + this.address;
        }
        if (this.number != null) {
            output += ', ' + this.number;
        }
        if (this.type != null) {
            output += ', ' + this.type;
        }

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}

// This class implements a unpublished work reference
class Unpublished extends Publication {
    constructor(author, title, doi, note, month, year) {
        super(title, year, doi);
        this._author = author;
        this._note = note;
        this._month = month;
    }

    get author() {
        return this._author;
    }

    get note() {
        return this._note;
    }

    get month() {
        return this._month;
    }

    printDetails() {
        super.printDetails();
        let output = '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year;

        if (this.month != null) {
            output += ', ' + this.month + '<br>';
        }
        if (this.note != null) {
            output += this.note + '<br>';
        }
        if (this.doi != null) {
            output += this.doi +'<br>';
        }
        output += '<br><hr></div>';
        return output;
    }
}