import { Component } from "react";

class Nav extends Component {
    render() {
        let list = [];
        let data = this.props.data;

        list = data.map(({ id, title }) => {
            return (
                <li key={id}>
                    <a
                        href={"/content/" + id}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeNav.call(null, id);
                        }}
                    >
                        {title}
                    </a>
                </li>
            );
        });
        return (
            <nav>
                <ul>{list}</ul>
            </nav>
        );
    }
}

export default Nav;
