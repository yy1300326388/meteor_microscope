/**
 * Created by fitark on 15-3-13.
 */
// 本地（仅客户端）集合
Errors = new Mongo.Collection(null);
throwError = function(message) {
    Errors.insert({message: message});
};