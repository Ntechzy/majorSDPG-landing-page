import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchWpPostBySlug, fetchWpPosts, fetchWpTags } from "@/lib/api";
import type { BlogState, FetchPostsParams, WPPost, WPTag } from "@/types/blog";
import type { RootState } from "./index";

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const responseMessage = error.response?.data;
    if (typeof responseMessage === "string") {
      return responseMessage;
    }
    if (responseMessage && typeof responseMessage === "object" && "message" in responseMessage) {
      const message = responseMessage.message;
      if (typeof message === "string") {
        return message;
      }
    }
    return error.message || "Request failed";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
}

export const fetchPosts = createAsyncThunk<
  { posts: WPPost[]; totalPages: number; totalPosts: number; currentPage: number },
  FetchPostsParams | undefined,
  { rejectValue: string }
>("blog/fetchPosts", async (params, thunkApi) => {
  try {
    return await fetchWpPosts(params);
  } catch (error) {
    return thunkApi.rejectWithValue(getErrorMessage(error));
  }
});

export const fetchPostBySlug = createAsyncThunk<WPPost, string, { rejectValue: string }>(
  "blog/fetchPostBySlug",
  async (slug, thunkApi) => {
    try {
      const post = await fetchWpPostBySlug(slug);
      if (!post) {
        return thunkApi.rejectWithValue("Article not found");
      }

      return post;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchTags = createAsyncThunk<WPTag[], void, { rejectValue: string }>(
  "blog/fetchTags",
  async (_, thunkApi) => {
    try {
      return await fetchWpTags();
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  }
);

const initialState: BlogState = {
  posts: [],
  selectedPost: null,
  tags: [],
  status: "idle",
  detailStatus: "idle",
  tagsStatus: "idle",
  error: null,
  totalPages: 1,
  totalPosts: 0,
  currentPage: 1,
  searchQuery: "",
  selectedTag: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSelectedTag: (state, action: PayloadAction<number | null>) => {
      state.selectedTag = action.payload;
      state.currentPage = 1;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.selectedTag = null;
      state.currentPage = 1;
    },
    resetSelectedPost: (state) => {
      state.selectedPost = null;
      state.detailStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
        state.totalPosts = action.payload.totalPosts;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "Failed to load articles";
      })
      .addCase(fetchPostBySlug.pending, (state) => {
        state.detailStatus = "loading";
        state.error = null;
      })
      .addCase(fetchPostBySlug.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostBySlug.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.selectedPost = null;
        state.error = action.payload ?? "Article not found";
      })
      .addCase(fetchTags.pending, (state) => {
        state.tagsStatus = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tagsStatus = "succeeded";
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tagsStatus = "failed";
      });
  },
});

export const { clearFilters, resetSelectedPost, setCurrentPage, setSearchQuery, setSelectedTag } =
  blogSlice.actions;

export const selectAllPosts = (state: RootState) => state.blog.posts;
export const selectSelectedPost = (state: RootState) => state.blog.selectedPost;
export const selectAllTags = (state: RootState) => state.blog.tags;
export const selectBlogStatus = (state: RootState) => state.blog.status;
export const selectDetailStatus = (state: RootState) => state.blog.detailStatus;
export const selectTagsStatus = (state: RootState) => state.blog.tagsStatus;
export const selectTotalPages = (state: RootState) => state.blog.totalPages;
export const selectTotalPosts = (state: RootState) => state.blog.totalPosts;
export const selectCurrentPage = (state: RootState) => state.blog.currentPage;
export const selectBlogError = (state: RootState) => state.blog.error;
export const selectSearchQuery = (state: RootState) => state.blog.searchQuery;
export const selectSelectedTag = (state: RootState) => state.blog.selectedTag;

export default blogSlice.reducer;
