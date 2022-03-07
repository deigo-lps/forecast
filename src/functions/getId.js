const getId = (obj) =>{
  return(
    (obj.lat.toString()+obj.lon.toString()).replace(/\./g,'-')
  )
}

export default getId;