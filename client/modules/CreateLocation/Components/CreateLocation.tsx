import React from "react"
import { css } from "aphrodite/no-important"
import { isTypeItem } from "../Containers/select.config"
import { Button, FormikControl } from "../../../Components"
import baseStyle from "../../../styles"
import loginStyles from "../../../styles/login"

type CreateLocationProps = {
  formik: any
}

export const CreateLocation: React.FC<CreateLocationProps> = ({ formik }) => {
  return <>
    <FormikControl control='input' id='title' type='text' label='Назва локації:' />
    <FormikControl control='input' id='cover' type='text' label='Обкладинка' />
    <FormikControl control='select' id='isType' type='text' label='Тип локації:' options={ isTypeItem } />
    <FormikControl control='input' id='region' type='text' label='Область' />
    <FormikControl control='input' id='city' type='text' label='Населений пункт:' />
    <FormikControl control='input' id='street' type='text' label='Вулиця:' />
    <div className={css(baseStyle.flex)}>
      <FormikControl control='input' id='coordinateY' type='text' label='Широта:' />
      <FormikControl control='input' id='coordinateX' type='text' label='Довгота:' />
    </div>
    <FormikControl control='textarea' name='small_text' type='text' label='Короткий опис:' />
    <div className={ css(loginStyles.inputSub) }>
      <Button type="submit" nameBtn='Зберегти' isSubmitting={ formik.isSubmitting } />
    </div>
  </>
}