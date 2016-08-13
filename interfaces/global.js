/* @flow */

import React from "react";

declare module CSSModule {
  declare var exports: { [key: string]: string };
}

declare module 'flux/utils' {
    declare var Container: any;
}

declare module 'react-document-meta' {
    declare class DocumentMeta extends React.Component {}
    declare var exports: Class<DocumentMeta>;
}

declare module "material-ui/Paper" {
  declare class Paper extends React.Component {}
  declare var exports: Class<Paper>;
}
