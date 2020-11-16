import React from "react"
import { Input, TextArea } from "./index"

export const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input id={ rest.id } type={ rest.type } label={ rest.label } />
    case 'textarea':
      return <TextArea name={ rest.name } label={ rest.label } />
    default:
      return null
  }
}