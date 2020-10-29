import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "../../styles/createPost"
import inputStyles from "../../styles/input"
import { Button } from "../../Components"
import { Editor } from "../../hooks/editor"
import loginStyles from "../../styles/login"
import React from "react"
import {useDispatch} from "react-redux"
import {useMutation} from "@apollo/react-hooks"
import {addPostMutation} from "../../apollo/mutations/addPost"
import {useFormik} from "formik"
import validateForm from "../../utils/validate"
import {modalActions} from "../../redux/actions"
import { UserData } from "../../types/user"

type CreatePostProps = {
  data: UserData
}

export const CreatePostSelector: React.FC<CreatePostProps> = ({ data }) => {
  const dispatch = useDispatch()
  const [ createPost ] = useMutation(addPostMutation)
  const { handleSubmit, handleChange, values, handleBlur, isSubmitting, setSubmitting, setFieldValue } = useFormik({
    initialValues: { editor: '', type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', location: '', work_time: '',  adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: '', text: '', isPrice: [], how_to_get_there: '' },
    validate: values => {
      let errors = {}
      validateForm({values, errors})
      return errors
    },
    onSubmit: (values, { resetForm }) => {
      const tags = values.tag.split(' ')
      const coordinates = [ values.coordinateY, values.coordinateX ]
      const tickets = []
      values.adultTicket && tickets.push(`Дорослий: ${ values.adultTicket } грн`)
      values.childTicket && tickets.push(`Дитячий: ${ values.childTicket } грн`)
      values.studentTicket && tickets.push(`Студенський: ${ values.studentTicket } грн`)
      values.pensionTicket && tickets.push(`Пенсійний: ${ values.pensionTicket } грн`)
      const idAuthor = data ? data.userId : null
      createPost({
        variables: {
          postInput: {
            idAuthor: idAuthor,
            type_material: values.type_material,
            title: values.title,
            link: values.link,
            tags: tags,
            tickets: tickets,
            small_text: values.small_text,
            coordinates: coordinates,
            location: values.location,
            work_time: values.work_time,
            editor: values.editor,
            isPrice: values.isPrice,
            how_to_get_there: values.how_to_get_there
          }
        }
      }).then(data => {
        if (data) {
          dispatch(modalActions.showModal('Статю успішно створено!'))
          resetForm()
        }
        setSubmitting(false)
      }).catch( () => {
        setSubmitting(false)
      })
    }
  })

  const myInputRadio = ( id: string, tittle: string ) => {
    const label = id === values.type_material ? css( inputStyles.label, inputStyles.labelActive, baseStyles.boxShadow) : css(inputStyles.label)
    return <>
      <input id={ id } className={ css(inputStyles.inputRadio) } name="type_material" type="radio" value={ id } onChange={ event => handleChange(event) } checked={ values.type_material === id } onBlur={ handleBlur }/>
      <label htmlFor={ id } className={ css( baseStyles.flex, inputStyles.labelWrapper) } >
        <div className={ label } />
        { tittle }
      </label>
    </>
  }
  const isPriceStatus = values.isPrice[0] === 'free'
  const myInput = ( title: string, id: string, type: string, value: string | number | string[] | undefined, isTicket?: boolean ) => {
    return <div className={css( inputStyles.wrapper )}>
      <p className={ css( inputStyles.paragraph, isTicket && inputStyles.textSmall, isTicket && isPriceStatus && inputStyles.isNotActive ) }>{ title }</p>
      <div className={ css(inputStyles.wrapperInput) }>
        <input className={ css(inputStyles.input, styles.input, isTicket && inputStyles.inputSmall, isTicket && isPriceStatus && inputStyles.isNotActive ) } id={ id } type={ type } value={ value } onChange={ handleChange } onBlur={ handleBlur } disabled={ isTicket ? isPriceStatus : false } />
      </div>
    </div>
  }
  const myTextarea = ( title: string, id: string ) => {
    return <div className={css( inputStyles.wrapper )}>
      <p className={css( inputStyles.paragraph )}>{ title }</p>
      <textarea className={css(inputStyles.input)} id={ id } onChange={ handleChange } onBlur={ handleBlur } />
    </div>
  }

  return <section className={css(baseStyles.boxShadow, styles.wrapper)}>
    <form onSubmit={ handleSubmit }>
      <div className={ css(baseStyles.flexVFS) }>
        <div className={ css( values.type_material !== 'new' ? styles.wrapperBlock : styles.wrapperBlockNews)}>
          <div className={ css( inputStyles.wrapper )}>
            <p className={ css( inputStyles.paragraph) }>Тип матеріалу:</p>
            { myInputRadio( 'new', 'Новина' ) }
            { myInputRadio( 'post', 'Стаття' ) }
            { myInputRadio( 'myTrip', 'Моя подорож' ) }
          </div>
          <div className={css( inputStyles.wrapper )}>
            <p className={css( inputStyles.paragraph )}>Добавте локацію:</p>
            <Button nameBtn='Вибрати на карті' isSubmitting={ isSubmitting } />
            <div className={ css(baseStyles.br) } />
            <Button nameBtn='Створити локацію' isSubmitting={ isSubmitting } />
          </div>
          { myInput( 'Обкладинка:', 'image_loader', 'text', values.image_loader ) }
          { myInput( 'Заголовок:', 'title', 'text', values.title ) }
          { myInput( 'Теги:', 'tag', 'text', values.tag ) }
        </div>
        {
          values.type_material !== 'new' && <div className={ css(styles.container) }>
            <div className={ css(baseStyles.flexSB) }>
              <p className={css( inputStyles.paragraph, styles.text )}>Вхідний Квиток</p>
              <p className={css( inputStyles.paragraph, styles.text, inputStyles.checkbox )}>
                <input type="checkbox" id='isPrice' value='free' onChange={ handleChange } onBlur={ handleBlur } />
                Вхід вільний
              </p>
            </div>
            { myInput( 'Дорослий:', 'adultTicket', 'number', values.adultTicket, true ) }
            { myInput( 'Дитячий:', 'childTicket', 'number', values.childTicket, true ) }
            { myInput( 'Студенський:', 'studentTicket', 'number', values.studentTicket, true ) }
            { myInput( 'Пенсійний:', 'pensionTicket', 'number', values.pensionTicket, true ) }
          </div>
        }
      </div>
      {
        values.type_material !== 'new' && <>
          { myInput( 'Час роботи:', 'work_time', 'text', values.work_time ) }
          { myTextarea( 'Як дістатися:', 'how_to_get_there' ) }
        </>
      }
      <Editor editor={ values.editor } onChange={ setFieldValue } />
      <div className={ css(loginStyles.inputSub) }>
        <Button type="submit" nameBtn='Зберегти' isSubmitting={ isSubmitting } />
      </div>
    </form>
  </section>
}