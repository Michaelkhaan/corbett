import { API_URL, fetchParams } from '../../../config/index'
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
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

export type Itinerary = {
  __typename?: 'Itinerary';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  package_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ItineraryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
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
  updateCategory: Message;
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
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>>>;
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


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
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
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>>>;
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
  Itinerary?: Maybe<Array<Maybe<Itinerary>>>;
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


export type QueryGetAllPackagesArgs = {
  endPrice?: InputMaybe<Scalars['Float']['input']>;
  startPrice?: InputMaybe<Scalars['Float']['input']>;
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

export type AddCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Message', message: string } };

export type AddPackageMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>> | InputMaybe<HighlightInput>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>> | InputMaybe<TourIncludeInput>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>> | InputMaybe<PackageInclusionInput>>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>> | InputMaybe<PackageExclusionInput>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>> | InputMaybe<PackageFaqInput>>;
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>> | InputMaybe<ItineraryInput>>;
}>;


export type AddPackageMutation = { __typename?: 'Mutation', addPackage: { __typename?: 'Message', message: string } };

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['ID']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'Message', message: string } };

export type DeletePackageMutationVariables = Exact<{
  deletePackageId: Scalars['ID']['input'];
}>;


export type DeletePackageMutation = { __typename?: 'Mutation', deletePackage: { __typename?: 'Message', message: string } };

export type SubmitFormMutationVariables = Exact<{
  date: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  city: Scalars['String']['input'];
}>;


export type SubmitFormMutation = { __typename?: 'Mutation', submitForm: { __typename?: 'Message', message: string } };

export type UpdateCategoryMutationVariables = Exact<{
  updateCategoryId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Message', message: string } };

export type UpdatePackageMutationVariables = Exact<{
  updatePackageId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>> | InputMaybe<HighlightInput>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>> | InputMaybe<TourIncludeInput>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>> | InputMaybe<PackageInclusionInput>>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>> | InputMaybe<PackageExclusionInput>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>> | InputMaybe<PackageFaqInput>>;
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>> | InputMaybe<ItineraryInput>>;
}>;


export type UpdatePackageMutation = { __typename?: 'Mutation', updatePackage: { __typename?: 'Message', message: string } };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null };

export type GetAllFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFormQuery = { __typename?: 'Query', getAllForm?: { __typename?: 'FormResponse', total?: number | null, data?: Array<{ __typename?: 'Form', date: string, contact: string, city: string } | null> | null } | null };

export type GetAllPackagesQueryVariables = Exact<{
  startPrice?: InputMaybe<Scalars['Float']['input']>;
  endPrice?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetAllPackagesQuery = { __typename?: 'Query', getAllPackages: { __typename?: 'PackageResponse', total: number, data: Array<{ __typename?: 'Package', image?: string | null, name: string, price: number, title: string, category_id: number, createdAt: string, description?: string | null, id: number, updatedAt: string, Category?: { __typename?: 'Category', id: number, name: string, createdAt: string, updatedAt: string } | null, Exclusions?: Array<{ __typename?: 'PackageExclusion', package_id: number, title: string, updatedAt: string, id: number, createdAt: string } | null> | null, Faqs?: Array<{ __typename?: 'PackageFaq', package_id: number, title: string, updatedAt: string, description?: string | null, id: number, createdAt: string } | null> | null, Highlights?: Array<{ __typename?: 'Highlight', package_id: number, updatedAt: string, name: string, id: number, createdAt: string } | null> | null, Includes?: Array<{ __typename?: 'TourInclude', createdAt: string, id: number, image?: string | null, name: string, package_id: number, updatedAt: string } | null> | null, Inclusions?: Array<{ __typename?: 'PackageInclusion', createdAt: string, id: number, package_id: number, title: string, updatedAt: string } | null> | null } | null> } };

export type GetPackageByIdQueryVariables = Exact<{
  getPackageByIdId: Scalars['ID']['input'];
}>;


export type GetPackageByIdQuery = { __typename?: 'Query', getPackageById: { __typename?: 'Package', title: string, price: number, image?: string | null, id: number, Faqs?: Array<{ __typename?: 'PackageFaq', id: number, title: string, description?: string | null } | null> | null, Exclusions?: Array<{ __typename?: 'PackageExclusion', id: number, title: string } | null> | null, Highlights?: Array<{ __typename?: 'Highlight', id: number, name: string, package_id: number } | null> | null, Includes?: Array<{ __typename?: 'TourInclude', image?: string | null, name: string, id: number } | null> | null, Inclusions?: Array<{ __typename?: 'PackageInclusion', id: number, title: string } | null> | null, Itinerary?: Array<{ __typename?: 'Itinerary', name: string, title: string, description?: string | null } | null> | null, Category?: { __typename?: 'Category', name: string } | null } };



export const AddCategoryDocument = `
    mutation addCategory($name: String!) {
  addCategory(name: $name) {
    message
  }
}
    `;

export const useAddCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCategoryMutation, TError, AddCategoryMutationVariables, TContext>) => {
    
    return useMutation<AddCategoryMutation, TError, AddCategoryMutationVariables, TContext>(
      {
    mutationKey: ['addCategory'],
    mutationFn: (variables?: AddCategoryMutationVariables) => fetcher<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, variables)(),
    ...options
  }
    )};

