/**
 *  jeongin-nodes npm 모듈 테스트 (모듈 패키지 : 로컬 배포)
 *  npm i ../jeongin-nodes
 *  명령어로 설치 후, 테스트 할 것
 */

const dzMath = require('jeongin-nodes');

console.log(dzMath.sum(1,2,3,4));
console.log(dzMath.max(-10,-20,-30,-40));
console.log(dzMath.min(-1, -2, 0, 1, 2));