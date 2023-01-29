/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}": types.CreateAccountDocument,
    "query GetAllProducts {\n  products {\n    id\n    slug\n    name\n    description\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategories {\n  categories {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}\n\nquery GetAllCategoriesByPrimary($isPrimaryCategory: Boolean!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}) {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}": types.GetAllProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllProducts {\n  products {\n    id\n    slug\n    name\n    description\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategories {\n  categories {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}\n\nquery GetAllCategoriesByPrimary($isPrimaryCategory: Boolean!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}) {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}"): (typeof documents)["query GetAllProducts {\n  products {\n    id\n    slug\n    name\n    description\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategories {\n  categories {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}\n\nquery GetAllCategoriesByPrimary($isPrimaryCategory: Boolean!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}) {\n    id\n    name\n    description\n    image {\n      id\n      height\n      width\n      url\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;