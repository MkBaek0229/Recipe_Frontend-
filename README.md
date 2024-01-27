# 나만의 레시피 기록 웹앱

## Front End 작업내역순서

### 1. 최초 파일셋팅 (Page 폴더생성)

### 2. 테일윈드 css 도입

- [x] 테일윈드 패키지 설치
- [x] 설정 파일 추가

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [x] tailwind.config.js에 다음 내용 추가

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [x] 내 css파일에 다음 내용 추가 index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [x] HTML에서 ouput.css 사용
