class ParseBibtex {
    constructor(element) {
        this._source = element;
        return this.elaborate();
    }

    // Parse the type of the bibtex
    get type(){
        let reg = /^@[a-z]+/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[0];
        else
            return null;
    }

    get author() {
        let reg = /author *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get title() {
        let reg = /title *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get year() {
        let reg = /year *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get doi() {
        let reg = /DOI *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get journal() {
        let reg = /journal *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get volume() {
        let reg = /volume *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get number() {
        let reg = /number *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get pages() {
        let reg = /pages *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get note() {
        let reg = /note *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get month() {
        let reg = /month *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get editor() {
        let reg = /editor *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get edition() {
        let reg = /edition *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get address() {
        let reg = /address *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get series() {
        let reg = /series *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get howPublished() {
        let reg = /howpublished *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get publisher() {
        let reg = /publisher *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get school() {
        let reg = /school *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get institution() {
        let reg = /institution *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get chapter() {
        let reg = /chapter *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get booktitle() {
        let reg = /booktitle *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get organization() {
        let reg = /organization *= *\{(.*?)\}/;
        if (this._source.match(reg) != null)
            return this._source.match(reg)[1].toString();
        else
            return null;
    }

    get authorOrEditor() {
        if (this.author!= null) {
            return this.author;
        } else {
            return this.editor;
        }
    }

    get volumeOrNumber() {
        if (this.volume != null) {
            return this.volume;
        } else {
            return this.number;
        }
    }

    get chapterAndOrPages() {
        return this.chapter.concat(this.pages);
    }

    elaborate () {
        let parsed;
        let t = this.type;
        switch (t) {
            case "@article": {
                parsed = new Article(this.author, this.title, this.doi, this.journal, this.year, this.volume, this.number, this.pages, this.month, this.note);
                break;
            }
            case "@book": {
                parsed = new Book(this.authorOrEditor, this.title,this.doi,this.publisher,this.year,this.volumeOrNumber,this.series,this.address,this.edition,this.month,this.note);
                break;
            }
            case "@booklet": {
                parsed = new Booklet(this.title, this.author, this.doi, this.howPublished, this.address, this.month, this.year, this.note);
                break;
            }
            case "@inbook": {
                parsed = new Inbook(this.authorOrEditor, this.title, this.doi, this.chapterAndOrPages, this.publisher, this.year, this.volumeOrNumber, this.series, this.type, this.address, this.edition, this.month, this.note);
                break;
            }
            case "@incollection": {
                parsed = new Incollection(this.author, this.title, this.doi, this.booktitle, this.publisher, this.year, this.editor, this.volumeOrNumber, this.series, this.type, this.chapter, this.pages, this.address, this.edition, this.month, this.note);
                break;
            }
            case "@inproceedings": {
                parsed = new Inproceedings(this.author, this.title, this.doi, this.booktitle, this.year, this.editor, this.volumeOrNumber, this.series, this.pages, this.address, this.month, this.organization, this.publisher, this.note);
                break;
            }
            case "@manual": {
                parsed = new Manual(this.title, this.author, this.doi, this.organization, this.address, this.editor, this.month, this.year, this.note);
                break;
            }
            case "@thesis": {
                parsed = new Thesis(this.author, this.title, this.doi, this.school, this.year, this.type, this.address, this.month, this.note);
                break;
            }
            case "@proceedings": {
                parsed = new Proceedings(this.title, this.year, this.doi, this.editor, this.volumeOrNumber, this.series, this.address, this.publisher, this.note, this.month, this.organization);
                break;
            }
            case "@techreport": {
                parsed = new TechReport(this.author, this.title, this.doi, this.institution, this.year, this.type, this.number, this.address, this.month, this.note);
                break;
            }
            case "@unpublished": {
                parsed = new Unpublished(this.author, this.title, this.doi, this.note, this.month, this.year);
                break;
            }
            default: console.log("Unrecognized format");
        }
        return parsed;
    }
}