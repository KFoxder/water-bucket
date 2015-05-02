!function(){Crafty.scene("ballMain",function(){function a(){clearInterval(t),Crafty.scene("lose",l.score)}function b(){l.misses<3?r.text("Misses : "+l.misses):a()}function c(){q.text("Score : "+l.score)}function d(a){s.text("Divider : "+a)}function e(a){if(void 0!==a){var b=(Crafty.viewport.width-100)/j;return b*a}}function f(){var a=Crafty.math.randomInt(1,p/2*7),b=Crafty.e("2D, DOM, Collision, Gravity, droplet, ball,Text");b.number+=a,b.text(a),b.textFont({size:"16px"}),b.gravityConst(n)}function g(){if(f(),p++,p%8===0){var a=Math.round(p/2);h(a),i(1.1)}p%15===0&&void 0!==t&&(clearInterval(t),m*=.8,t=setInterval(g,m))}function h(a){"number"==typeof a&&(o=Crafty.math.randomInt(2,k),d(o))}function i(a){n*=a}const j=20,k=12;var l,m=1500,n=.05,o=2,p=0;Crafty.background("url('images/clouds-bg.jpg') repeat center center fixed");{var q=Crafty.e("DOM,Text").attr({x:20,y:10,w:100,h:50}).text("Score : 0").textFont({size:"20px"}).textColor("#44cb37").css({"text-shadow":"0px 2px 3px #555"}),r=Crafty.e("DOM,Text").attr({x:20,y:60,w:100,h:50}).text("Misses : 0").textFont({size:"20px"}).textColor("#FF0000").css({"text-shadow":"0px 2px 3px #555"}),s=Crafty.e("DOM,Text").attr({x:Math.round(Crafty.viewport.width/2),y:10,w:200,h:50}).text("Divider : "+o).textFont({size:"20px"}).textColor("black").css({"text-shadow":"0px 2px 3px #555"});Crafty.e("2D,Canvas,Mouse,speaker").attr({x:Crafty.viewport.width-100,y:Crafty.viewport.height-60,w:32,h:32}).bind("Click",function(a){Crafty.audio.toggleMute(),this.has("speaker")?(this.removeComponent("speaker").addComponent("speakerMute"),this.w=32,this.h=32):(this.removeComponent("speakerMute").addComponent("speaker"),this.w=32,this.h=32)})}l=Crafty.e("2D, Canvas, Controls, Collision, bucket, droplet-sound-hit-high,droplet-sound-hit-low").attr({move:{left:!1,right:!1},x:Crafty.viewport.width/2,y:Crafty.viewport.height-75,w:64,h:64,score:0,misses:0}).origin("center").bind("KeyDown",function(a){a.keyCode===Crafty.keys.RIGHT_ARROW?this.move.right=!0:a.keyCode===Crafty.keys.LEFT_ARROW&&(this.move.left=!0)}).bind("KeyUp",function(a){a.keyCode===Crafty.keys.RIGHT_ARROW?this.move.right=!1:a.keyCode===Crafty.keys.LEFT_ARROW&&(this.move.left=!1)}).bind("EnterFrame",function(){this.move.right?this.x+=10:this.move.left&&(this.x-=10)}).collision().onHit("ball",function(a){"number"==typeof a[0].obj._text&&a[0].obj._text%o===0?(this.score+=1,Crafty.audio.play("droplet-sound-hit-high"),c()):(this.misses+=1,Crafty.audio.play("droplet-sound-hit-low"),b()),a[0].obj.destroy()}),Crafty.c("ball",{init:function(){this.attr({x:e(Crafty.math.randomInt(1,j)),y:10,w:32,h:32,number:0}).gravity().origin("center")}});var t=setInterval(g,m)},function(){})}(),function(){Crafty.scene("intro",function(){Crafty.background("url('images/clouds-bg.jpg') repeat center center fixed"),Crafty.e("2D, Canvas, Image,Mouse").image("images/welcome-scene.png").attr({w:500,h:500,z:1,x:Crafty.viewport.width/2-250,y:Crafty.viewport.height/2-250}).bind("Click",function(a){Crafty.scene("ballMain")})},function(){})}(),function(){Crafty.scene("lose",function(a){var b=(Crafty.e("2D, DOM, Image").image("images/lose-scene.png").attr({w:500,h:500,z:-1,x:Crafty.viewport.width/2-250,y:Crafty.viewport.height/2-250}),Crafty.e("2D, DOM, Text").attr({w:500,h:100,x:Crafty.viewport.width/2-250,y:Crafty.viewport.height/2}).text("Score : 0").textFont({size:"32px"}).textColor("#FFFFFF").css({"text-align":"center"}));Crafty.e("2D, DOM, Text, Mouse").attr({w:500,h:100,x:Crafty.viewport.width/2-250,y:Crafty.viewport.height/2+100}).text("Play Again!").textFont({size:"26px"}).textColor("#FFFFFF").css({"text-align":"center"}).bind("Click",function(a){Crafty.scene("ballMain")}),b.text("Score : "+a)},function(){})}(),function(){"use strict";var a={start:function(){Crafty.load(["images/sprites.png","images/lose-scene.png","images/welcome-scene.png"],function(){Crafty.init(),Crafty.canvas.init(),Crafty.sprite(65,"images/sprites.png",{bucket:[0,0],droplet:[1,0],speaker:[2,0],speakerMute:[3,0]}),Crafty.audio.add("droplet-sound-hit-default",["audio/water-droplet-default.mp3"]),Crafty.audio.add("droplet-sound-hit-low",["audio/water-droplet-low.mp3"]),Crafty.audio.add("droplet-sound-hit-high",["audio/water-droplet-high.mp3"]),Crafty.audio.add("rain-background",["audio/rain-bg.mp3","audio/rain-bg.wav"]),Crafty.audio.add("rain-birds-background",["audio/rain-bird-bg.mp3","audio/rain-bird-bg.wav"]),Crafty.audio.play("rain-background",-1,.6),Crafty.scene("intro")})}};a.start()}();