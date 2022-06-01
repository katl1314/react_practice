import { Component } from "react";

class SubJect extends Component {
    render() {
        const { title, sub } = this.props;
        return (
            <header>
                <h1>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangePage();
                        }}
                    >
                        {title}
                    </a>
                </h1>
                <p>{sub}</p>
            </header>
        );
    }
}

export default SubJect;
