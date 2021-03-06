import "./App.css";

import SubJect from "./components/Subject";
import Nav from "./components/Nav";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

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
            select_index: -1,
            content: [
                { id: 0, title: "HTML", desc: "HTML is for infomation" },
                { id: 1, title: "CSS", desc: "CSS is for design" },
                {
                    id: 2,
                    title: "JavaScript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
        this.max_content_index = this.state.content.length;
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
                        const maxIndex = this.max_content_index;
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
                        onSubmit={({ id, title, desc }) => {
                            const _content = this.state.content.map((d) => {
                                if (d.id === id) {
                                    return { id, title, desc };
                                }
                                return {
                                    id: d.id,
                                    title: d.title,
                                    desc: d.desc,
                                };
                            });
                            this.setState({ content: _content, mode: "read" });
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
                    index={this.state.select_index}
                    onChangeNav={(id) => {
                        this.setState({
                            mode: "read",
                            select_index: id,
                        });
                    }}
                />
                <Control
                    onChangeControl={(mode) => {
                        if (mode === "delete") {
                            // 선택한 항목이 없으면?
                            if (this.state.select_index < 0) {
                                return false;
                            }

                            // 아니오 클릭 시
                            if (!window.confirm("정말 삭제 하시겠습니까?")) {
                                return false;
                            }

                            const _content = this.state.content.filter((d) => {
                                return d.id !== this.state.select_index;
                            });

                            this.setState({
                                select_index: -1,
                                content: _content,
                                mode: "welcome",
                            });
                        } else {
                            this.setState({
                                mode,
                            });
                        }
                    }}
                />
                {this.getContent()}
            </div>
        );
    }
}

export default MyReactApp;
