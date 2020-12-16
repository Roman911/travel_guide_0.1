import { Checkbox, Input, InputGroup, Radio, Select, TextArea } from "./index"

export const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'checkbox':
      return <Checkbox id={ rest.id } label={ rest.label } value={ rest.value } values={ rest.values } />
    case 'input':
      return <Input id={ rest.id } type={ rest.type } label={ rest.label } />
    case 'inputGroup':
      return <InputGroup />
    case 'select':
      return <Select id={ rest.id } label={ rest.label } options={ rest.options } />
    case 'radio':
      return <Radio name={ rest.name } label={ rest.label } options={ rest.options } />
    case 'textarea':
      return <TextArea name={ rest.name } label={ rest.label } />
    default:
      return null
  }
}