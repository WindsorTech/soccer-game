// dependencies

// capital references the standard library

var Sequelize = require("sequelize");

// lowercase references the db.

var sequelize = require("../config/connection.js");

// model creation
var GoalScore = sequelize.define('leaders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

GoalScore.sync();

//=====================================================//

var leader = {

    all: function(callback) {

        GoalScore.findAll({}).then(function(res) {

        callback(res);

        });

    },

    create: function(name, score, callback) {

         GoalScore.create({

            name: name

        }).then(function() {

            callback();

        }).catch(function(err) {

            callback(err);

        });
 
    },

    update: function(id, callback) {

        GoalScore.update({

   },
   {

     where: {id: id}

     }).then(function(){

        callback();

    });

});

module.exports = leader;