import React, { useEffect, useState } from 'react'
import { path } from 'ramda'

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
  Alert,
  UncontrolledAlert
  // Input
} from 'reactstrap'
import { useForm, FormProvider } from 'react-hook-form'
import Breadcrumbs from '../../components/Common/Breadcrumb'
import Input from '../../components/Common/Input/index'
import { getReferenceData } from '../../referenceData'
import { mapFieldsKey, fieldsKeyMapper } from '../../mapper'

import { cardHolderTypeFields } from '../../fieldStructure'
import { CREATE_CARD_HOLDER } from '../../helpers/url_helper'
import { get, post } from '../../helpers/api_helper'
import { useLocation, useParams } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const location = useLocation()
  const query = useQuery()
  const cardholderId = query.get('id')

  const [cardholderData, setCardholderData] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (cardholderId) {
      setLoading(true)
      get(`card-holders/${cardholderId}`).then((data) => {
        setTimeout(() => {
          setLoading(false)
          setCardholderData(data.additionalData)
        }, 1000)
      })
    }
  }, [])

  const { formState, register, reset, ...methods } = useForm()

  const handleSubmit = () => {
    setSubmitting(true)
    setError(false)
    setSuccess(false)
    methods.handleSubmit((data) => {
      const documents = {
        document: [
          {
            documentType: data?.documentType1?.value,
            fileType: 'PDF',
            base64EncodedFile: data?.base64EncodedFile1
          },
          {
            documentType: data?.documentType2?.value,
            fileType: 'PDF',
            base64EncodedFile: data?.base64EncodedFile2
          }
        ]
      }

      let oldData = {}
      cardHolderTypeFields.map((field) => {
        oldData[field.name] = path(fieldsKeyMapper[field.name] || [], cardholderData)
        // methods.setValue(field.name, path(fieldsKeyMapper[field.name] || [], data.additionalData))
        // setTimeout(() => {
        //   methods.setValue(field.name, path(fieldsKeyMapper[field.name] || [], data.additionalData))
        //   //reset({ [field.name]: path(fieldsKeyMapper[field.name] || [], data.additionalData) })
        // }, 2000)
      })

      const mappedData = {
        ...mapFieldsKey(data),
        cardholder: { ...mapFieldsKey(data).cardholder, documents },
        email: 'admin@softlabs.co.za',
        cardholderId: cardholderId
      }
      console.log(mappedData)

      post(CREATE_CARD_HOLDER, mappedData)
        .then((res) => {
          console.log(res, 'res')
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

  const postalAddressIndicator = methods.watch('postalAddressIndicator') || {}
  const primaryIdentityType = methods.watch('primaryIdentityType') || {}
  const ficaIndicator = methods.watch('ficaIndicator') || {}
  const secondaryIdentityType = methods.watch('secondaryIdentityType') || {}

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="System" breadcrumbItem="Create Card Holder" />
        {!loading && (
          <Card>
            <CardBody>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit}>
                  <section style={{ paddingBottom: '10px' }}>
                    <div className="row">
                      {cardHolderTypeFields.map(({ required, ...field }) => {
                        if (field.type === 'label') {
                          return (
                            <CardTitle>
                              <div style={{ fontSize: '18px' }}>{field.label}</div>
                            </CardTitle>
                          )
                        }

                        return (
                          <Input
                            {...field}
                            required={required({
                              postalAddressIndicator,
                              primaryIdentityType,
                              ficaIndicator,
                              secondaryIdentityType
                            })}
                            options={getReferenceData(field.refDataKey || field.name)}
                            valued={
                              location?.state?.cardId
                                ? field.name === 'cardId'
                                  ? location?.state?.cardId
                                  : ''
                                : path(fieldsKeyMapper[field.name] || [], cardholderData)
                            }
                          />
                        )
                      })}
                    </div>
                  </section>
                  {/* <CardTitle>
                <div style={{ fontSize: '18px' }}>Identity Type</div>
              </CardTitle>
              <section>
                <div className='row'>
                  {identityTypeFields.map(({ required, ...field }) => {
                    return <Input {...field} required={required()} options={getReferenceData(field.refDataKey || field.name)} />
                  })}
                </div>
              </section> 
              <CardTitle>
                <div style={{ fontSize: '18px' }}>Address Type</div>
              </CardTitle> 
             <section>
                <div className='row'>
                  {primaryAddressFields.map(({ required, ...field }) => {
                    return <Input {...field} required={required()} options={getReferenceData(field.refDataKey || field.name)} />
                  })}
                </div>
              </section> 
             <CardTitle>
                <div style={{ fontSize: '18px' }}>Bank Account</div>
              </CardTitle>
              <section>
                <div className='row'>
                  {bankAccountFields.map(({ required, ...field }) => {
                    return <Input {...field} required={required()} options={getReferenceData(field.refDataKey || field.name)} />
                  })}
                </div>
              </section>
              <CardTitle>
                <div style={{ fontSize: '18px' }}>Employment Details</div>
              </CardTitle>
              <section>
                <div className='row'>
                  {employmentDetailsFields.map(({ required, ...field }) => {
                    return <Input {...field} required={required()} options={getReferenceData(field.refDataKey || field.name)} />
                  })}
                </div>
              </section> */}
                </form>
              </FormProvider>
              <Button type="submit" color="primary" className="ms-1" onClick={handleSubmit}>
                {submitting ? 'Submitting...' : 'Submit'}
              </Button>
            </CardBody>
          </Card>
        )}
        {/* <Alert color="primary">A simple primary alert—check it out!</Alert>
        <Alert color="secondary" role="alert">
          A simple secondary alert—check it out!
        </Alert>
        <Alert color="success" role="alert">
          A simple success alert—check it out!
        </Alert>
        <Alert color="danger" role="alert">
          A simple danger alert—check it out!
        </Alert>
        <Alert color="warning" role="alert">
          A simple warning alert—check it out!
        </Alert>
        <Alert color="info" className="mb-0" role="alert">
          A simple info alert—check it out!
        </Alert> */}
        {error && (
          <Alert color="danger" className="alert-dismissible fade show">
            {error}
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
