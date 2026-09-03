import React from 'react'
import {Link, useParams} from 'react-router-dom'
const Channel = () => {

    const params = useParams()
    console.log(params)
  return (
    <Link to={'/'}>
      Channel
    </Link>
  )
}

export default Channel
