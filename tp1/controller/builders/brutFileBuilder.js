import fs from 'fs';
import ErrorPage from "./page/PageError.js";
import ResponseBuilder from "./responseBuilder.js";


export default class BrutFileBuilder extends ResponseBuilder{

    buildHeader(){
        super.status = 200;
        super.contentType = 'text/plain';
        super.buildHeader();
    }

    buildBody(){
        try{
            const path = "." + super.url.pathname;
            const data = fs.readFileSync(path);
            super.write(data);
        } catch (err) { 
            console.log(err);
            new ErrorPage(super.request, super.response).buildResponse();
        }
        
    }

}