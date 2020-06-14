import {SVG} from '@svgdotjs/svg.js';
import '../styles/index.less';
import '@svgdotjs/svg.filter.js';

const container = document.querySelector('#container');
const {width, height} = container.getBoundingClientRect();

const draw = SVG().addTo('#container').size(width, height);

const borderWidth = 3;
const radius = borderWidth * 0.8;
const innerWidth = 20;
const rectSize = {
  outer: innerWidth + borderWidth * 2,
  inner: innerWidth,
  blur: innerWidth + borderWidth + 10
};
for (let i = 0; i <= 10; i++) {
  const group = draw.group();
  const blur = group.rect()
    .size(rectSize.blur, rectSize.blur)
    .center(width / 2 + i * 30, height / 2 + i * 30)
    .fill({color: '#df7e11', opacity: 0.8})
    .radius(radius);
  blur.filterWith(function (add) {
    const blur = add.gaussianBlur(10);
    this.size('200%', '200%');
    this.move('-50%', '-50%');
  });
  const outer = group.rect()
    .size(rectSize.outer, rectSize.outer)
    .center(width / 2 + i * 30, height / 2 + i * 30)
    .fill({color: '#df7e11', opacity: 1})
    .radius(radius);
  // outer.move('-50%', '-50%');
  outer.filterWith(function (add) {
    const blur = add.gaussianBlur(5);
    this.size('200%', '200%');
    this.move('-50%', '-50%');
  });
  const inner = group.rect()
    .size(rectSize.inner, rectSize.inner)
    // .center(width / 2 + rectSize.outer / 2 + i * 20, height / 2 + rectSize.outer / 2 + i * 20)
    .center(width / 2 + i * 30, height / 2 + i * 30)
    .radius(3)
    .fill({color: '#fffab0', opacity: 1});
}
