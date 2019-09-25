class Publication{
    constructor(title, year) {
        this._title = title;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    get year() {
        return this._year;
    }
    printDetails(){

    }
}

class Article extends Publication {
    constructor(author, title, journal, year, volume, number, pages, month, note) {
        super(title, year);
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
        let output = "";
        output += '<div>'+ this.author + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year + '<br>';
        output += this.journal + '<br>';
        output += this.volume + '<br>';
        output += this.number + '<br>';
        output += this.pages + '<br>';
        output += this.month + '<br>';
        output += this.note + '<br><hr>';
        return output;
    }
}

class Book extends Publication {
    constructor(authorOrEditor, title, publisher, year,volumeOrNumber, series, address, edition, month, note) {
        super(title, year);
        this._authorOrEditor = authorOrEditor;
        this._title = title;
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

    get title() {
        return this._title;
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
        let output = "";
        output += '<div>'+ this.authorOrEditor + '<br>';
        output += '<b>' + this.title + '</b><br>';
        output += this.year + '<br>';
        output += this.publisher + '<br>';
        output += this.volumeOrNumber + '<br>';
        output += this.series + '<br>';
        output += this.address + '<br>';
        output += this.edition + '<br>';
        output += this.month + '<br>';
        output += this.note + '<br><hr>';
        return output;
    }
}

class Booklet extends Publication {
    constructor(title,author, howpublished, address, month, year, note) {
        super(title, year);
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
    }
}

class Inbook extends Publication {
    constructor(authorOrEditor, title, chapterAndOrPages, publisher, year, volumeOrNumber, series, type, address, edition, month, note) {
        super(title, year);
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
    }
}

class Incollection extends Publication {
    constructor( author, title, booktitle, publisher, year,  editor, volumeOrNumber, series, type, chapter, pages, address, edition, month, note) {
        super(title, year);
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
    }
}

class Inproceedings extends Publication {
    constructor(author, title, booktitle, year, editor, volumeOrNumber, series, pages, address, month, organization, publisher, note) {
        super(title, year);
        this._booktitile = booktitle;
        this._author = author;
        this._editor = editor;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._pages = pages;
        this._addess = address;
        this._month = month;
        this._organization = organization;
        this._publisher = publisher;
        this._note = note;
        this._booktitle = booktitle;
        this._address = address;
    }

    get author() {
        return this._author;
    }

    get booktitle() {
        return this._booktitle;
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
    }
}

class Manual extends Publication {
    constructor(title, author, organization, address, edition, month, year, note) {
        super(title, year);
        this._title = title;
        this._author = author;
        this._organization = organization;
        this._address = address;
        this._edition = edition;
        this._month = month;
        this._note = note;
    }

}

class Thesis extends Publication {
    constructor(author, title, school, year, type, address, month, note) {
        super(title, year);
        this._author = author;
        this._school = school;
        this._type = type;
        this._address = address;
        this._month = month;
        this._note = note;
    }
}

class Proceedings extends Publication {
    constructor(title, year, editor, volumeOrNumber, series, address, publisher, note, month, organization){
        super(title, year);
        this._editor = editor;
        this._volumeOrNumber = volumeOrNumber;
        this._series = series;
        this._address = address;
        this._publisher = publisher;
        this._note = note;
        this._month = month;
        this._organization = organization;
    }
}

class TechReport extends Publication {
    constructor(author, title, institution, year,type, number, address, month, note) {
        super(title, year);
        this._author = author;
        this._institution = institution;
        this._type = type;
        this._number = number;
        this._address = address;
        this._month = month;
        this._note = note;
    }

}

class Unpublished extends Publication {
    constructor(author, title, note, month, year) {
        super(title, year);
        this._author = author;
        this._note = note;
        this._month = month;
    }
}