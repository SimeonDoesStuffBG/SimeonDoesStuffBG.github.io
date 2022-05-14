window.addEventListener("deviceorientation", deviceOrientation, true);

var PI = Math.PI;

function rads(degrees){
    return (degrees * PI)/180;
}

function deviceOrientation(event){
    var alpha = event.alpha, gamma = event.gamma;

    if(alpha === null) return;

    if(gamma >=0)
        gamma = 90-gamma;
    else{
        alpha += 180;
        gamma = -(90+gamma);
    }

    alpha = rads(alpha);
    gamma = rads(gamma);

    camera.rotation.set(gamma, alpha, 0, 'YXZ');
}