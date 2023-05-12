import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label
  // Input
} from 'reactstrap'
import { useForm, FormProvider } from 'react-hook-form'
import Breadcrumbs from '../../components/Common/Breadcrumb'
import Input from '../../components/Common/Input/index'
import { getReferenceData } from '../../referenceData'
import { mapFieldsKey } from '../../mapper'

import { cardHolderTypeFields } from '../../fieldStructure'
import { CREATE_CARD_HOLDER } from '../../helpers/url_helper'
import { get, post } from '../../helpers/api_helper'
import { useLocation } from 'react-router-dom'

const additionalData = {
  cardId: '3525231',
  skipSoap: true,
  cardholder: {
    dob: '1982-05-31',
    title: 'MR',
    gender: 'MALE',
    mobile: '0658691044',
    surname: 'Hleza',
    keyField: 'TEST12345',
    documents: [
      {
        document: {
          fileType: 'PDF'
        }
      },
      {
        document: {
          fileType: 'PDF'
        }
      }
    ],
    firstName: 'Mbuso',
    nationality: 'SOUTH_AFRICA',
    ficaIndicator: 'FICA_LIGHT',
    postalAddress: {},
    deliveryAddress: {
      city: 'Joihannesburg',
      line1: '74',
      line2: 'Glover road',
      suburb: 'Rockville',
      country: 'SOUTH_AFRICA',
      province: 'GAUTENG',
      postalCode: '1818'
    },
    primaryIdentity: {
      type: 'SAI',
      number: '8205315412085',
      issueDate: '1998-06-10',
      issueCountry: 'SOUTH_AFRICA'
    },
    otherBankAccount: {},
    employmentDetails: {},
    languageIndicator: 'EN',
    secondaryIdentity: {
      type: 'SAI',
      number: '8205315412087',
      issueDate: '1998-06-20',
      expiryDate: '2030-06-20',
      issueCountry: 'SOUTH_AFRICA'
    },
    residenceIndicator: 'RESIDENT',
    residentialAddress: {
      city: 'Johannesburg',
      line1: '74',
      line2: 'Glover road',
      suburb: 'Rockville',
      country: 'SOUTH_AFRICA',
      province: 'GAUTENG',
      postalCode: '1818'
    },
    residentialStatusCode: 'TENANT',
    postalAddressIndicator: 'SAME_AS_RESIDENT'
  }
}

export default () => {
  const location = useLocation()
  const { formState, register, reset, ...methods } = useForm()

  const handleSubmit = () => {
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
      const mappedData = {
        ...mapFieldsKey(data),
        cardholder: { ...mapFieldsKey(data).cardholder, documents },
        email: 'admin@softlabs.co.za'
      }
      console.log(mappedData)

      post(CREATE_CARD_HOLDER, mappedData)
        .then((res) => {
          console.log(res, 'res')
          return res.data
        })
        .catch((error) => console.log(error))
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
                          valued={field.name === 'cardId' ? location?.state?.cardId : ''}
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
              Submit
            </Button>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  )
}
