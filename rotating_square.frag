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

mat2 rotate(float angle) {
    return mat2(cos(angle),-sin(angle),
                sin(angle), cos(angle));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(.0);

    for ( int i = 1; i < 4; i += 1 ) {
        for ( int j = 1; j < 4; j += 1 ) {
            color += square(rotate(u_time) * (st + vec2(-i * .25,-j * .25)), vec2(0.0), .075);
        }
    }

    gl_FragColor = vec4( color, 1.0 );
}
