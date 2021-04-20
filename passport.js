const passport= require("passport")
const passportlocal= require("passport-local").Strategy;
const User= require("./models/users")

passport.use(new LocalStrategy((email, password, done) =>{
    User.findOne({username}, (err, user) => {
        if(err)
        return done(err);

        if(!user)
        return done(null,false);
        user.comparePassword(password, done);
    });
}));