import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGRkZWY4YTg2MTQxOWQ2MzJkNTcxMTczNDZhNzczOCIsInN1YiI6IjY0N2VlMTMyY2Y0YjhiMDE0MTkwYWRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HCf2XcLcG634G22W928Dzj9PeW__gMyVlhc-Tk66z4";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          page: page,
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    return response.data;
  }
);

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      {
        params: {
          page: page,
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    return response.data;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    return response.data;
  }
);

export default {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
};
