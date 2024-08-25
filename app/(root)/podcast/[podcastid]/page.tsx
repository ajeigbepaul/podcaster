import React from 'react'

const page = ({params}:{params:{podcastid:string}}) => {
  return (
    <div>{params.podcastid}</div>
  )
}

export default page