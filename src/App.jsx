import "./App.css";

import {
    SubJect,
    Nav,
    Control,
    ReadContent,
    CreateContent,
    UpdateContent,
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
        this.max_content_index = 3;
        console.log("MyReactApp constructor");
    }

    getReadContent() {
        let i = 0;
        while (i < this.state.content.length) {
            var data = this.state.content[i];
            if (data.id === this.state.select_index) {
                return data;
            }
            i++;
        }
    }

    getContent() {
        let _article;
        if (this.state.mode === "welcome") {
            _article = (
                <ReadContent
                    title={this.state.welcome.title}
                    desc={this.state.welcome.desc}
                />
            );
        } else if (this.state.mode === "read") {
            const data = this.getReadContent();
            _article = <ReadContent title={data.title} desc={data.desc} />;
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={({ title, desc }) => {
                        // Spread문법 또는 Array.from을 통해 배열 복사본 생성 가능
                        // 배열 복사본을 만드는 이유 -> 원본 배열이 훼손되지 않게끔 하기 위해서
                        const datas = [...this.state.content];
                        const maxIndex = this.max_content_index + 1;
                        datas.push({
                            id: maxIndex,
                            title,
                            desc,
                        });
                        this.setState({
                            content: datas,
                            mode: "read",
                            select_index: maxIndex,
                        });
                    }}
                />
            );
        } else if (this.state.mode === "update") {
            const data = this.getReadContent();
            if (data) {
                _article = (
                    <UpdateContent
                        data={data}
                        onSubmit={({ title, desc }) => {
                            const _content = this.state.content.map((d) => {
                                if (d.id === this.state.select_index) {
                                    return { id: d.id, title, desc };
                                }
                                return {
                                    id: d.id,
                                    title: d.title,
                                    desc: d.desc,
                                };
                            });
                            this.setState({ content: _content });
                        }}
                    />
                );
            }
        }
        return _article;
    }
    render() {
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
                            select_index: id,
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

                {this.getContent()}
            </div>
        );
    }
}

export default MyReactApp;
