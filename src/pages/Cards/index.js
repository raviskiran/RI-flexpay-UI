import React, { useEffect, useState } from 'react'
import { MDBDataTable } from "mdbreact"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { fetcher } from '../../fetcher';
import cardsList from '../../mockData/cardsList.js';


const Cards = (props) => {
  const columns = [
    {
      label: "Card No",
      field: "card_no",
      sort: "asc",
      width: 150,
    },
    {
      label: "Sequence Number",
      field: "seq_no",
      sort: "asc",
      width: 100,
    },
    {
      label: "Tracking No.",
      field: "tracking_no",
      sort: "asc",
      width: 270,
    },

  ]

  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    fetcher.get(cardsList).then(data => {
      setCardsData(data)
    })
  }, []);

  return <React.Fragment>
    <div className="page-content">
      <Breadcrumbs title="Home" breadcrumbItem="Cards List" />

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    fontSize: '16px',
                    background: '#293e92',
                    padding: '6px',
                    color: 'white',
                    borderRadius: '16px'
                  }}>
                    Impersonating Customer
                  </div>
                </div>
              </CardTitle>

              <MDBDataTable responsive bordered data={{ columns, rows: cardsData }} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  </React.Fragment>
}

export default Cards