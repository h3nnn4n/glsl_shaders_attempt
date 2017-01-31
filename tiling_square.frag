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
    vec2 st  = gl_FragCoord.xy/u_resolution;

    st *= 3.;
    vec2 grid_pos = st;
    st = frac(st);

    vec3 color = vec3(.0);
    float size = 0.35;

    if ( (int)(floor(grid_pos.x) + floor(grid_pos.y)) % 2 == 0 ) {
        color += square(rotate( u_time) * (st + vec2(-.5, -.5)), vec2(0.0), size);
    } else {
        color += square(rotate(-u_time) * (st + vec2(-.5, -.5)), vec2(0.0), size);
    }

    gl_FragColor = vec4( color, 1.0 );
}
