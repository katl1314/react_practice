import { Component } from "react";

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        /**
         * 하위 컴포넌트에서 props값을 직접 value에 넣을 경우 Read Only가 됨. (props는 하위 컴포넌트는 읽기 전용)
         * constructor에서 this.state에 props값을 할당함.
         */
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc,
        };
    }

    inputFormSubmit(e) {
        // onChange이벤트를 통해 setState를 호출하여, state를 변경함.
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <form
                action="/update"
                method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    const id = this.props.data.id;
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onSubmit({ id, title, desc });
                }}
            >
                <p>
                    <label htmlFor="title">TITLE</label>
                    <br></br>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={this.state.title}
                        onChange={this.inputFormSubmit.bind(this)}
                    ></input>
                </p>
                <p>
                    <label htmlFor="desc">Desc</label>
                    <br></br>
                    <textarea
                        type="text"
                        name="desc"
                        id="desc"
                        value={this.state.desc}
                        onChange={this.inputFormSubmit.bind(this)}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="제출" />
                </p>
            </form>
        );
    }
}

export default UpdateContent;
