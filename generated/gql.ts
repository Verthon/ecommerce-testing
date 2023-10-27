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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}": types.CreateAccountDocument,
    "query GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategoriesByPrimaryWithLocale($isPrimaryCategory: Boolean!, $locale: Locale!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}, locales: [$locale]) {\n    id\n    name\n    slug\n    description\n    image {\n      id\n      url(transformation: {image: {resize: {fit: crop, height: 250, width: 250}}})\n      width\n      height\n    }\n  }\n}\n\nquery GetAllProductsList($locale: Locale!) {\n  products(locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetProductsByCategorySlug($locales: [Locale!]!, $categorySlugName: String!) {\n  products(locales: $locales, where: {categories_some: {slug: $categorySlugName}}) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllPrimaryCategoriesSlugs {\n  categories(where: {isPrimaryCategory: true}) {\n    id\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String!, $locale: Locale!) {\n  product(where: {slug: $slug}, locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    description\n    productAvailability\n  }\n}\n\nquery GetAllProductSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductsByCategorySlugAndCollectionSlug($categorySlug: String!, $collectionSlug: String!, $locale: Locale!) {\n  products(\n    where: {AND: [{categories_some: {slug: $categorySlug}}, {collections_some: {slug: $collectionSlug}}]}\n    locales: [$locale]\n  ) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllCategoriesSlugs($locale: Locale!) {\n  categories(locales: [$locale]) {\n    slug\n  }\n}\n\nquery GetAllCollectionsSlugs($locale: Locale!) {\n  collections(locales: [$locale]) {\n    slug\n  }\n}": types.GetAccountByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateAccount($email: String!, $password: String!, $companyName: String!) {\n  createAccount(\n    data: {email: $email, password: $password, companyName: $companyName}\n  ) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategoriesByPrimaryWithLocale($isPrimaryCategory: Boolean!, $locale: Locale!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}, locales: [$locale]) {\n    id\n    name\n    slug\n    description\n    image {\n      id\n      url(transformation: {image: {resize: {fit: crop, height: 250, width: 250}}})\n      width\n      height\n    }\n  }\n}\n\nquery GetAllProductsList($locale: Locale!) {\n  products(locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetProductsByCategorySlug($locales: [Locale!]!, $categorySlugName: String!) {\n  products(locales: $locales, where: {categories_some: {slug: $categorySlugName}}) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllPrimaryCategoriesSlugs {\n  categories(where: {isPrimaryCategory: true}) {\n    id\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String!, $locale: Locale!) {\n  product(where: {slug: $slug}, locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    description\n    productAvailability\n  }\n}\n\nquery GetAllProductSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductsByCategorySlugAndCollectionSlug($categorySlug: String!, $collectionSlug: String!, $locale: Locale!) {\n  products(\n    where: {AND: [{categories_some: {slug: $categorySlug}}, {collections_some: {slug: $collectionSlug}}]}\n    locales: [$locale]\n  ) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllCategoriesSlugs($locale: Locale!) {\n  categories(locales: [$locale]) {\n    slug\n  }\n}\n\nquery GetAllCollectionsSlugs($locale: Locale!) {\n  collections(locales: [$locale]) {\n    slug\n  }\n}"): (typeof documents)["query GetAccountByEmail($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    password\n  }\n}\n\nquery GetAllCategoriesByPrimaryWithLocale($isPrimaryCategory: Boolean!, $locale: Locale!) {\n  categories(where: {isPrimaryCategory: $isPrimaryCategory}, locales: [$locale]) {\n    id\n    name\n    slug\n    description\n    image {\n      id\n      url(transformation: {image: {resize: {fit: crop, height: 250, width: 250}}})\n      width\n      height\n    }\n  }\n}\n\nquery GetAllProductsList($locale: Locale!) {\n  products(locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetProductsByCategorySlug($locales: [Locale!]!, $categorySlugName: String!) {\n  products(locales: $locales, where: {categories_some: {slug: $categorySlugName}}) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllPrimaryCategoriesSlugs {\n  categories(where: {isPrimaryCategory: true}) {\n    id\n    slug\n  }\n}\n\nquery GetProductBySlug($slug: String!, $locale: Locale!) {\n  product(where: {slug: $slug}, locales: [$locale]) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    description\n    productAvailability\n  }\n}\n\nquery GetAllProductSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetProductsByCategorySlugAndCollectionSlug($categorySlug: String!, $collectionSlug: String!, $locale: Locale!) {\n  products(\n    where: {AND: [{categories_some: {slug: $categorySlug}}, {collections_some: {slug: $collectionSlug}}]}\n    locales: [$locale]\n  ) {\n    id\n    name\n    slug\n    images(first: 1) {\n      id\n      url\n      width\n      height\n    }\n    productAvailability\n  }\n}\n\nquery GetAllCategoriesSlugs($locale: Locale!) {\n  categories(locales: [$locale]) {\n    slug\n  }\n}\n\nquery GetAllCollectionsSlugs($locale: Locale!) {\n  collections(locales: [$locale]) {\n    slug\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;