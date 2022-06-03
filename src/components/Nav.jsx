import { Component } from "react";

class Nav extends Component {
    render() {
        let list = [];
        let data = this.props.data;
        // this.props.data의 id, title을 이용하여 생성한 태그를 포함한 배열을 생성.
        // 생성한 배열을 가지고 렌더링.
        list = data.map(({ id, title }) => {
            return (
                <li key={id}>
                    <a
                        href={"/content/" + id}
                        data-id={id}
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
