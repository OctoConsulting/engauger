const User = require('../models/user');
const twitter = require('./dashboard_services/dashboard_twitter');
const github = require('./github');
const mongoose = require('mongoose');


exports.getEvents = function(req, res, next){
  const user_id = req.params.id;
  console.log("here");
  User.findById({_id: user_id})
      .then( user => res.send(user.events.data))
      .catch(next);
}


exports.addEvent = function(req, res, next){
  const user_id = req.params.id;

  const updated = {
    type : req.body.type,
    eventName : req.body.eventName,
    description : req.body.description
  }

  User.findById({_id: user_id})
      .then( user => User.findByIdAndUpdate({_id: user_id}, {$set: {'events.points': user.events.points + 10}}))
      .catch(next);

  User.findByIdAndUpdate({_id: user_id}, {$push: {'events.data': updated}})
      .then(() => User.findByIdAndUpdate({_id: user_id}))
      .then( user => res.send(user.twitter))
      .catch(next);

}
