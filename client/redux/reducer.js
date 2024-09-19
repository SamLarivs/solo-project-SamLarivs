//we need createSlice and the async thunk thing

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


//CreateSlice has built in builder method,
//comes with its own little state object
//pending
//fulfilled
//error

// Async thunk for fetching people
export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const response = await fetch('http://localhost:3000/api'); 
  if (!response.ok) throw new Error('Failed to fetch');
  const data = await response.json();
  return data;
});

//  thunk for adding people
export const addPerson = createAsyncThunk('people/addPerson', async (personData) => {
    const response = await fetch('http://localhost:3000/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create person');
    }
    
    return response.json(); 
  });

// Async thunk for editttingg people

export const updatePerson = createAsyncThunk('people/updatePerson', async ({ id, person }) => {
    console.log('BUG LOG!', id, person);
    const response = await fetch(`http://localhost:3000/api/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    });
    if (!response.ok) throw new Error('Failed to update person');
    const data = await response.json();
    return data;
  });
  //thunk for delete
  export const deletePerson = createAsyncThunk('people/deletePerson', async (id) => {
    const response = await fetch(`http://localhost:3000/api/delete/${id}`, { // include base URL
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete person');
    return id; // Return the id of the deleted person
  });

//create the people slice
  const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: [],
    loading: false,
    error: null,
  },
//CreateSlice has built in builder method,
  //builder method lets you define how your state changes in a really organized way. 
  //Instead of writing a ton of repetitive code, you can just say, 
  //“Hey, when this action happens, do this to the state!”

  //use builder with extraReducers to handle the pending, loading, error situations
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        //if pending...loading
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        console.log('Fetched people:', action.payload);
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPerson.fulfilled, (state, action) => {
        state.people.push(action.payload);
      })
      .addCase(deletePerson.fulfilled, (state, action) => {
        //filter in only the people whos id doesnt match the associated one
        state.people = state.people.filter(person => person.id !== action.payload);
      })
      .addCase(updatePerson.fulfilled, (state, action) => {
        console.log('REDUCER BUG LOG', state);
        console.log('REDUCER BUG LOG', action);
        const index = state.people.findIndex(person => person.id === action.payload.id);
        if (index !== -1) {
          state.people[index] = action.payload; 
        }
      });
  },
});

//export the reducer
export default peopleSlice.reducer;