interface RequireImport {
    default: any;
}

// https://github.com/apollographql/graphql-tag/issues/59#issuecomment-303366083
declare module '*.graphql' {
	import { DocumentNode } from 'graphql';

	const value: DocumentNode;
	export = value;
}

declare module '*.png';

