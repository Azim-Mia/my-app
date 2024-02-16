const initialStata={
  isMessage:false,
  message:"",
  userrs:[
    {id:101, name:"Azim mia"},
    {id: 102, name:"shakil mia"},
]
}
const reducer=(state,action)=>{
  switch (action.type){
    case "ADD_USER":
    return {
      ...state,
      userrs:[...state.userrs, action.payload],
    }
    
    case "REMOVE_USER":
      const filters=state.userrs.filter( user=> user.id !== action.payload);
      return {
        ...state,
        userrs:filters,
        isMessage:true,
        message:"book is delete!",
      }
    default:
   return state;
  }
}
export {initialStata, reducer}

