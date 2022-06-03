import { Component } from "react";

class Nav extends Component {
    /**
     * 리엑트에서 성능 향상을 이유로, 조건에 따라 렌더링 실시하는 메서드임
     * @param {any} newProps  - 변경된 props
     * @param {any} newState  - 변경된 state
     * @returns {boolean} true : 렌더링 O, false : 렌더링 X
     */
    shouldComponentUpdate(newProps, newState) {
        /**
         * 리엑트는 기본적으로 state가 변경되면 렌더링이 발생함.
         * 아무 관계 없는 컴포넌트도 렌더링이 발생하기 때문에
         * 페이스북에서는 shouldComponentUpdate메서드를 지원하며
         * false를 반환함으로써 무의미한 렌더링을 제어한다.(성능 개선)
         */
        // 새로운 항목이 추가되면 render메서드를 호출한다.
        if (newProps.data.length > this.props.data.length) {
            return true;
        }
        return false; // 항목이 추가되지 않으면 render메서드를 호출하지 않는다.
    }
    render() {
        console.log("Nav render");
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
