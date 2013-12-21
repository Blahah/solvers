Router.configure({
  layoutTemplate: 'app'
});

Router.map(function () {
  // Landing/lead capture page
  this.route('landing', {
    path: '/'
  });

  // Home
  this.route('home', {
    path: '/projects' 
  }); 

  // New project
  this.route('newProject', {
    path: '/projects/new' 
  });

  // Show project
  this.route('showProject', {
    path: '/projects/:_id',
    before: [
      function() {
        var project = Projects.findOne({_id: this.params._id});
        Session.set('project', project);
      }
    ]
  });

  // Edit profile
  this.route('profile', {
    path: '/profile',
    data: function() {
      return Meteor.user();
    }
  });

  // Show profile
  this.route('userCard', {
    path:'/profile/:_id',
    data: function() {
      return Meteor.users.findOne({ _id: this.params._id });
    }
  });

  // 404
  this.route('notFound', {
    path: '*'
  });

});