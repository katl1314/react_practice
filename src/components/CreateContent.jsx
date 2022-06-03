import { Component } from "react";

class CreateContent extends Component {
    render() {
        return (
            <form
                action="/create_process"
                method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onSubmit({ title, desc });
                }}
            >
                <p>
                    <label htmlFor="title">TITLE</label>
                    <br></br>
                    <input type="text" name="title" id="title"></input>
                </p>
                <p>
                    <label htmlFor="desc">Desc</label>
                    <br></br>
                    <textarea type="text" name="desc" id="desc"></textarea>
                </p>
                <p>
                    <input type="submit" value="제출" />
                </p>
            </form>
        );
    }
}

export default CreateContent;
