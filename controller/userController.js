const User = require("../model/userModel");

//Landing page get route

const getUserLanding = (req, res) => {
  if (!req.session) {
    res.render("index");
  } else {
    res.render("home");
  }
};

//Login route

const getUserLogin = (req, res) => {
  res.render("login");
};

//Signup route

const getUserSignup = (req, res) => {
  res.render("signup");
};

//Home route

const getUserHome = (req, res) => {
  if (req.session) {
    res.render("home");
  } else {
    res.render("index");
  }
};

//About route

const getUserAbout = (req, res) => {
  if (req.session) {
    res.render("about");
  } else {
    res.render("index");
  }
};

//Contact route

const getUserContact = (req, res) => {
  if (req.session) {
    res.render("contact");
  } else {
    res.render("index");
  }
};

//Products route

const getUserProducts = (req,res)=>{
    if(!req.session){
        res.render('products')
    }else{
        res.render('index')
    }
}