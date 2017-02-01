#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(vec2 st) {
    float seedx = 12.613451;
    float seedy = 73.12414;
    float seed_scale = 512.5645;
    return frac(cos(dot(st.xy, vec2(seedx, seedy) * seed_scale)) +
                sin((seedx * st.x * st.y + st.y * seedy) * seed_scale));
}

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

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

void main(){
    vec2 st  = gl_FragCoord.xy/u_resolution;

    st *= 3.;
    vec2 grid_pos = st;
    st = frac(st);

    vec3 color = vec3(.0);
    float size = 0.25;

    float x_offset = -.6;
    float y_offset = -.6;

    float noise_scale = .3;

    color += square(rotate( u_time + noise(grid_pos)*4.5) * (st + vec2((noise(st) * noise_scale + x_offset), (noise(st) * noise_scale + y_offset))), vec2(0.0), size + (noise(st) *.4 - .2));

    gl_FragColor = vec4( color, 1.0 );
}
