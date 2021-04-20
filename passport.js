const passport= require("passport")
const LocalStrategy= require("passport-local").Strategy;
const User= require("./models/user")

passport.use(new LocalStrategy((email, password, done) =>{
    User.findOne({email}, (err, user) => {
        console.log(user)
        if(err)
        return done(err);

        if(!user)
        return done(null,false);
        user.comparePassword(password, done);
    });
}));
module.exports = passport;