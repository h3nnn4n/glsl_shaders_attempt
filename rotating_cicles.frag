// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float smoothcircle(vec2 pos, vec2 centre, float radius) {
    return smoothstep(radius*0.5, radius*1.5, distance(centre, pos));
}

int circle(vec2 pos, vec2 centre, float radius) {
    return step(radius, distance(centre, pos));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(1.); //   vec3(circle(st, vec2(.4, .5), .2));

    //color *= vec3(smoothcircle(st, vec2(.25, .3), .2));
    //color *= vec3(smoothcircle(st, vec2(.25, .7), .2));

    float angle = u_time * 3.141592653;
    float rad = 0.2;

    vec2 pos  = vec2(rad * sin(angle      ) + .5, rad * cos(angle      ) + .5);
    vec2 pos2 = vec2(rad * sin(angle * 1.1) + .5, rad * cos(angle * 1.1) + .5);
    vec2 pos3 = vec2(rad * sin(angle * 1.2) + .5, rad * cos(angle * 1.2) + .5);
    vec2 pos4 = vec2(rad * sin(angle * 1.3) + .5, rad * cos(angle * 1.3) + .5);

    color *= vec3(smoothcircle(st, pos , .1));// * vec3(1.0, 0.0, 0.0);
    color *= vec3(smoothcircle(st, pos2, .1));// * vec3(0.0, 1.0, 0.0);
    color *= vec3(smoothcircle(st, pos3, .1));// * vec3(0.0, 0.0, 1.0);
    color *= vec3(smoothcircle(st, pos4, .1));// * vec3(0.5, 0.5, 0.0);

    gl_FragColor = vec4( color, 1.0 );
}
