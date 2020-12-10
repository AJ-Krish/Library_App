const express= require('express');
const adminRouter=express.Router();


function adminroutes(nav){
    


// var authors=[
//     {
//         name:'Joseph',
//         genre:'cartoon',
//         work:'tom and jerry'
//     },
//     {
//         name:'jk rowling',
//         genre:'fantasy',
//         work:'Harry potter'
//     }
// ];


adminRouter.get('/',function (req,res) {
    res.render("adminLogin",
    {
        nav,
        title:'ADMIN'
        
    });
    
});

adminRouter.get('/addbook',function (req,res) {
    res.render("addbook",
    {
        nav,
        title:'AddBook'
        
    });

    
});
adminRouter.get('/addauthor',function (req,res) {
    res.render("addauthor",
    {
        nav,
        title:'AddAuthor'
        
    });

    
});
adminRouter.get('/addbook/bookadded',function (req,res) {
    res.render("booksadded",
    {
        nav,
        title:'BookAdded'
        
    });

    
});
adminRouter.get('/addbook/authoradded',function (req,res) {
    res.render("authoradded",
    {
        nav,
        title:'AuthorsAdded'
        
    });

    
});





    return adminRouter;

}




module.exports=adminroutes;
