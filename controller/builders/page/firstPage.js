import PageHtml from './PageHtml.js';

export default class FirstPage extends PageHtml {

    buildHeader() {
        super.status = 200;
        super.buildHeader();
    }
    
    buildBody() {
        super.buildBody(); 
        this.write(`<img src="./public/img/timoleon_oceanie.jpg" alt="timoleon bien sur">`);
        this.write("<p>this is the <strong> first </strong> page</p>");
    }

}