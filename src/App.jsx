import "./App.css";
import React, { Component } from "react";
import SubJect from "./components/Subject";
import Nav from "./components/Nav";
import Article from "./components/Article";
/**
 * 함수형 컴포넌트에서 클래스형 컴포넌트로 변환.
 * 클래스 컴포넌트 사용시 ES6 render메서드로 작성하고 해당 render메서드내에서 return 문을 작성함.
 *
 * 리엑트 컴포넌트는 하나의 태그안에 들어가야 정상적으로 동작함.
 * 즉 가장 바깥쪽에는 하나의 태그만 존재해야함.
 *
 * App 컴포넌트에서 내부 state을 통해 내부 데이터를 사용하고, 각 컴포넌트에 props을 이용하여 전달하였다.
 */
class MyReactApp extends Component {
    constructor(props) {
        super(props);
        // state를 작성하기 위해서는 constructor에서 작성되야함.
        this.state = {
            subject: {
                title: "WEB",
                sub: "world wide web!",
            },
            mode: "welcome",
            welcome: { title: "Welcome", desc: "Hello, React" },
            select_index: 0,
            content: [
                { id: 1, title: "HTML", desc: "HTML is for infomation" },
                { id: 2, title: "CSS", desc: "CSS is for design" },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
    }
    render() {
        let _title, _desc;

        if (this.state.mode === "welcome") {
            // this.state.mode가 welcome일 경우 각각 표시함.
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            // 첫번째 항목 표시
            _title = this.state.content[this.state.select_index].title;
            _desc = this.state.content[this.state.select_index].desc;
        }

        return (
            <div className="wrap">
                {
                    <SubJect
                        title={this.state.subject.title}
                        sub={this.state.subject.sub}
                        onChangePage={() => {
                            // state를 변경하여 다시 렌더링
                            this.setState({ mode: "welcome" });
                        }}
                    />
                }

                <Nav
                    data={this.state.content}
                    onChangeNav={(id) => {
                        this.setState({
                            mode: "read",
                            select_index: id - 1,
                        });
                    }}
                />
                <Article title={_title} desc={_desc} />
            </div>
        );
    }
}

export default MyReactApp;
