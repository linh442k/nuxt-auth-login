export default function ({store, route, redirect}){
  console.log(store.state.auth, route.name)
  const isAuthen = store.state.auth.loggedIn;
  if(!isAuthen){
    if(route.name!=="login"&&route.name!=="password-reset"&&route.name!=="registration"){
      redirect({name: "login"})
    }
  }else{
    if(route.name==="login"||route.name==="password-reset"||route.name==="registration"){
      redirect({name: "dashboard"})
    }
  }
}
