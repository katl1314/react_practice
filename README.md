# Create-React-App

react 프로젝트를 하기 위해서 다음과 같을 과정이 필요함.

1.  Node.js 설치 (LTS버전을 설치하도록 하자.)
    -   https://nodejs.org
    -   버전 확인 : node -v
        <br><br>
2.  npm 설치
    -   npm은 Node Packaged Manager의 약자로, Node로 만들어진 package를 관리하기 위한 툴임
    -   Node.js를 설치할때 자동으로 설치되므로 별도로 설치할 필요가 없음.
    -   다만 npm은 npx, yarn으로도 대체가 가능함.
    -   Python의 pip와 유사함.
    -   버전 확인 : npm -v
        <br><br>
3.  create-react-app 설치

    -   npm 으로 설치할 경우 전역(Global)에 install해야함
    -   컴퓨터 어디서든 Create React App을 실행할 수 있도록 설치하는 옵션임.
    -   npm install -g create-react-app

    <br><br>

4.  Create React App 프로젝트 생성

    -   npm이 아닌 npx으로 생성
    -   npx는 임시로 프로그램을 설치하고 한번만 실행후 지운다는 의미를 가짐
    -   npx create-react-app 프로젝트명

5.  React App 배포(deploy)
    -   create-react-app의 용량은 상당히 무거운 편.
    -   브라우저는 한번 리소스를 내려받아 캐시에 저장하여, 다시 리소스를 내려받을때 캐시에 저장된 리소스를 사용함.
    -   근데, 캐시를 비울경우, 캐시에 저장된 리소스는 다 사라지게 되며, 정확한 리소스의 용량을 체크함.
    -   배포 : npm run build
    -   build폴더가 생성되면서 index.html파일을 열어서 확인해보자.
