const express= require('express');
const booksRouter=express.Router();


function bookroutes(nav){
    


var books=[
    {
        title:'Randamoozham',
        author:'M. T. Vasudevan Nair',
        genre:'	Mythology, Drama, Historical fiction',
        link:'images/Randamoozham.jpg'
    },
    {
        title:'Khasakkinte Itihasam',
        author:'O. V. Vijayan',
        genre:'Novel, Fiction, Magical Realism',
        link:'images/khasak.jpg'
    },
    {
        title:'Mayyazhippuzhayude Theerangalil',
        author:'M. Mukundan',
        genre:'Historical Fiction',
        link:'images/Mayyazhippuzhayude.jpg'
    },
    {
        title:'Wings of Fire',
        author:'A P J Abdul Kalam',
        genre:'Autobiography',
        link:'images/wingsof.jpg'
    },
    {
        title:'Harry Potter',
        author:'J.K Rowling',
        genre:'Fantasy Fiction, Drama, Young adult fiction, Mystery, Thriller',
        link:'images/harry.jpg'
    }
];


booksRouter.get('/',function (req,res) {
    res.render("books",
    {
        nav,
        title:'Books',
        books
    });
    
});


booksRouter.get('/:id',function (req,res) {

    const id=req.params.id;
    res.render('book',
    {
        nav:[{link:'/books',name:'Book'},{link:'/authors',name:'Authors'}],
        title:'Library',
        book:books[id]
    });

    
});

    return booksRouter;

}
module.exports=bookroutes;

