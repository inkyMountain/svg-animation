import { SVG } from '@svgdotjs/svg.js';
import '../styles/index.less';

const draw = SVG().addTo('#container').size(100, 100);
draw.circle(100).attr({fill: 'white'});