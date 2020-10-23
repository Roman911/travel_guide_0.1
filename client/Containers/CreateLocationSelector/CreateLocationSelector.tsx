import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { useMutation } from '@apollo/react-hooks'
import { css } from "aphrodite/no-important"
import { addLocationMutation } from "./mutations"
import { modalActions } from '../../redux/actions'
import baseStyle from '../../styles'
import stylesInput from '../../styles/input'
import loginStyles from '../../styles/login'
import styles from './styles'
import { User } from "../../types/user"
import { Button } from "../../Components"
import { isTypeItem } from "./select.config"
import withApollo from "../../lib/withApollo"

type clsProps = {
  latLng: {
    coordinateY: number,
    coordinateX: number
  } | null
}

const CreateLocationSelector: React.FC<clsProps> = ({ latLng }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const [ createLocations ] = useMutation(addLocationMutation)
  const { handleSubmit, handleChange, values, handleBlur, isSubmitting, setSubmitting, setFieldValue, setValues } = useFormik({
    initialValues: {
      title: '', cover: '', small_text: '', linkToPost: '', coordinateY: '0.00000', coordinateX: '0.00000', isType: 'other', isTypeSettlement: 'city', region: '', district: '', city: '', street: ''
    },
    onSubmit: (values, { resetForm }) => {
      const coordinates = [ values.coordinateY, values.coordinateX ]
      const idAuthor = data ? data.userId : null
      createLocations({
        variables: {
          locationsInput: {
            idAuthor: idAuthor,
            title: values.title,
            cover: values.cover,
            linkToPost: values.linkToPost,
            small_text: values.small_text,
            coordinates: coordinates,
            isType: values.isType,
            isTypeSettlement: values.isTypeSettlement,
            region: values.region,
            district: values.district,
            city: values.city,
            street: values.street
          }
        }
      }).then(data => {
        if (data) {
          dispatch(modalActions.showModal('Локація успішно добавлена!'))
          resetForm()
        }
        setSubmitting(false)
      }).catch( () => {
        setSubmitting(false)
      })
    }
  })
  useEffect(() => {
    if (latLng) {
      setFieldValue( 'coordinateY', String(latLng.coordinateY) )
      setFieldValue( 'coordinateX', String(latLng.coordinateX) )
    }
  }, [latLng])
  const myInput = ( id: string, title: string, value: string | number | string[] | undefined ) => {
    return <div className={css( styles.blockInput )}>
      <p className={css( styles.paragraph )}>{ title }</p>
      <input className={css(stylesInput.input, styles.input)} id={ id } type='text' value={ value } onChange={ handleChange } onBlur={ handleBlur }/>
    </div>
  }
  const mySelect = ( title: string, name: string, option: any[] ) => {
    return <div className={css( styles.blockInput )}>
      <p className={css( styles.paragraph )}>{ title }</p>
      <select className={css(stylesInput.input , styles.input)} name={ name } id={ name } onChange={ handleChange } onBlur={ handleBlur }>
        { option.map((item, index) => {
          return <option key={ index } className={ css(stylesInput.option) } value={ item.value }>{ item.title }</option>
        })}
      </select>
    </div>
  }
  const coordinateInput = ( title: string, id: string, values: string ) => {
    return <div className={css( styles.blockInput )}>
      <p className={css( styles.paragraph )}>{ title }</p>
      <input className={css(stylesInput.input, styles.input)} id={ id } type='text' onChange={ handleChange } value={ values } onBlur={ handleBlur }  placeholder='0.000000' />
    </div>
  }
  return <div className={css(baseStyle.boxShadow, styles.wrapper)}>
    <form onSubmit={ handleSubmit }>
      { myInput( 'title', 'Назва локації:', values.title ) }
      { myInput( 'cover', 'Обкладинкв', values.cover ) }
      { mySelect( 'Тип локації:', 'isType', isTypeItem ) }
      { myInput( 'region', 'Область', values.region ) }
      { values.isTypeSettlement !== 'city' && myInput( 'district', 'Район', values.district ) }
      { myInput( 'city', 'Населений пункт:', values.city ) }
      { myInput( 'street', 'Вулиця:', values.street ) }
      <div className={css(baseStyle.flex)}>
        { coordinateInput( 'Широта:', 'coordinateY', values.coordinateY ) }
        { coordinateInput( 'Довгота:', 'coordinateX', values.coordinateX ) }
      </div>
      { myInput( 'small_text', 'Короткий опис:', values.small_text ) }
      <div className={ css(loginStyles.inputSub) }>
        <Button type="submit" nameBtn='Зберегти' isSubmitting={ isSubmitting } />
      </div>
    </form>
  </div>
}

export default withApollo(CreateLocationSelector)