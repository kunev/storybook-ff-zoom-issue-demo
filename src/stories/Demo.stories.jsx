import React from 'react'
import {Input} from '../Input'

export default {
  component: Input,
  title: 'Demo/Input'
}

export function Demo() {
  return (
    <>
      <Input label="one" />
      <Input label="two" />
      <Input label="three" />
      <Input label="four" />
      <Input label="five" />
      <Input label="six" />
      <Input label="seven" />
    </>
  )
}
