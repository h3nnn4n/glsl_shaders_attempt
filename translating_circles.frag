#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float smoothcircle(vec2 pos, vec2 centre, float radius) {
    return smoothstep(radius*1.5, radius*0.5, distance(centre, pos));
}

int circle(vec2 pos, vec2 centre, float radius) {
    return step(radius, distance(centre, pos));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(0.);

    vec2 pos  = vec2(.5);

    vec2 offset = vec2(sin(u_time), cos(u_time));
    st += offset * 0.2;

    color += vec3(smoothcircle(st, pos , .1));

    gl_FragColor = vec4( color, 1.0 );
}
