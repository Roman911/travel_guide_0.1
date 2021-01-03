import { CreateUserData, UserData } from "../../types/user"

const initialState = {
  mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
  center: { lat: 49.026151, lng: 31.483070 },
  zoom: 6
}

type ActionType = {
  payload: UserData | CreateUserData
  type: string
}

const googleMaps = (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      }
    case 'USER:REGISTER_DATA':
      return {
        ...state,
        registerData: actions.payload
      }
    default: return state
  }
}

export default googleMaps