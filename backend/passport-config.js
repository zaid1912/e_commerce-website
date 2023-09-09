import LocalStrategy from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
function initialize(passport){
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email);
        if(user == null){
            return done(null, false, {message: 'No User Found'})
        }
        try{
            if(bcrypt.compare(password, user.password)){
                return done(null, user)
            }
            else{
                return done(null, false, {message: 'password incorrect'});
            }

        }
        catch(err){
            return done(err)
        }
    }
    passport.use(new LocalStrategy({emailField:'email'}), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })

}

export default initialize;