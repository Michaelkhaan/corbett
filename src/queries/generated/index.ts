import { API_URL, fetchParams } from '../../../config/index'
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(API_URL as string, {
    method: "POST",
    ...(fetchParams()),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Form = {
  __typename?: 'Form';
  city: Scalars['String']['output'];
  contact: Scalars['String']['output'];
  date: Scalars['String']['output'];
};

export type FormResponse = {
  __typename?: 'FormResponse';
  data?: Maybe<Array<Maybe<Form>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Highlight = {
  __typename?: 'Highlight';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  package?: Maybe<Package>;
  package_id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type HighlightInput = {
  name: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Login: LoginResponse;
  addCategory: Message;
  addPackage: Message;
  deleteCategory: Message;
  deletePackage: Message;
  submitForm: Message;
  updatePackage: Message;
  updateProfile?: Maybe<Message>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAddCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddPackageArgs = {
  category_id: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>>>;
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>>>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePackageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSubmitFormArgs = {
  city: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  date: Scalars['String']['input'];
};


export type MutationUpdatePackageArgs = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>>>;
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>>>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>>>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Package = {
  __typename?: 'Package';
  Category?: Maybe<Category>;
  Exclusions?: Maybe<Array<Maybe<PackageExclusion>>>;
  Faqs?: Maybe<Array<Maybe<PackageFaq>>>;
  Highlights?: Maybe<Array<Maybe<Highlight>>>;
  Includes?: Maybe<Array<Maybe<TourInclude>>>;
  Inclusions?: Maybe<Array<Maybe<PackageInclusion>>>;
  category_id: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PackageExclusion = {
  __typename?: 'PackageExclusion';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  package?: Maybe<Package>;
  package_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PackageExclusionInput = {
  title: Scalars['String']['input'];
};

export type PackageFaq = {
  __typename?: 'PackageFaq';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  package?: Maybe<Package>;
  package_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PackageFaqInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PackageInclusion = {
  __typename?: 'PackageInclusion';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  package?: Maybe<Package>;
  package_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PackageInclusionInput = {
  title: Scalars['String']['input'];
};

export type PackageResponse = {
  __typename?: 'PackageResponse';
  data: Array<Maybe<Package>>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories?: Maybe<Array<Maybe<Category>>>;
  getAllForm?: Maybe<FormResponse>;
  getAllPackages: PackageResponse;
  getPackageById: Package;
  test?: Maybe<Scalars['String']['output']>;
};


export type QueryGetPackageByIdArgs = {
  id: Scalars['ID']['input'];
};

export type TourInclude = {
  __typename?: 'TourInclude';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  package?: Maybe<Package>;
  package_id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TourIncludeInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null };



export const GetAllCategoriesDocument = `
    query GetAllCategories {
  getAllCategories {
    id
    name
  }
}
    `;

export const useGetAllCategoriesQuery = <
      TData = GetAllCategoriesQuery,
      TError = unknown
    >(
      variables?: GetAllCategoriesQueryVariables,
      options?: Omit<UseQueryOptions<GetAllCategoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAllCategoriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAllCategoriesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAllCategories'] : ['GetAllCategories', variables],
    queryFn: fetcher<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, variables),
    ...options
  }
    )};
