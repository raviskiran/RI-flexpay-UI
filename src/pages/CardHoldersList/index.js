import React, { useEffect, useState } from 'react'
import Tables from '../Tables/BasicTables'
import { MDBDataTable } from "mdbreact"
import { useHistory } from "react-router-dom";

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { fetcher } from '../../fetcher';
import cardHolderList from '../../mockData/cardHolderList';


const CardHoldersList = (props) => {
  const columns = [
    {
      label: "First Name",
      field: "firstname",
      sort: "asc",
      width: 150,
    },
    {
      label: "Last Name",
      field: "lastname",
      sort: "asc",
      width: 100,
    },
    {
      label: "Passport id",
      field: "passport_id",
      sort: "asc",
      width: 200,
    },
    {
      label: "Mobile",
      field: "mobile",
      sort: "asc",
      width: 270,
    }
  ]

  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    fetcher.get(cardHolderList).then(data => {
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
                  justifyContent: 'space-between'
                }}>
                  <div style={{ fontSize: '18px' }}>
                    <i className="bx bx-group" style={{ paddingRight: '8px' }}></i>Cards
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

export default CardHoldersList