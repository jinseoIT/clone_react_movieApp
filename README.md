# React_Movie App (clone coding)

## 호스팅 사이트
### https://jinseoit.github.io/clone_react_movieApp/

---

### 프로젝트 목표
 - React의 전반적인 흐름 이해


### 알게된 점 
 - component 에 대한 이해
 - state의 개념 
 - life cycle method (Mounting, Updating, Unmounting, component)
 - route에 대한 이해
 - gh-page 

 ## gh-pages 업로드 방법
  1. npm i gh-pages  - gh-pages 를 다운
  2. package.json에 "homepage": "https://{유저이름}.github.io/ {프로젝트이름}/" 추가 (유저이름, 프로젝트명 소문자로!)
  3. package.json의 "scripts" 부분에 2개의 프로퍼티 추가 <br>
  "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  4. npm run build를 통해 build폴더 생성
  5. npm run deploy를 통해 업로드 (deploy 명령시 순서 -> <br>
       precdeploy - build - deploy )