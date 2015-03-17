/**
 * Created by fitark on 15-3-12.
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    commentsCount: function() {
        return Comments.find({postId: this._id}).count();
    }
});
