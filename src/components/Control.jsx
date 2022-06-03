import { Component } from "react";

class Control extends Component {
    render() {
        return (
            <ul className="control">
                <li key="create">
                    <a
                        href="/create"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeControl("create");
                        }}
                    >
                        create
                    </a>
                </li>
                <li key="update">
                    <a
                        href="/update"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeControl("update");
                        }}
                    >
                        update
                    </a>
                </li>
                <li key="delete">
                    <input
                        type="button"
                        value="delete"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeControl("delete");
                        }}
                    />
                </li>
            </ul>
        );
    }
}

export default Control;
