export const initialState = {'Rent': false , 'Buy': false , 'Sell' : false};

export const reducer = (state,action) =>{
    
    switch(action.payload.checking){
        
        case 'Rent':
            return {
                'Rent' : action.payload.state,
                'Buy' : false,
                'Sell' : false
               
            }


        case 'Buy':
                  return{
                     
                      'Buy' : action.payload.state,
                      'Sell' : false,
                      'Rent' : false
                  }
        case 'Sell':
                  return{
                     
                      'Sell' : action.payload.state,
                      'Rent' : false,
                      'Buy' : false
                  }
        

        default:
          return state
    }
  
   
}