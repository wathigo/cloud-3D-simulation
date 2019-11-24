const Clouds = (() => {
  /*
    objects is an array of cloud bases
    layers is an array of cloud layers
  */
  let objects = [];
  let layers = [];

  /*
    Clears the DOM of previous clouds bases
    and generates a new set of cloud bases
  */
  const generate = (world) => {

    objects = [];
    layers = [];

    if ( world.hasChildNodes() ) {
      while ( world.childNodes.length >= 1 ) {
        world.removeChild( world.firstChild );
      }
    }

    for( var j = 0; j < 5; j++ ) {
      objects.push( createCloud() );
    }

  }

  /*
    Creates a single cloud base: a div in world
    that is translated randomly into world space.
    Each axis goes from -256 to 256 pixels.
  */

  const random_x = (min=-256, max=256) => {
    return getRandomInt(min, max);
  }

  const random_y = (min=-256, max=256) => {
    return getRandomInt(min, max);
  }

  const random_z = (min=-256, max=256) => {
    return getRandomInt(min, max);
  }

  const random_a = (min=-180, max=180) => {
    return getRandomInt(min, max);
  }

  const random_s = () => {
    return Math.random()
  }
  const createCloud = () => {
    const div = document.createElement( 'div'  );
    div.className = 'cloudBase';
    var t = 'translateX( ' + random_x() + 'px ) \
      translateY( ' + random_y() + 'px ) \
      translateZ( ' + random_z() + 'px )';
    div.style.transform = t;
    world.appendChild( div );

    for( var j = 0; j < 4 + Math.round( Math.random() * 10 ); j++ ) {
    var cloud = document.createElement( 'div' );
    cloud.className = 'cloudLayer';

    cloud.data = {
      x: random_x(),
      y: random_y(),
      z: random_z(),
      a: random_a(),
      s: random_s()
    };
    var t = 'translateX( ' + random_x() + 'px ) \
      translateY( ' + random_y() + 'px ) \
      translateZ( ' + random_z() + 'px ) \
      rotateZ( ' + random_a() + 'deg ) \
      scale( ' + random_s() + ' )';
    cloud.style.transform = t;

    div.appendChild( cloud );
    layers.push( cloud );
  }

    return div;

  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  return {generate, createCloud}
})();

export default Clouds;
