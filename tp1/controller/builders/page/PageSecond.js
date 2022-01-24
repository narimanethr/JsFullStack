import PageHtml from './PageHtml.js';

export default class PageSecond extends PageHtml{

    buildHeader(){
        super.status = 200;
        super.buildHeader();
    }

    buildBody(){
        super.buildBody(); 
        this.write("this is the <strong> second </strong> page");
    }

}