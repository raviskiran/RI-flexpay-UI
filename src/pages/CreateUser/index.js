/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Alert
  // Input
} from 'reactstrap'
import { useForm, FormProvider } from 'react-hook-form'
import Breadcrumbs from '../../components/Common/Breadcrumb'
import Input from '../../components/Common/Input/index'
import { getReferenceData } from '../../referenceData'
import { mapFieldsKey } from '../../mapper'

import { cardHolderTypeFields } from '../../fieldStructure'
import { post } from '../../helpers/api_helper'
import { CREATE_AGENT } from '../../helpers/url_helper'

const CreateUser = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 5
  },
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  }
]

export default () => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const { formState, register, reset, ...methods } = useForm()

  const handleSubmit = () => {
    setSubmitting(true)
    methods.handleSubmit((data) => {
      post(CREATE_AGENT, data)
        .then((res) => {
          setSubmitting(false)
          setError(false)
          setSuccess(true)
          return res.data
        })
        .catch(({ response }) => {
          console.log(response.data)
          console.log(response.status)
          console.log(response.headers)
          setSubmitting(false)
          setError(response.data.message)
          setSuccess(false)
        })
    })()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="System" breadcrumbItem="Create User" />
        <Card>
          <CardBody>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit}>
                <section style={{ paddingBottom: '10px' }}>
                  <div className="row">
                    {CreateUser.map(({ required, ...field }) => {
                      if (field.type === 'label') {
                        return (
                          <CardTitle>
                            <div style={{ fontSize: '18px' }}>{field.label}</div>
                          </CardTitle>
                        )
                      }
                      return <Input {...field} />
                    })}
                  </div>
                </section>
              </form>
            </FormProvider>
            <Button type="submit" color="primary" className="ms-1" onClick={handleSubmit}>
              {submitting ? 'Submitting...' : 'Submit'}
            </Button>
          </CardBody>
        </Card>
        {error && (
          <Alert color="danger" className="alert-dismissible fade show">
            {Array.isArray(error) ? error[0].errors.join(' - ') : error}
          </Alert>
        )}
        {success && (
          <Alert color="success" className="alert-dismissible fade show">
            Card Holder has been created successfully!
          </Alert>
        )}
      </div>
    </React.Fragment>
  )
}
