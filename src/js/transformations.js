import Clouds from './clouds';

const transform = (() => {

    /*
      worldXAngle and worldYAngle are floats that hold the world rotations,
      d is an int that defines the distance of the world from the camera
    */
    let world = document.getElementById( 'world' );
    let viewport = document.getElementById( 'viewport' );
    let worldXAngle = 0;
    let worldYAngle = 0;
    let d = 0;

    /*
      Event listener to transform mouse position into angles
      from -180 to 180 degress, both vertically and horizontally
    */
    console.log('tf!')
    window.addEventListener( 'mousemove', function( e ) {

      worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
      worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
      updateView();

    } );

    /*
      Changes the transform property of world to be
      translated in the Z axis by d pixels,
      rotated in the X axis by worldXAngle degrees and
      rotated in the Y axis by worldYAngle degrees.
    */
    const updateView = () => {

      world.style.transform = 'translateZ( ' + d + 'px ) \
      rotateX( ' + worldXAngle + 'deg) \
      rotateY( ' + worldYAngle + 'deg)';

    }

    Clouds.generate(world);
})();

export default transform;
