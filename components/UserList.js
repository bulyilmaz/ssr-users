import Link from "next/link";

const UserList = props => (
    <ul>
        { props.users.map((user, key) => (
            <li key={key}><Link href={`/user?name=${user.username}`} as={`/user/${user.username}`}><a>{user.name}</a></Link></li>
        )) }
    </ul>
);

export default UserList;