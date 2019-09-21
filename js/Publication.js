class Publication {
    constructor(authors, title, type, volume, pages, year, organization) {
        this.authors = authors;
        this.article_title = title;
        this.article_type = type;
        this.volume = volume;
        this.pages = pages;
        this.article_year = year;
        this.article_organization = organization;

    }
        getAuthors(){
            return this.authors;
        }
        getArticleTitle() {
            return this.article_title;
        }
        getArticleType () {
            return this.article_type;
        }
        getVolume () {
            return this.volume;
        }
        getPages () {
            return this.pages;
        }
        getArticleYear () {
            return this.article_year;
        }
        getArticleOrg () {
            return this.article_organization;
        }
}