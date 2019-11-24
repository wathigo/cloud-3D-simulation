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
  const createCloud = () => {
    const div = document.createElement( 'div'  );
    div.className = 'cloudBase';
    let random_x = getRandomInt(-256, 256);
    let random_y = getRandomInt(-256, 256);
    let random_z = getRandomInt(-256, 256);
    var t = 'translateX( ' + random_x + 'px ) \
      translateY( ' + random_y + 'px ) \
      translateZ( ' + random_z + 'px )';
    div.style.transform = t;
    world.appendChild( div );

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
