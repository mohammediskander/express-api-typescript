import { Strategy, ExtractJwt } from "passport-jwt";
import { Account } from "../app/models";
import { Keys } from "../config";
import { PassportStatic } from "passport";

export default (passport: PassportStatic) => {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: Keys.secretOrKey,
      },
      (payload, done) => {
        Account.findById(payload._id)
          .then((account) => {
            if (!account) return;
            else {
              done(null, account);
            }
          })
          .catch((error) => {
            throw error.name;
          });
      }
    )
  );
};
