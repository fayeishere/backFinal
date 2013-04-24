$(function(){
  // create a model with a urlRoot
  var Final = Backbone.Model.extend( {
    urlRoot: '/final'
  });
  // create a collection with a url attribute
  var Collection = Backbone.Collection.extend({
    model: Final,
    url: '/finals',
    initialize: function(){
      this.fetch();
    }
  });
  //create a ListView with initialize function, el
 //an addOne and addAll method
  var ListView = Backbone.View.extend({
        initialize: function(){
          _.bindAll(this, 'addOne', 'addAll');
          this.collection.bind('add', this.addOne);
          alert("Alerts suck.");
        },
        addOne: function (item) {
          var view = new CommentView({model: item});
          $(this.el).append(view.render().el);
        },
        addAll: function () {
          this.collection.each(this.addOne);
        }
    });
      var search_view = new ListView({ el: $("#list_container") });
});