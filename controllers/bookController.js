const Book = require("../model/Book");
// get all books

const get_all_book = async (req,res)=>{
try{
    const books =await Book.find();
    res.json(books);
}
catch(error){
    res.json({message:error});
}   
};
//get single book

const get_single_book = async (req,res)=>{

    try{
        const product = await Book.findById(req.params.bookId);
        res.json(product);
    }
    catch(err){
        res.json({mesage:err});
    }
}
// add new book
const add_book = async (req,res)=>{
        const book_detail = new Book({             
            name:req.body.name,
            price:req.body.price,
            auther:req.body.auther,
            total_page:req.body.total_page,
            about:req.body.about
        });
    try{
        console.log("dsjkasd");
        console.log(req.body.name);
      const savedBook = await book_detail.save();
      res.send(savedBook);
    }
    catch(error){
     res.status(400).send(error);
    }

};
//update book
const update_book = async (req,res)=>{

}
//delete book
const delete_book= async (req,res)=>{

}

module.exports={
    get_all_book,
    get_single_book,
    add_book,
    update_book,
    delete_book    
}