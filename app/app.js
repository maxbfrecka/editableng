angular.module('myApp', [])
	.controller('myController', ['$scope', function($scope){
		console.log('does editbox say anything yet?')
	}])

	.directive('makeEditable', function(){
		return {
			templateUrl: 'edit.html',
			restrict: 'E',
			transclude: true,
			scope: true,
			link: function(scope, element, attrs){
				this.editingStatus = false;
        this.buttonText = 'edit!';
        console.log("editbox should say 'edit'")
        scope.toggleEdit = function(){
          if(this.editingStatus == false){
            this.editingStatus = true;
            this.buttonText = 'save!';
            element.spellcheck = true;
          } else {
            this.editingStatus = false;
            this.buttonText = 'edit!';
            element.spellcheck = false;
          }
				}
			}
		}
	})
	
	

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
