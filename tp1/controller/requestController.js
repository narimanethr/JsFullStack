import { URL } from 'url';

import PageError from './builders/page/PageError.js';
import FirstPage from './builders/page/firstPage.js';
import PageSecond from './builders/page/PageSecond.js';
import JsonBuilder from './builders/jsonBuilder.js';
import RandomPage from './builders/page/randomPage.js';
import BrutFileBuilder from './builders/brutFileBuilder.js';

export default class RequestController {
  static BASE = 'http://localhost/';

  #request;
  #response;
  #url;

  constructor(request, response) {
    this.#request = request,
    this.#response = response;
  }

  get response() {
    return this.#response;
  }

  handleRequest() {
    this.#url = new URL(this.#request.url, RequestController.BASE);
    const path = this.#url.pathname;
    this.route(path, this.#request, this.#response, this.#url);
    this.#response.end();
  }

  route(path, request, response, url){
    if(path == '/first'){
      new FirstPage(request, response).buildResponse();
    } else if(path == '/second'){
      new PageSecond(request, response).buildResponse();
    } else if(path.startsWith('/json')){
      new JsonBuilder(request, response, url).buildResponse();
    } else  if (path == '/random') {
      new RandomPage(request, response).buildResponse();
    } else if (path.startsWith('/public')) {
      new BrutFileBuilder(request, response, url).buildResponse();
    } else {
      new PageError(request, response).buildResponse();
    }
  }


}