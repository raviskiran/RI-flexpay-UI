import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap'
import Breadcrumbs from '../../components/Common/Breadcrumb'
import { fetcher } from '../../fetcher'
import cardsList from '../../mockData/cardsList.js'
import { get } from '../../helpers/api_helper'

const Cards = (props) => {
  const columns = [
    {
      label: 'Card No',
      field: 'cardNumber',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Customer Id',
      field: 'customerId',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Plastic Type',
      field: 'plastic',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Action',
      field: 'action',
      width: 100
    }
  ]

  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    get('card/unallocated').then((data) => {
      console.log(data)

      let userData = []
      data.map((item, index) => {
        item.id = <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{item.id}</div>
        item.action = (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              className="uil-trash-alt"
              style={{
                cursor: 'pointer',
                color: 'black',
                fontSize: '.7em',
                padding: '.5rem',
                borderRadius: '.3rem',
                background: '#fb6262'
              }}
              onClick={() => console.log(item)}
            >
              Allocate
            </div>
          </div>
        )
        userData.push(item)
      })

      setCardsData(userData)
    })
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Home" breadcrumbItem="Cards List" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <MDBDataTable responsive bordered data={{ columns, rows: cardsData }} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Cards
