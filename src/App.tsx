import * as React from "react";
import * as Relay from "react-relay";
import * as Router from "react-router-dom";
import { graphql } from "relay-runtime";

import { relayEnvironment } from "./entry/relay";
const Index = React.lazy(() => import("./Pages/Index/Index"));

import type { AppQuery } from "./__generated__/AppQuery.graphql";

const query = graphql`
    query AppQuery {
        ...IndexFragment
    }
`;

const preloadedQuery = Relay.loadQuery<AppQuery>(relayEnvironment, query, {});

function __Index() {
    const data = Relay.usePreloadedQuery(query, preloadedQuery);
    const element: React.ReactElement =
        <>
            <React.Suspense fallback={<></>}>
                <Index fragmentRef={data} />
            </React.Suspense>
        </>;
    return element;
}

export default function App() {
    const element: React.ReactElement =
        <React.Suspense fallback={<></>}>
            <Router.Routes>
                <Router.Route path="/" element={<__Index />} />
                <Router.Route path="*" element={<>NOT FOUND</>} />
            </Router.Routes>
        </React.Suspense>;
    return element;
}