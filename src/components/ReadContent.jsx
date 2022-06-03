import { Component } from "react";

class ReadContent extends Component {
    render() {
        const { title, desc } = this.props;
        return (
            <article>
                <h2>{title}</h2>
                <p>{desc}</p>
            </article>
        );
    }
}

export default ReadContent;
