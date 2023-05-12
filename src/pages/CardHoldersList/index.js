import React, { useEffect, useState } from 'react'
import Tables from '../Tables/BasicTables'
import { MDBDataTable } from 'mdbreact'
import { useHistory } from 'react-router-dom'

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import Breadcrumbs from '../../components/Common/Breadcrumb'

import { fetcher } from '../../fetcher'
import cardHolderList from '../../mockData/cardHolderList'
import { get } from '../../helpers/api_helper'
import { GET_ALL_CARD_HOLDERS } from '../../helpers/url_helper'

const CardHoldersList = (props) => {
  const columns = [
    {
      label: 'First Name',
      field: 'firstName',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Last Name',
      field: 'lastName',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Cardholder id',
      field: 'newCardholderId',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Card Number',
      field: 'newCardNumber',
      sort: 'asc',
      width: 270
    }
  ]

  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    //fetcher.get(cardHolderList) //mock
    get(GET_ALL_CARD_HOLDERS).then((data) => {
      setCardsData(data)
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

export default CardHoldersList
