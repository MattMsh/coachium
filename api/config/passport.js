import passportJWT from 'passport-jwt';

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;
import { User } from '../src/models';

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = '1231';

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  const user = User.findOne({ id: jwtPayload.id });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
});

export default strategy;
