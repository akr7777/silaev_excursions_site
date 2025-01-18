import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appInitContent, AppSliceType, GidType, } from "../types/app-types"
import { GetAllEventThunkResType, GetAllNewThunkResType } from "../types/app-thunk-types"
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
      setGidsLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
        state.isGidsLoading = action.payload
      },

      setShowItemId: (state: AppSliceType, action: PayloadAction<string | null>) => {
        state.showItemId = action.payload
      },
      
    },

    extraReducers: builder => {

      builder.addCase(appSliceThunks.getEvents.fulfilled, 
        (state: AppSliceType, action: PayloadAction<GetAllEventThunkResType[]>) => {
          
        if (action.payload && action.payload.length > 0) {
          state.events = [...action.payload]
            .sort((a,b) => a.date < b.date ? 1 : -1)
            .map(el => {
              return {...el, photo: el.ePreviewPhoto}
            })
        }
        
      }),

      builder.addCase(appSliceThunks.getNews.fulfilled, 
        (state: AppSliceType, action: PayloadAction<GetAllNewThunkResType[]>) => {
          
        if (action.payload && action.payload.length > 0) {
          state.news = [...action.payload]
            .sort((a,b) => a.date < b.date ? 1 : -1)
            .map(el => {
              return {...el, photo: el.nPreviewPhoto}
            })
        }
        
      })

      builder.addCase(appSliceThunks.getGids.fulfilled, (state: AppSliceType, action: PayloadAction<GidType[]>) => {
        if (action.payload && action.payload.length > 0) {
          state.gids = action.payload
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
