import React, { useEffect, useState } from 'react'
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
  // Input
} from "reactstrap"
import { useForm, FormProvider } from 'react-hook-form'
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Input from '../../components/Common/Input/index'
import { getReferenceData } from '../../referenceData'
import { mapFieldsKey } from '../../mapper'

import { cardHolderTypeFields } from '../../fieldStructure'

export default () => {
  const { formState, register, reset, ...methods } = useForm()
  useEffect(() => {
    fetch("http://demo0237555.mockable.io/test1", {
      "method": "GET",

    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const handleSubmit = () => {
    methods.handleSubmit((data) => {
      // mapFieldsKey(data)
      console.log(data, mapFieldsKey(data), 'data')
      // TODO: call an api
    })()
  }

  const postalAddressIndicator = methods.watch('postalAddressIndicator') || {}
  const primaryIdentityType = methods.watch('primaryIdentityType') || {}
  const ficaIndicator = methods.watch('ficaIndicator') || {}
  const secondaryIdentityType = methods.watch('secondaryIdentityType') || {}

  return <React.Fragment>
    <div className="page-content">
      <Breadcrumbs title="System" breadcrumbItem="Create Card Holder" />
      <Card>
        <CardBody>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
              <section style={{ paddingBottom: '10px' }}>
                <CardTitle>
                  <div style={{ fontSize: '18px' }}>Cardholder Type</div>
                </CardTitle>
                <div className='row'>
                  {cardHolderTypeFields.map(({ required, ...field }) => {
                    if (field.type === 'label') {
                      return <CardTitle>
                        <div style={{ fontSize: '18px' }}>{field.label}</div>
                      </CardTitle>
                    }
                    return <Input {...field} required={required({ postalAddressIndicator, primaryIdentityType, ficaIndicator, secondaryIdentityType })} options={getReferenceData(field.refDataKey || field.name)} />
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
}