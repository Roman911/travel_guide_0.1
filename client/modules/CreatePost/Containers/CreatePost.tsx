import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form } from "formik"
import { css } from "aphrodite/no-important"
import * as Yup from 'yup'
import { useMutation } from "@apollo/react-hooks"
import { User } from "../../../types/user"
import { addPostMutation } from "../../../apollo/mutations/addPost"
import { modalActions } from "../../../redux/actions"
import baseStyles from "../../../styles"
import styles from "../Components/styles"
import { CreatePostForm } from "../Components/CreatePostForm"

export const CreatePost = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: { user: User }) => state.user)
  const [ createPost ] = useMutation(addPostMutation)
  const initialValues = { editor: '', type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', location: '', work_time: '',  adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: '', text: '', isPrice: ['free'], how_to_get_there: '' }
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, 'Коротка назва')
      .max(50, 'Дуже велика назва')
      .required('Required')
  })
  const onSubmit = (values, onSubmitProps) => {
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
        onSubmitProps.resetForm()
      }
      onSubmitProps.setSubmitting(false)
    }).catch( () => {
      onSubmitProps.setSubmitting(false)
    })
  }
  return <div className={css(baseStyles.boxShadow, styles.wrapper)}>
    <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={ validationSchema } >
      {formik => {
        return <Form >
          <CreatePostForm formik={ formik } />
        </Form>
      }}
    </Formik>
  </div>
}