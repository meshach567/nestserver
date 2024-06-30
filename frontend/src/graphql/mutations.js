import { gql } from '@apollo/client/core';

export const CREATE_PLACE_MUTATION = gql`
  mutation CreatePlace($input: CreatePlaceInput!) {
    createPlace(input: $input) {
      id
      name
      description
      location
      latitude
      longitude
      openHours
      images
    }
  }
`;

export const GET_ALL_PLACES_QUERY = gql`
  query GetAllPlaces {
    places {
      id
      name
      description
      location
      latitude
      longitude
      openHours
      images
    }
  }
`;

import { gql } from '@apollo/client/core';

export const GET_PLACE_DETAILS_QUERY = gql`
  query GetPlaceDetails($id: ID!) {
    place(id: $id) {
      id
      name
      description
      location
      latitude
      longitude
      openHours
      images
    }
  }
`;

export const GET_BOOKMARKED_PLACES_QUERY = gql`
  query GetBookmarkedPlaces {
    bookmarkedPlaces {
      id
      name
      description
      location
      latitude
      longitude
      openHours
      images
    }
  }
`;

export const ADD_BOOKMARK_MUTATION = gql`
  mutation AddBookmark($placeId: ID!) {
    addBookmark(placeId: $placeId) {
      id
      bookmarks {
        id
      }
    }
  }
`;

export const REMOVE_BOOKMARK_MUTATION = gql`
  mutation RemoveBookmark($placeId: ID!) {
    removeBookmark(placeId: $placeId) {
      id
      bookmarks {
        id
      }
    }
  }
`;



export const SIGNUP_MUTATION = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
      }
    }
  }
`;
