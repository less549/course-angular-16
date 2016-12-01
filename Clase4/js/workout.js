'use strict';

angular.module('7MinWO')
.controller('WorkoutController' , ['$scope', '$interval', function($scope,$interval){

  var exercise = [];
  var numberExercise= 0;

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

$scope.$watch('duracionEjercicioActual', function(arg1){
  
        if (arg1 == $scope.currentExercise.duration){
            startExercise(exercise.shift());
            numberExercise++;
        }

   })
  var startExercise = function (exercisePlan) {

    if(exercise.length >= numberExercise){
      $scope.currentExercise = exercisePlan;
      $scope.currentExerciseDuration = 0;
      $interval(function(){
        ++$scope.currentExerciseDuration;

      },1000, $scope.currentExercise.duration);
    }else{
        $location.path('/finish');
      }

    
    
   };
      startExercise(exercise.shift());
}]);