
document.addEventListener('DOMContentLoaded', function() {
  bindToSketch();  //<callout id="co.bind.sketch"/>
}
, false);

function bindToSketch () {
  var sketch = Processing.getInstanceById('MoebiusJSOrientationLocation');
  if ( sketch == undefined )
    return setTimeout(bindToSketch, 100); //<callout id="co.timeout"/>

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      sketch.orientationEvent(event.beta, event.gamma, event.alpha);  //<callout id="co.orientation.event.callback"/>
      console.log(event);
    }
    , false);
  } 
  else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {  //<callout id="co.motion.event.callback"/>
      sketch.orientationEvent(
        event.acceleration.x, event.acceleration.y, event.acceleration.z
      );
    }
    , true);
  } 
  
  else {
    window.addEventListener('DeviceOrientationEvent', function(orientation) { 
      sketch.orientationEvent(orientation.x, orientation.y, orientation.z);
    }
    , true);
  }

  if (navigator.geolocation)
  {
    navigator.geolocation.watchPosition(
    function success(position) {
      sketch.locationEvent(position.coords.latitude, position.coords.longitude);  //<callout id="co.location.listener"/>
    }
    , 
    function error(e) {
      // Ignore and use defaults already set for coords
      console.log('Unable to get geolocation position data: ' + e);
    }
    );
  }
}  

