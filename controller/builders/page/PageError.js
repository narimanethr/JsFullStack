import PageHtml from './PageHtml.js';

export default class PageError extends PageHtml {

    buildHeader(){
        super.status = 404;
        super.contentType = 'text/html; charset=utf-8';
        super.buildHeader();
    }

    buildBody(){
        this.write("error 404: page not found!");
    }

}