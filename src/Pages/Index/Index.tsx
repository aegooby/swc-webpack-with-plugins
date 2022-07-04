import * as React from "react";
import * as Relay from "react-relay";
import { graphql } from "relay-runtime";

import { default as logo } from "./logo.svg";

import type { IndexFragment$key } from "./__generated__/IndexFragment.graphql";
import "./Index.css";

const fragment = graphql`
    fragment IndexFragment on Query {
        message
    }
`;

interface SuspendableProps {
    fragmentRef: IndexFragment$key,
}

function Suspendable(props: SuspendableProps) {
    const data = Relay.useFragment<IndexFragment$key>(fragment, props.fragmentRef);
    const element: React.ReactElement =
        <>GraphQL says: "{data.message}"</>;
    return element;
}

interface IndexProps {
    fragmentRef: IndexFragment$key,
}

export default function Index(props: IndexProps) {
    // Create the count state.
    const [count, setCount] = React.useState(0);
    // Create the counter (+1 every second).
    React.useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);


    // Return the Index component.
    const element: React.ReactElement =
        <div className="Index">
            <header className="Index-header">
                <img src={logo} className="Index-logo" alt="logo" />
                <p>Edit <code>src/Index.tsx</code> and save to reload.</p>
                <p>
                    <React.Suspense fallback={<>loading...</>}>
                        <Suspendable fragmentRef={props.fragmentRef} />
                    </React.Suspense>
                </p>
                <p>Page has been open for <code>{count}</code> seconds.</p>
            </header>
        </div>;
    return element;
}