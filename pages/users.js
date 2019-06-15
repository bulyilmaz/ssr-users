import fetch from "isomorphic-fetch";

import Layout from "../components/Layout";
import UserList from "../components/UserList";

class Users extends React.Component {
    static getInitialProps = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        return {
            users
        };
    };

    render() {
        const { users } = this.props;

        return (
            <Layout>
                <p>users page</p>
                <UserList users={users}/>
            </Layout>
        );
    }
}

export default Users;