import { Schema } from 'mongoose';

/* bookdetail Schema*/
const bookDetailsSchema = new Schema({
  language : String,
  pages :  Number,
  series : String
});


const DEFAULT_COVER = '/images/defaultBook.png';
/*
 * setter for cover field in bookSchema, used to set a default value to cover field if cover is not defined
 * @param cover (string) the provided cover field
 * @return (string) the cover value
*/
const setDefaultCover =
   cover => (cover === undefined || cover === '') ? DEFAULT_COVER : cover;


// definition of schema for books
const bookSchema = new Schema({
  title : {
            type : String,
            required : true              // a title must be given
          },
  author : String,
  cover : {
            type : String,
            set : setDefaultCover        // set a default cover if none provided
          },
  year : Number,
  details : bookDetailsSchema
});
// export the schema
export default bookSchema;


// schema must be "compiled" into a model and "bound" to a collection of a database managed by a connection
import { model } from '../controllers/db.controller';
const Books = model('Book',bookSchema,'books');

export const model = Books;
