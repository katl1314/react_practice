import { Component } from "react";

class Article extends Component {
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

export default Article;
