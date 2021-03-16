
import React from 'react'
import { HBox } from './Styles';
function Link ({ label, url }) {
  return (
    <HBox>
        {label}:
        <a target="_blank" href={url}>{url}</a>
    </HBox>
  )
}


export default Link
