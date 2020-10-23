import React from "react"
import { useFormik } from "formik"
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import searchStyles from '../../styles/search'
import { css } from "aphrodite/no-important"

export const Search = ({ panTo }) => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      // @ts-ignore
      location: { lat: () => 49.026151, lng: () => 31.483070 },
      radius: 50 * 1000
    },
  })
  const { handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      description: ''
    },
    onSubmit: async (values) => {
      setValue(values.description, false)
      clearSuggestions()
      try {
        const results = await getGeocode({ address: values.description })
        const { lat, lng } = await getLatLng(results[0])
        panTo({ lat, lng })
      } catch (e) {
        console.log(e)
      }
    }
  })
  return <div className={ css(searchStyles.wrapper) }>
    <form onClick={ handleSubmit } className={ css(searchStyles.form) }>
      <input
        className={ css(searchStyles.input) }
        type="text"
        value={ value }
        onChange={ (e) => {
          setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder='Пошук на Google Картах'
      />
      { data.length !== 0 ? <select className={ css(searchStyles.select) } size={ data.length } id='description' name='description' onChange={ handleChange } onBlur={ handleBlur }>
        { status === 'OK' && data.map((value, index) => {
          return <option className={ css(searchStyles.option) } key={index} value={value.description}>{value.description}</option>
        }) }
      </select> : null }
    </form>
  </div>
}