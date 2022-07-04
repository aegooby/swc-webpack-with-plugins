/**
 * @generated SignedSource<<35765f9d4f8cd104b9b57941e9ab14c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IndexFragment$data = {
  readonly message: string;
  readonly " $fragmentType": "IndexFragment";
};
export type IndexFragment$key = {
  readonly " $data"?: IndexFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IndexFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IndexFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "fe3fe665495a12a887174fb11411f40d";

export default node;
