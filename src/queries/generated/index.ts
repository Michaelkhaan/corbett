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
  date?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  person?: Maybe<Scalars['String']['output']>;
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
  addNightStay: Message;
  addPackage: Message;
  deleteCategory: Message;
  deleteNightStay: Message;
  deletePackage: Message;
  submitForm: Message;
  updateCategory: Message;
  updateNightStay: Message;
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


export type MutationAddNightStayArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<NightStayExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<NightStayFaqInput>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<NightStayInclusionInput>>>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  rooms?: InputMaybe<Array<InputMaybe<RoomInput>>>;
  title: Scalars['String']['input'];
};


export type MutationAddPackageArgs = {
  category_id: Scalars['Int']['input'];
  day?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>>>;
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>>>;
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>>>;
  name: Scalars['String']['input'];
  night?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNightStayArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePackageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSubmitFormArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateNightStayArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<NightStayExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<NightStayFaqInput>>>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<NightStayInclusionInput>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prices?: InputMaybe<Array<InputMaybe<PriceInput>>>;
  rooms?: InputMaybe<Array<InputMaybe<RoomInput>>>;
  title: Scalars['String']['input'];
};


export type MutationUpdatePackageArgs = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<PackageExclusionInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<PackageFaqInput>>>;
  highlights?: InputMaybe<Array<InputMaybe<HighlightInput>>>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>>>;
  inclusions?: InputMaybe<Array<InputMaybe<PackageInclusionInput>>>;
  itinerary?: InputMaybe<Array<InputMaybe<ItineraryInput>>>;
  name: Scalars['String']['input'];
  night?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NightStay = {
  __typename?: 'NightStay';
  Exclusions?: Maybe<Array<Maybe<NightStayExclusion>>>;
  Faqs?: Maybe<Array<Maybe<NightStayFaq>>>;
  Includes?: Maybe<Array<Maybe<TourIncludeNight>>>;
  Inclusions?: Maybe<Array<Maybe<NightStayInclusion>>>;
  Prices?: Maybe<Array<Maybe<Price>>>;
  Rooms?: Maybe<Array<Maybe<Room>>>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NightStayExclusion = {
  __typename?: 'NightStayExclusion';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  night_stay_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NightStayExclusionInput = {
  title: Scalars['String']['input'];
};

export type NightStayFaq = {
  __typename?: 'NightStayFaq';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  night_stay_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NightStayFaqInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type NightStayInclusion = {
  __typename?: 'NightStayInclusion';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  night_stay_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NightStayInclusionInput = {
  title: Scalars['String']['input'];
};

export type NightStayResponse = {
  __typename?: 'NightStayResponse';
  data: Array<Maybe<NightStay>>;
  total: Scalars['Int']['output'];
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
  day?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  night?: Maybe<Scalars['String']['output']>;
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

export type Price = {
  __typename?: 'Price';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  night_stay_id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PriceInput = {
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories?: Maybe<Array<Maybe<Category>>>;
  getAllForm?: Maybe<FormResponse>;
  getAllNightStay: NightStayResponse;
  getAllPackages: PackageResponse;
  getNightStayById: NightStay;
  getPackageById: Package;
  test?: Maybe<Scalars['String']['output']>;
};


export type QueryGetAllNightStayArgs = {
  endPrice?: InputMaybe<Scalars['Float']['input']>;
  startPrice?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetAllPackagesArgs = {
  endPrice?: InputMaybe<Scalars['Float']['input']>;
  startPrice?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetNightStayByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPackageByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  night_stay_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type RoomInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  title: Scalars['String']['input'];
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

export type TourIncludeNight = {
  __typename?: 'TourIncludeNight';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  night_stay_id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
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

export type AddNightStayMutationVariables = Exact<{
  name: Scalars['String']['input'];
  location: Scalars['String']['input'];
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<PriceInput>> | InputMaybe<PriceInput>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>> | InputMaybe<TourIncludeInput>>;
  inclusions?: InputMaybe<Array<InputMaybe<NightStayInclusionInput>> | InputMaybe<NightStayInclusionInput>>;
  exclusions?: InputMaybe<Array<InputMaybe<NightStayExclusionInput>> | InputMaybe<NightStayExclusionInput>>;
  faqs?: InputMaybe<Array<InputMaybe<NightStayFaqInput>> | InputMaybe<NightStayFaqInput>>;
  rooms?: InputMaybe<Array<InputMaybe<RoomInput>> | InputMaybe<RoomInput>>;
}>;


export type AddNightStayMutation = { __typename?: 'Mutation', addNightStay: { __typename?: 'Message', message: string } };

export type AddPackageMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  day?: InputMaybe<Scalars['String']['input']>;
  night?: InputMaybe<Scalars['String']['input']>;
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

export type DeleteNightStayMutationVariables = Exact<{
  deleteNightStayId: Scalars['ID']['input'];
}>;


export type DeleteNightStayMutation = { __typename?: 'Mutation', deleteNightStay: { __typename?: 'Message', message: string } };

export type DeletePackageMutationVariables = Exact<{
  deletePackageId: Scalars['ID']['input'];
}>;


export type DeletePackageMutation = { __typename?: 'Mutation', deletePackage: { __typename?: 'Message', message: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'LoginResponse', token?: string | null, message?: string | null } };

export type SubmitFormMutationVariables = Exact<{
  date?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Scalars['String']['input']>;
}>;


export type SubmitFormMutation = { __typename?: 'Mutation', submitForm: { __typename?: 'Message', message: string } };

export type UpdateCategoryMutationVariables = Exact<{
  updateCategoryId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Message', message: string } };

export type UpdateNightStayMutationVariables = Exact<{
  updateNightStayId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<InputMaybe<PriceInput>> | InputMaybe<PriceInput>>;
  includes?: InputMaybe<Array<InputMaybe<TourIncludeInput>> | InputMaybe<TourIncludeInput>>;
  inclusions?: InputMaybe<Array<InputMaybe<NightStayInclusionInput>> | InputMaybe<NightStayInclusionInput>>;
  exclusions?: InputMaybe<Array<InputMaybe<NightStayExclusionInput>> | InputMaybe<NightStayExclusionInput>>;
  faqs?: InputMaybe<Array<InputMaybe<NightStayFaqInput>> | InputMaybe<NightStayFaqInput>>;
  rooms?: InputMaybe<Array<InputMaybe<RoomInput>> | InputMaybe<RoomInput>>;
}>;


export type UpdateNightStayMutation = { __typename?: 'Mutation', updateNightStay: { __typename?: 'Message', message: string } };

export type UpdatePackageMutationVariables = Exact<{
  updatePackageId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  day?: InputMaybe<Scalars['String']['input']>;
  night?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
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


export type GetAllFormQuery = { __typename?: 'Query', getAllForm?: { __typename?: 'FormResponse', total?: number | null, data?: Array<{ __typename?: 'Form', date?: string | null, number?: string | null, email?: string | null, person?: string | null } | null> | null } | null };

export type GetAllNightStayQueryVariables = Exact<{
  startPrice?: InputMaybe<Scalars['Float']['input']>;
  endPrice?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetAllNightStayQuery = { __typename?: 'Query', getAllNightStay: { __typename?: 'NightStayResponse', total: number, data: Array<{ __typename?: 'NightStay', name: string, images?: Array<string | null> | null, price: number, id: number } | null> } };

export type GetAllPackagesQueryVariables = Exact<{
  startPrice?: InputMaybe<Scalars['Float']['input']>;
  endPrice?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetAllPackagesQuery = { __typename?: 'Query', getAllPackages: { __typename?: 'PackageResponse', total: number, data: Array<{ __typename?: 'Package', images?: Array<string | null> | null, name: string, price: number, title: string, night?: string | null, day?: string | null, category_id: number, createdAt: string, description?: string | null, id: number, updatedAt: string, Category?: { __typename?: 'Category', id: number, name: string, createdAt: string, updatedAt: string } | null, Exclusions?: Array<{ __typename?: 'PackageExclusion', package_id: number, title: string, updatedAt: string, id: number, createdAt: string } | null> | null, Faqs?: Array<{ __typename?: 'PackageFaq', package_id: number, title: string, updatedAt: string, description?: string | null, id: number, createdAt: string } | null> | null, Highlights?: Array<{ __typename?: 'Highlight', package_id: number, updatedAt: string, name: string, id: number, createdAt: string } | null> | null, Includes?: Array<{ __typename?: 'TourInclude', createdAt: string, id: number, image?: string | null, name: string, package_id: number, updatedAt: string } | null> | null, Inclusions?: Array<{ __typename?: 'PackageInclusion', createdAt: string, id: number, package_id: number, title: string, updatedAt: string } | null> | null } | null> } };

export type GetNightStayByIdQueryVariables = Exact<{
  getNightStayByIdId: Scalars['ID']['input'];
}>;


export type GetNightStayByIdQuery = { __typename?: 'Query', getNightStayById: { __typename?: 'NightStay', id: number, images?: Array<string | null> | null, name: string, location: string, title: string, description?: string | null, price: number, createdAt: string, updatedAt: string, Prices?: Array<{ __typename?: 'Price', id: number, name: string, night_stay_id: number, createdAt: string, updatedAt: string } | null> | null, Includes?: Array<{ __typename?: 'TourIncludeNight', id: number, image?: string | null, name: string, createdAt: string, updatedAt: string, night_stay_id: number } | null> | null, Inclusions?: Array<{ __typename?: 'NightStayInclusion', id: number, title: string, night_stay_id: number, createdAt: string, updatedAt: string } | null> | null, Exclusions?: Array<{ __typename?: 'NightStayExclusion', id: number, title: string, night_stay_id: number, createdAt: string, updatedAt: string } | null> | null, Faqs?: Array<{ __typename?: 'NightStayFaq', id: number, title: string, description?: string | null, night_stay_id: number, createdAt: string, updatedAt: string } | null> | null, Rooms?: Array<{ __typename?: 'Room', id: number, image: string, title: string, description?: string | null, night_stay_id: number, createdAt: string, updatedAt: string } | null> | null } };

export type GetPackageByIdQueryVariables = Exact<{
  getPackageByIdId: Scalars['ID']['input'];
}>;


export type GetPackageByIdQuery = { __typename?: 'Query', getPackageById: { __typename?: 'Package', id: number, category_id: number, images?: Array<string | null> | null, day?: string | null, night?: string | null, name: string, title: string, description?: string | null, price: number, createdAt: string, updatedAt: string, Category?: { __typename?: 'Category', id: number, name: string } | null, Highlights?: Array<{ __typename?: 'Highlight', id: number, name: string } | null> | null, Includes?: Array<{ __typename?: 'TourInclude', id: number, name: string, image?: string | null } | null> | null, Inclusions?: Array<{ __typename?: 'PackageInclusion', id: number, title: string } | null> | null, Exclusions?: Array<{ __typename?: 'PackageExclusion', id: number, title: string } | null> | null, Itinerary?: Array<{ __typename?: 'Itinerary', id: number, name: string, title: string, description?: string | null } | null> | null, Faqs?: Array<{ __typename?: 'PackageFaq', id: number, title: string, description?: string | null } | null> | null } };



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

export const AddNightStayDocument = `
    mutation addNightStay($name: String!, $location: String!, $title: String!, $price: Float!, $images: [String], $description: String, $prices: [PriceInput], $includes: [TourIncludeInput], $inclusions: [NightStayInclusionInput], $exclusions: [NightStayExclusionInput], $faqs: [NightStayFaqInput], $rooms: [RoomInput]) {
  addNightStay(
    name: $name
    location: $location
    title: $title
    price: $price
    images: $images
    description: $description
    prices: $prices
    includes: $includes
    inclusions: $inclusions
    exclusions: $exclusions
    faqs: $faqs
    rooms: $rooms
  ) {
    message
  }
}
    `;

export const useAddNightStayMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddNightStayMutation, TError, AddNightStayMutationVariables, TContext>) => {
    
    return useMutation<AddNightStayMutation, TError, AddNightStayMutationVariables, TContext>(
      {
    mutationKey: ['addNightStay'],
    mutationFn: (variables?: AddNightStayMutationVariables) => fetcher<AddNightStayMutation, AddNightStayMutationVariables>(AddNightStayDocument, variables)(),
    ...options
  }
    )};

export const AddPackageDocument = `
    mutation AddPackage($categoryId: Int!, $name: String!, $title: String!, $price: Float!, $images: [String], $day: String, $night: String, $description: String, $highlights: [HighlightInput], $includes: [TourIncludeInput], $inclusions: [PackageInclusionInput], $exclusions: [PackageExclusionInput], $faqs: [PackageFaqInput], $itinerary: [ItineraryInput]) {
  addPackage(
    category_id: $categoryId
    name: $name
    title: $title
    price: $price
    images: $images
    day: $day
    night: $night
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

export const DeleteNightStayDocument = `
    mutation deleteNightStay($deleteNightStayId: ID!) {
  deleteNightStay(id: $deleteNightStayId) {
    message
  }
}
    `;

export const useDeleteNightStayMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteNightStayMutation, TError, DeleteNightStayMutationVariables, TContext>) => {
    
    return useMutation<DeleteNightStayMutation, TError, DeleteNightStayMutationVariables, TContext>(
      {
    mutationKey: ['deleteNightStay'],
    mutationFn: (variables?: DeleteNightStayMutationVariables) => fetcher<DeleteNightStayMutation, DeleteNightStayMutationVariables>(DeleteNightStayDocument, variables)(),
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

export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  Login(email: $email, password: $password) {
    token
    message
  }
}
    `;

export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) => {
    
    return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      {
    mutationKey: ['Login'],
    mutationFn: (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
    ...options
  }
    )};

export const SubmitFormDocument = `
    mutation SubmitForm($date: String, $number: String, $email: String, $person: String) {
  submitForm(date: $date, number: $number, email: $email, person: $person) {
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

export const UpdateNightStayDocument = `
    mutation UpdateNightStay($updateNightStayId: ID!, $name: String!, $title: String!, $price: Float!, $images: [String], $location: String, $description: String, $prices: [PriceInput], $includes: [TourIncludeInput], $inclusions: [NightStayInclusionInput], $exclusions: [NightStayExclusionInput], $faqs: [NightStayFaqInput], $rooms: [RoomInput]) {
  updateNightStay(
    id: $updateNightStayId
    name: $name
    title: $title
    price: $price
    images: $images
    location: $location
    description: $description
    prices: $prices
    includes: $includes
    inclusions: $inclusions
    exclusions: $exclusions
    faqs: $faqs
    rooms: $rooms
  ) {
    message
  }
}
    `;

export const useUpdateNightStayMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateNightStayMutation, TError, UpdateNightStayMutationVariables, TContext>) => {
    
    return useMutation<UpdateNightStayMutation, TError, UpdateNightStayMutationVariables, TContext>(
      {
    mutationKey: ['UpdateNightStay'],
    mutationFn: (variables?: UpdateNightStayMutationVariables) => fetcher<UpdateNightStayMutation, UpdateNightStayMutationVariables>(UpdateNightStayDocument, variables)(),
    ...options
  }
    )};

export const UpdatePackageDocument = `
    mutation UpdatePackage($updatePackageId: ID!, $name: String!, $title: String!, $price: Float!, $categoryId: Int, $images: [String], $day: String, $night: String, $description: String, $highlights: [HighlightInput], $includes: [TourIncludeInput], $inclusions: [PackageInclusionInput], $exclusions: [PackageExclusionInput], $faqs: [PackageFaqInput], $itinerary: [ItineraryInput]) {
  updatePackage(
    id: $updatePackageId
    name: $name
    title: $title
    price: $price
    category_id: $categoryId
    images: $images
    day: $day
    night: $night
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
      number
      email
      person
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

export const GetAllNightStayDocument = `
    query GetAllNightStay($startPrice: Float, $endPrice: Float) {
  getAllNightStay(startPrice: $startPrice, endPrice: $endPrice) {
    total
    data {
      name
      images
      price
      id
    }
  }
}
    `;

export const useGetAllNightStayQuery = <
      TData = GetAllNightStayQuery,
      TError = unknown
    >(
      variables?: GetAllNightStayQueryVariables,
      options?: Omit<UseQueryOptions<GetAllNightStayQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAllNightStayQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAllNightStayQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAllNightStay'] : ['GetAllNightStay', variables],
    queryFn: fetcher<GetAllNightStayQuery, GetAllNightStayQueryVariables>(GetAllNightStayDocument, variables),
    ...options
  }
    )};

export const GetAllPackagesDocument = `
    query GetAllPackages($startPrice: Float, $endPrice: Float) {
  getAllPackages(startPrice: $startPrice, endPrice: $endPrice) {
    total
    data {
      images
      name
      price
      title
      night
      day
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

export const GetNightStayByIdDocument = `
    query getNightStayById($getNightStayByIdId: ID!) {
  getNightStayById(id: $getNightStayByIdId) {
    id
    images
    name
    location
    title
    description
    price
    createdAt
    updatedAt
    Prices {
      id
      name
      night_stay_id
      createdAt
      updatedAt
    }
    Includes {
      id
      image
      name
      createdAt
      updatedAt
      night_stay_id
    }
    Inclusions {
      id
      title
      night_stay_id
      createdAt
      updatedAt
    }
    Exclusions {
      id
      title
      night_stay_id
      createdAt
      updatedAt
    }
    Faqs {
      id
      title
      description
      night_stay_id
      createdAt
      updatedAt
    }
    Rooms {
      id
      image
      title
      description
      night_stay_id
      createdAt
      updatedAt
    }
  }
}
    `;

export const useGetNightStayByIdQuery = <
      TData = GetNightStayByIdQuery,
      TError = unknown
    >(
      variables: GetNightStayByIdQueryVariables,
      options?: Omit<UseQueryOptions<GetNightStayByIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetNightStayByIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetNightStayByIdQuery, TError, TData>(
      {
    queryKey: ['getNightStayById', variables],
    queryFn: fetcher<GetNightStayByIdQuery, GetNightStayByIdQueryVariables>(GetNightStayByIdDocument, variables),
    ...options
  }
    )};

export const GetPackageByIdDocument = `
    query GetPackageById($getPackageByIdId: ID!) {
  getPackageById(id: $getPackageByIdId) {
    id
    category_id
    images
    day
    night
    name
    title
    description
    price
    createdAt
    updatedAt
    Category {
      id
      name
    }
    Highlights {
      id
      name
    }
    Includes {
      id
      name
      image
    }
    Inclusions {
      id
      title
    }
    Exclusions {
      id
      title
    }
    Itinerary {
      id
      name
      title
      description
    }
    Faqs {
      id
      title
      description
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
