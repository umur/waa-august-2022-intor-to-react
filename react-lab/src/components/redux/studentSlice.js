import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchStudents = createAsyncThunk(
  'student/fetchAll',
  async () => {
    const response = await axios.get('http://localhost:9090/api/v1/students');
    return response.data;
  }
)

export const fetchStudentsWithDetails = createAsyncThunk(
  'student/fetchAllWithDetails',
  async (ids) => {
    const responses = []
    await Promise.all(
      ids.map(async (id) => {
        const response = await axios.get('http://localhost:9090/api/v1/students/' + id);
        responses.push(response.data);
      })
    )
    return responses;

  }
)

export const createStudent = createAsyncThunk(
  'student/create',
  async (data) => {
    console.log(data);
    const response = await axios.post('http://localhost:9090/api/v1/students', data)
  }
)

const initialState = {
  students: [],
  studentsWithDetails: [],
  loading: false,
  state: '',
  error: ''
}
const studentSlice= createSlice({
  name: 'students',
  initialState: initialState,
  reducers:{

  },
  extraReducers: {
    [fetchStudents.fulfilled]: (state, action) => {
      state.students = action.payload;
      state.state = "fulfilled"
      state.loading = false;
    },
    [fetchStudents.pending]: (state, action) => {
      state.state = "pending"
      state.loading = true;
    },
    [fetchStudents.rejected]: (state, action) => {
      console.log(action);
      state.state = "rejected"
      state.error = action + "sfdsf";
      state.loading = false
    },

    [fetchStudentsWithDetails.fulfilled]: (state, action) => {
      state.studentsWithDetails = action.payload;
      state.state = "fulfilled"
      state.loading = false;
    },
    [fetchStudentsWithDetails.pending]: (state, action) => {
      state.state = "pending"
      state.loading = true;
    },
    [fetchStudentsWithDetails.rejected]: (state, action) => {
      console.log(action);
      state.state = "rejected"
      state.error = action + "sfdsf";
      state.loading = false
    },

    [createStudent.fulfilled]: (state, action) => {
      state.state = "fulfilled"
      state.loading = false;

    },
    [createStudent.pending]: (state, action) => {
      state.state = "pending"
      state.loading = true;
    },
    [createStudent.rejected]: (state, action) => {
      state.state = "rejected"
      console.log(action)
      state.error = action.error.message;
      state.loading = false
    },

  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchStudents.fulfilled, (state, action) => {
  //     state.students = action.payload;
  //     state.loading = "fulfilled"
  //   });
  //   builder.addCase(fetchStudents.pending, (state, action) => {
  //     state.loading = "pending"
  //   })
  //   builder.addCase(fetchStudents.rejected, (state, action) => {
  //     state.loading = "rejected"
  //   });
  //
  // },

})

export default studentSlice.reducer;
