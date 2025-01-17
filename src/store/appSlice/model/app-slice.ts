import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appInitContent, AppSliceType, } from "../types/event-types"
import { GetOneEventThunkResType } from "../types/event-thunk-types"
import { appSliceThunks } from "./app-thunks"

const appSlice = createSlice({
    name: 'app-slice',
    initialState: appInitContent as AppSliceType,
    reducers: {
      setEventsLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
        state.isEventsLoading = action.payload
      },
      setNewsLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
        state.isEventsLoading = action.payload
      },
      
    },

    extraReducers: builder => {

      builder.addCase(appSliceThunks.getEvents.fulfilled, 
        (state: AppSliceType, action: PayloadAction<GetOneEventThunkResType[]>) => {

          // console.log('action=', action.payload);
          
        if (action.payload && action.payload.length > 0) {
          state.events = [...action.payload]
            .sort((a,b) => a.date < b.date ? 1 : -1)
            .map(el => {
              return {...el, photo: el.ePreviewPhoto}
            })
        }
        
      })

      // builder.addCase(eventsSliceThunks.getById.fulfilled, (state: EventSliceType, action: PayloadAction<GetOneEventThunkResType>) => {
      //   if (action.payload) {
      //     state.currentEvent = {...action.payload, photo: action.payload.ePreviewPhoto }
      //   }
      // })

    }
    
  })

export const appSliceActions = appSlice.actions
export const appSliceReducer = appSlice.reducer
