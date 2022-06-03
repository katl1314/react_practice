# Create-React-App

react 프로젝트를 하기 위해서 다음과 같을 과정이 필요함.

## 1. Node.js 설치 (LTS버전을 설치하도록 하자.)

-   https://nodejs.org
-   버전 확인 : node -v

<br><br>

## 2. npm 설치

-   npm은 Node Packaged Manager의 약자로, Node로 만들어진 package를 관리하기 위한 툴임
-   Node.js를 설치할때 자동으로 설치되므로 별도로 설치할 필요가 없음.
-   다만 npm은 npx, yarn으로도 대체가 가능함.
-   Python의 pip와 유사함.
-   버전 확인 : npm -v

<br><br>

## 3. create-react-app 설치

-   npm 으로 설치할 경우 전역(Global)에 install해야함
-   컴퓨터 어디서든 Create React App을 실행할 수 있도록 설치하는 옵션임.
-   npm install -g create-react-app

    <br><br>

## 4. Create React App 프로젝트 생성

-   npm이 아닌 npx으로 생성
-   npx는 임시로 프로그램을 설치하고 한번만 실행후 지운다는 의미를 가짐
-   npx create-react-app 프로젝트명

    <br><br>

## 5. React App 배포(deploy)

-   create-react-app의 용량은 상당히 무거운 편.
-   브라우저는 한번 리소스를 내려받아 캐시에 저장하여, 다시 리소스를 내려받을때 캐시에 저장된 리소스를 사용함.
-   근데, 캐시를 비울경우, 캐시에 저장된 리소스는 다 사라지게 되며, 정확한 리소스의 용량을 체크함.
-   배포 : npm run build
-   build폴더가 생성되면서 index.html파일을 열어서 확인해보자.

    <br><br>

## 6. npx serve 실행

-   npm serve는 간단한 웹서버를 통해 빌드된 앱을 실행할 수 있음.
-   npx serve -s build -l 8080
-   -s : document Root인 build폴더를 지정함.
-   -l : 포트정보(default: 3000)

    <br><br>

## 7. 리엑트 시작

-   리엑트는 함수형 컴포넌트와 클래스형 컴포넌트 형태로 구성되어 있음.
-   이번 프로젝트는 클래스형 컴포넌트 형태로 구현할 예정임
-   클래스형 컴포넌트와 함수형 컴포넌트 선언 방식은 다음과 같다.

    1. 클래스형 컴포넌트 선언 방식

<pre>
     import MyTest from "./components/MyTest" // import시 확장자는 생략한다.
     class MyComponent extends Component {
         constructor(props) {
             super(props);
         }
         // 리엑트는 무조건 하나의 태그로 존재하여야 하며, 여러 컴포넌트가 들어갈 경우
         // 바깥에 하나의 태그로 감싸야함.
         render() {
             return (
                 &lt;div className="wrap">
                     &lt;MyTest />
                     &lt;MyTest />
                     &lt;MyTest />
                 &lt;/div>
             );
         }
     }

    export default MyComponent; // MyComponent를 외부에서 사용하도록 export함.
</pre>

    2. 함수형 컴포넌트 선언 방식

<pre>
    function MyComponent {
        return (
            &lt;div className="wrap">&lt;/div>
        );
    }
    export default MyComponent;
</pre>

-   반드시 리엑트 컴포넌트에는 하나의 태그 안에 들어가야함.<br>
    바깥 태그는 무조건 무조건 1개만 존재하여야 할 것<br>

-   css 로드하는 법<br>
    import "./style.css";

-   리엑트의 state는 직접적으로 수정(this.state.블라블라 = 블라)로 변경하면 안됨<br>
-   this.setState({key1 : value1, ...})다음과 같이 key와 value으로 구성된 객체를 setState함수의 인자로 전달할 경우, state가 변경됨가 동시에 렌더링이 발생한다.

-   리엑트 사용시 무조건 닫는 태그가 존재하여야 함.<br>
    닫는 태그가 필요없는 태그 input의 경우도 반드시 닫는태그가 사용되어야함.

-   클래스 컴포넌트 생성시 Component를 상속받아야 함. 그리고 render메서드가 필요함.

-   리엑트를 작성시 jsx라는 언어를 이용하는데, jsx을 이용하게 되면 create react app이 알아서 자바스크립트로 변환함.

8. props

## 8. props

    - 컴포넌트를 만들어봤다. (자신이 정의한 컴포넌트를 App.jsx에서 사용해봄.)
    - App.jsx에서 컴포넌트에 어트리뷰트를 작성하였다.

<pre>
    &lt;MyComponent title="WWW" desc="World Wide Web"/>
</pre>

다음과 같이 컴포넌트에 2개의 어트리뷰트를 정의했을때, MyComponent 컴포넌트에서는
this.props를 이용하여 title, desc 어트리뷰트 값을 추출할 수 있음.<br>
리엑트에서는 JSX언어를 사용한다고 했는데, 값들을 {}(중괄호)를 이용하여 추가할 수 있음.

<pre>
    class MyComponent extends Component {
        render() {
            return (
                &lt;h1>{this.props.title}&lt;/h1>
                {this.props.desc}
            )
        }
    }
</pre>
<br>
리엑트에서 props는 컴포넌트 어트리뷰트 값을 의미한다고 보면 됨.<br>

## 9. state와 setState

-   props는 사용자와 컴포넌트간 상호 작용시 필요한 것 (외부용)
-   state는 props의 값에 따라 내부 구현에 필요한 데이터 또는 상태(내부용)
-   변경한 값을 state에 저장, state에 저장된 값을 props으로 전달.

-   state의 초기 값은 클래스 컴포넌트는 constructor함수에서 작성해야 함.
-   state값은 직접적으로 변경할 경우 렌더링이 발생하지 않음
-   state는 setState를 이용하여 변경해야 render함수를 호출한다.
<pre>
constructor(props) {
    super(props); // 상속한 클래스의 constructor으로 전달.
    // render함수보다 먼저 호출되기 때문에 constructor에서 초기세팅해야함.
    this.state = {
        subject : { title : "HTML", sub : "HyperText Markup Language"}
    }
}
...
render() {
    return (
        &lt;div className="wrap">
            state값을 컴포넌트의 this.props으로 전달함.
            &lt;SubJect title={this.state.subject.title} sub={this.state.subject.sub}/>
        &lt;/div>
    );
}
</pre>

## 10. shouldComponentUpdate

리엑트는 state가 변경될 경우 render함수를 호출하여 컴포넌트를 렌더링을 함.<br>
무차별적으로 렌더링이 발생할 경우, 현재처럼 소규모 프로젝트는 괜찮으나, 대규모 프로젝트시 문제가 발생할 가능성이 큼<br>
따라서 리엑트에서 제공하는 shouldComponentUpdate메서드를 이용하여 무분별한 렌더링을 제어해야함.<br>

shouldComponentUpdate의 경우 ES6메서드 방식으로 작성되며, 반환값은 boolean타입<br>
만약 false를 반환할 경우 render함수를 호출하지 않으며, true시 render함수를 동작시킴.<br>
메서드의 매개변수로 newProps, newState값을 전달받음<br>

newProps는 변경된 props를 의미하고, newState는 변경된 state값을 의미하는데,<br>
해당 값들을 this.props 또는 this.state으로 비교하여 boolean타입으로 반환한다.

<pre>
shouldComponentUpdate(newProps, newState) {
    // CRUD의 Create시 추가된 항목이 없을 경우 false를 반환하여 무분별한 렌더링을 막는다.
    if (newProps.data.length === this.props.data.length) {
        return false;
    }

    return true;
}
</pre>
