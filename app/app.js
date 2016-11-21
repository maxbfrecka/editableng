angular.module('myApp', [])
	.factory('spellcheck', function(){
		var dataFactory = {
			spellcheck: false
		}
		dataFactory.toggleSpellcheck = function(){
			dataFactory.spellcheck = !dataFactory.spellcheck;
		}
		return dataFactory;
	})

	.controller('myController', ['$scope', 'spellcheck', function($scope, spellcheck){
		$scope.spellcheck=spellcheck.spellcheck;
		$scope.$watch('buttonText', function(val){
			console.log("newvalue:" + val)
		});
		$scope.$watch('spellcheck', function(val){
			console.log("controller spellcheck new:" + val);
		});
	}])
	.directive('makeEditable', ['spellcheck' , function(spellcheck){
		return {
			templateUrl: 'edit.html',
			restrict: 'E',
			transclude: true,
			scope: false,
			link: function(scope, element, attrs){
				scope.editingStatus = false;
        scope.buttonText = 'edit!';
        scope.toggleEdit = function(){
          if(scope.editingStatus == false){
            scope.editingStatus = true;
            scope.buttonText = 'save!';
            spellcheck.toggleSpellcheck();
            scope.spellcheck=spellcheck.spellcheck;
            console.log("directive spellcheck:" + spellcheck.spellcheck);

          } else {
            scope.editingStatus = false;
            scope.buttonText = 'edit!';
            spellcheck.toggleSpellcheck();
            scope.spellcheck=spellcheck.spellcheck;
          }
				}
			}
		}
	}])
	
	

/* how can I make sure that the button loads in on time? */
/* how can I make the spellcheck part change? */












/*

	directive('megaVideo', function() {
		return {
			restrict: 'E',
			templateUrl: 'mega-video.html',
			scope: true,
			link: function(scope, element, attrs) {
				var videoPlayer = element.find('video')[0];
				scope.sources = [];
				function processSources(){
					var sourceTypes = {
						webm: { type: 'video/webm'},
						mp4: { type: 'video/mp4'},
						ogg: { type: 'video/ogg'}
					}
					for (source in sourceTypes) {
						if (attrs.hasOwnProperty(source)) {
							scope.sources.push(
								{ type: sourceTypes[source].type, 
								  src: $sce.trustAsResourceUrl(attrs[source])
								}
							);
						}
					}
					
				}
				processSources();
				scope.video =  {
					play: function() {
						videoPlayer.play();
						scope.video.status = 'play';
					},
					pause: function() {
						videoPlayer.pause();
						scope.video.status = 'pause';
					},
					stop: function() {
						videoPlayer.pause();
						videoPlayer.currentTime = 0;
						scope.video.status = 'stop'
                    },
                    togglePlay: function() {
                        scope.video.status == 'play' ? this.pause() : this.play();
                    },
                	width: attrs.width,
                	height: attrs.height
                };
			},

        }
    });*/
