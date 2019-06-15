import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
    <React.Fragment>
        <Head>
            <title>Next.js App</title>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>

        <style jsx>{`
            .content {
                width: 900px;
                margin: 0 auto;
            }
        `}</style>

        <div className="content">
            <Navbar/>

            {props.children}
        </div>
    </React.Fragment>
);

export default Layout;