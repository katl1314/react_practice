import "./App.css";

import {
    SubJect,
    Nav,
    Control,
    ReadContent,
    CreateContent,
} from "./components/index.js";

import React, { Component } from "react";

class MyReactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                title: "WEB",
                sub: "world wide web!",
            },
            mode: "read",
            welcome: { title: "Welcome", desc: "Hello, React" },
            select_index: 2,
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
        this.max_content_index = 3;
        console.log("MyReactApp constructor");
    }

    render() {
        let _title, _desc, _article;

        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc} />;
        } else if (this.state.mode === "read") {
            let index = 0;
            while (index < this.state.content.length) {
                if (index === this.state.select_index) {
                    _title = this.state.content[index].title;
                    _desc = this.state.content[index].desc;
                    _article = <ReadContent title={_title} desc={_desc} />;
                    break;
                }
                index++;
            }
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={({ title, desc }) => {
                        // Spread문법 또는 Array.from을 통해 배열 복사본 생성 가능
                        // 배열 복사본을 만드는 이유 -> 원본 배열이 훼손되지 않게끔 하기 위해서
                        const datas = [...this.state.content];
                        const maxIndex = this.max_content_index + 1;
                        // Array.prototype.push(...datas): number(array length)
                        datas.push({
                            id: maxIndex,
                            title,
                            desc,
                        });
                        this.setState({
                            content: datas,
                            mode: "read",
                            select_index: maxIndex - 1,
                        });
                    }}
                />
            );
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
                <Control
                    onChangeControl={(mode) => {
                        this.setState({
                            mode,
                        });
                    }}
                />

                {_article}
            </div>
        );
    }
}

export default MyReactApp;