export const AddPackageDocument = `
    mutation AddPackage($categoryId: Int!, $name: String!, $title: String!, $price: Float!, $image: String, $description: String, $highlights: [HighlightInput], $includes: [TourIncludeInput], $inclusions: [PackageInclusionInput], $exclusions: [PackageExclusionInput], $faqs: [PackageFaqInput], $itinerary: [ItineraryInput]) {
  addPackage(
    category_id: $categoryId
    name: $name
    title: $title
    price: $price
    image: $image
    description: $description
    highlights: $highlights
    includes: $includes
    inclusions: $inclusions
    exclusions: $exclusions
    faqs: $faqs
    itinerary: $itinerary
  ) {
    message
  }
}
    `;

export const useAddPackageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddPackageMutation, TError, AddPackageMutationVariables, TContext>) => {
    
    return useMutation<AddPackageMutation, TError, AddPackageMutationVariables, TContext>(
      {
    mutationKey: ['AddPackage'],
    mutationFn: (variables?: AddPackageMutationVariables) => fetcher<AddPackageMutation, AddPackageMutationVariables>(AddPackageDocument, variables)(),
    ...options
  }
    )};

export const DeleteCategoryDocument = `
    mutation deleteCategory($deleteCategoryId: ID!) {
  deleteCategory(id: $deleteCategoryId) {
    message
  }
}
    `;

export const useDeleteCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>) => {
    
    return useMutation<DeleteCategoryMutation, TError, DeleteCategoryMutationVariables, TContext>(
      {
    mutationKey: ['deleteCategory'],
    mutationFn: (variables?: DeleteCategoryMutationVariables) => fetcher<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, variables)(),
    ...options
  }
    )};

export const DeletePackageDocument = `
    mutation DeletePackage($deletePackageId: ID!) {
  deletePackage(id: $deletePackageId) {
    message
  }
}
    `;

export const useDeletePackageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeletePackageMutation, TError, DeletePackageMutationVariables, TContext>) => {
    
    return useMutation<DeletePackageMutation, TError, DeletePackageMutationVariables, TContext>(
      {
    mutationKey: ['DeletePackage'],
    mutationFn: (variables?: DeletePackageMutationVariables) => fetcher<DeletePackageMutation, DeletePackageMutationVariables>(DeletePackageDocument, variables)(),
    ...options
  }
    )};

export const SubmitFormDocument = `
    mutation SubmitForm($date: String!, $contact: String!, $city: String!) {
  submitForm(date: $date, contact: $contact, city: $city) {
    message
  }
}
    `;

export const useSubmitFormMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubmitFormMutation, TError, SubmitFormMutationVariables, TContext>) => {
    
    return useMutation<SubmitFormMutation, TError, SubmitFormMutationVariables, TContext>(
      {
    mutationKey: ['SubmitForm'],
    mutationFn: (variables?: SubmitFormMutationVariables) => fetcher<SubmitFormMutation, SubmitFormMutationVariables>(SubmitFormDocument, variables)(),
    ...options
  }
    )};

export const UpdateCategoryDocument = `
    mutation UpdateCategory($updateCategoryId: ID!, $name: String!) {
  updateCategory(id: $updateCategoryId, name: $name) {
    message
  }
}
    `;

