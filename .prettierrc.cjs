/** @type {import("prettier").Config} */

module.exports = {
  // 한 줄의 최대 길이를 80으로 제한
  printWidth: 80,

  // 탭 너비를 2칸으로 설정
  tabWidth: 2,

  // 탭 대신 스페이스를 사용
  useTabs: false,

  // 문장의 끝에 세미콜론을 추가
  semi: true,

  // 문자열에 작은따옴표(')를 사용
  singleQuote: true,

  // 객체의 속성 이름에 필요한 경우에만 따옴표를 추가
  quoteProps: 'as-needed',

  // JSX에서 작은따옴표 대신 큰따옴표(")를 사용
  jsxSingleQuote: false,

  // 배열이나 객체의 마지막 요소 뒤에 항상 쉼표를 추가
  trailingComma: 'all',

  // 객체 리터럴의 괄호 사이에 공백을 추가
  bracketSpacing: true,

  // JSX 요소의 마지막 '>'를 다음 줄로 내리지 않음
  bracketSameLine: false,

  // 화살표 함수의 매개변수가 하나일 때도 항상 괄호를 사용
  arrowParens: 'always',

  // 파일의 끝에 개행 문자를 유지
  endOfLine: 'lf',
};
