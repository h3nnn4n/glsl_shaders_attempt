#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float square(vec2 pos, vec2 centre, float size) {
    if ( length(pos.x - centre.x) < size && length(pos.y - centre.y) < size  ) {
        return 1.;
    } else {
        return 0.;
    }
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(.0);

    vec2 pos = vec2(.0);

    pos.x = 0.5 + sin(u_time * 5.) * 0.2;
    pos.y = 0.5 + cos(u_time * 5.) * 0.2;

    color += square(st, vec2(pos), .1);

    gl_FragColor = vec4( color, 1.0 );
}
