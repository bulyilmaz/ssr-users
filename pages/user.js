import Layout from "../components/Layout";

const User = props => (
    <Layout>
        <p>user detail page</p>
        <p className="name">{props.url.query.name}</p>
    </Layout>
);

export default User;