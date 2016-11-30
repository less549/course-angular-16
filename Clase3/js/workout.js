'use strict';

angular.module('7MinWO')
.controller('WorkoutController' , ['$scope', '$interval', function($scope,$interval){
  // Se corrigio que $Interval este usado en el controller y luego pasado a la funcion para que luego sea usada.

  var exercise = [];

    // Separado los Insert.
		exercise.push({
			detail: new Exercise({
				name: "jumpingJacks",
				title: "Jumping Jacks",
				description: "A jumping jack or star jump",
				image: "img/jumpingJacks.png",
				video: "https://www.youtube.com/watch?v=c4DAnQ6DtF8",
				procedure: "Jump while raising arms and separating legs to sides. Land on forefoot with legs apart and arms overhead. Jump again while lower arms and returning legs to midline. Land on forefoot with arms and legs in original position and repeat.",
		        }),
              duration: 30});

  	exercise.push({
			detail: new Exercise({
				name: "pushup",
				title: "Push Ups",
				description: "Push-ups are a basic exercise.",
				image: "img/pushUp.png",
				video: "https://www.youtube.com/watch?v=Eh00_rniF8E",
				procedure: "A calisthenics exercise performed in a prone position by raising and lowering the body using the arms.",
		        }),
			duration: 45
		});


 function Exercise(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.image = args.image;
          this.related = {};
          this.video = args.video;
          this.sound = args.sound;
          this.procedure = args.procedure;
      }

      var startExercise = function (exercisePlan){
      	$scope.currentExercise = exercisePlan;
      	$scope.currentExerciseDuration = 0;

      	$interval(function(){
      		++$scope.currentExerciseDuration;
      	},
        1000,
         $scope.currentExercise.duration)
      	.then(function(){
      		startExercise(exercise.shift());
      	});

      }
      startExercise (exercise.shift());
}]);