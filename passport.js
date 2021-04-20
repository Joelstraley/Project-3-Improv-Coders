const passport= require("passport")
const passportlocal= require("passport-local").Strategy;
const User= require("./models/users")
const JwtStrategy= require("passport-jwt").Strategy;

const cookieExtractor = req =>{
    let token = null;
    if (req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

//Middelware: authorization- prtcting the endpoints
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "ImprovCoders"
}, (payload,done) =>{
    User.findById({_id : payload.sub}, (err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null, user);
        else
            return done(null, false);
    })
})); 
//middle
//this will be triggered ; this sets a cookie on the browser/ when users sign in
passport.use(new LocalStrategy((email, password, done) =>{
    User.findOne({username}, (err, user) => {
        if(err)
        return done(err);

        if(!user)
        return done(null,false);
        user.comparePassword(password, done);
    });
}));