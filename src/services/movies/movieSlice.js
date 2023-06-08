import { createSlice } from "@reduxjs/toolkit";
import moviesApi from "./moviesApi";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    topRated: [],
    popular: [],
    isLoading: false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviesApi.fetchNowPlayingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(moviesApi.fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nowPlaying = action.payload;
      })
      .addCase(moviesApi.fetchNowPlayingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(moviesApi.fetchTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(moviesApi.fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topRated = action.payload;
      })
      .addCase(moviesApi.fetchTopRatedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(moviesApi.fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(moviesApi.fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(moviesApi.fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
