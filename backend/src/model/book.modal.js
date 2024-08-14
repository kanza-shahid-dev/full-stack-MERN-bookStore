import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: "string",
  name: "string",
  price: "number",
  category: "string",
  image: "string",
});
const Book = mongoose.model("Book", bookSchema);
export default Book;