export const useUpdateCategoryMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>) => {
    
    return useMutation<UpdateCategoryMutation, TError, UpdateCategoryMutationVariables, TContext>(
      {
    mutationKey: ['UpdateCategory'],
    mutationFn: (variables?: UpdateCategoryMutationVariables) => fetcher<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, variables)(),
    ...options
  }
    )};

export const UpdatePackageDocument = `
    mutation UpdatePackage($updatePackageId: ID!, $name: String!, $title: String!, $image: String, $categoryId: Int, $description: String, $price: Float!, $highlights: [HighlightInput], $includes: [TourIncludeInput], $inclusions: [PackageInclusionInput], $exclusions: [PackageExclusionInput], $faqs: [PackageFaqInput], $itinerary: [ItineraryInput]) {
  updatePackage(
    id: $updatePackageId
    name: $name
    title: $title
    image: $image
    category_id: $categoryId
    description: $description
    price: $price
    highlights: $highlights
    includes: $includes
    inclusions: $inclusions
    exclusions: $exclusions
    faqs: $faqs
    itinerary: $itinerary
  ) {
    message
  }
}
    `;

export const useUpdatePackageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatePackageMutation, TError, UpdatePackageMutationVariables, TContext>) => {
    
    return useMutation<UpdatePackageMutation, TError, UpdatePackageMutationVariables, TContext>(
      {
    mutationKey: ['UpdatePackage'],
    mutationFn: (variables?: UpdatePackageMutationVariables) => fetcher<UpdatePackageMutation, UpdatePackageMutationVariables>(UpdatePackageDocument, variables)(),
    ...options
  }
    )};

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

export const GetAllFormDocument = `
    query GetAllForm {
  getAllForm {
    total
    data {
      date
      contact
      city
    }
  }
}
    `;

export const useGetAllFormQuery = <
      TData = GetAllFormQuery,
      TError = unknown
    >(
      variables?: GetAllFormQueryVariables,
      options?: Omit<UseQueryOptions<GetAllFormQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAllFormQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAllFormQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAllForm'] : ['GetAllForm', variables],
    queryFn: fetcher<GetAllFormQuery, GetAllFormQueryVariables>(GetAllFormDocument, variables),
    ...options
  }
    )};

export const GetAllPackagesDocument = `
    query GetAllPackages($startPrice: Float, $endPrice: Float) {
  getAllPackages(startPrice: $startPrice, endPrice: $endPrice) {
    total
    data {
      image
      name
      price
      title
      category_id
      Category {
        id
        name
        createdAt
        updatedAt
      }
      Exclusions {
        package_id
        title
        updatedAt
        id
        createdAt
      }
      Faqs {
        package_id
        title
        updatedAt
        description
        id
        createdAt
      }
      Highlights {
        package_id
        updatedAt
        name
        id
        createdAt
      }
      Includes {
        createdAt
        id
        image
        name
        package_id
        updatedAt
      }
      Inclusions {
        createdAt
        id
        package_id
        title
        updatedAt
      }
      createdAt
      description
      id
      updatedAt
    }
  }
}
    `;

export const useGetAllPackagesQuery = <
      TData = GetAllPackagesQuery,
      TError = unknown
    >(
      variables?: GetAllPackagesQueryVariables,
      options?: Omit<UseQueryOptions<GetAllPackagesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAllPackagesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAllPackagesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAllPackages'] : ['GetAllPackages', variables],
    queryFn: fetcher<GetAllPackagesQuery, GetAllPackagesQueryVariables>(GetAllPackagesDocument, variables),
    ...options
  }
    )};

export const GetPackageByIdDocument = `
    query GetPackageById($getPackageByIdId: ID!) {
  getPackageById(id: $getPackageByIdId) {
    title
    price
    image
    id
    Faqs {
      id
      title
      description
    }
    Exclusions {
      id
      title
    }
    Highlights {
      id
      name
      package_id
    }
    Includes {
      image
      name
      id
    }
    Inclusions {
      id
      title
    }
    Itinerary {
      name
      title
      description
    }
    Category {
      name
    }
  }
}
    `;

export const useGetPackageByIdQuery = <
      TData = GetPackageByIdQuery,
      TError = unknown
    >(
      variables: GetPackageByIdQueryVariables,
      options?: Omit<UseQueryOptions<GetPackageByIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetPackageByIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetPackageByIdQuery, TError, TData>(
      {
    queryKey: ['GetPackageById', variables],
    queryFn: fetcher<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, variables),
    ...options
  }
    )};
