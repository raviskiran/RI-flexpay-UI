import React, { useEffect, useState } from 'react'
import Tables from '../Tables/BasicTables'
import { MDBDataTable } from "mdbreact"
import { useHistory } from "react-router-dom";

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import customerList from '../../mockData/customerList';
import { fetcher } from '../../fetcher';
import { get } from '../../helpers/api_helper';
import { GET_ALL_CUSTOMERS } from '../../helpers/url_helper'

export default (props) => {
  const history = useHistory();
  const columns = [
    {
      label: "Company Name",
      field: "companyName",
      sort: "asc",
      width: 150,
    },
    {
      label: "Email",
      field: "emailAddress",
      sort: "asc",
      width: 100,
    },
    {
      label: "Contact Number",
      field: "contactNumber",
      sort: "asc",
      width: 200,
    },
    {
      label: "Action",
      field: "action",
      sort: "asc",
      width: 270,
    },
  ]
  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    // fetcher.get(customerList) //mock
    get(GET_ALL_CUSTOMERS).then(data => {
      let userData = [];
      // api call, then map the data
      data.data.map((item, index) => {

        item.action = (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              color="secondary"
              className="btn btn-secondary waves-effect"
              onClick={() => history.push('/create-card-holder')}
            >
              <i className="bx bx-link-external"></i>{" "}
              Pay Card
            </Button>
          </div>
        );
        userData.push({ ...item, ...item.client });
      });
      setCardsData(userData);
    })
  }, []);


  return <React.Fragment>
    <div className="page-content">
      <Breadcrumbs title="Home" breadcrumbItem="Customer List" />

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
                    <i className="bx bx-group" style={{ paddingRight: '8px' }}></i>Customers
                  </div>
                  <Button
                    color="secondary"
                    className="btn btn-secondary waves-effect"
                  >
                    <i className="bx bx-plus"></i>{" "}
                    Create Customer
                  </Button>
                </div>
              </CardTitle>

              {/* <CardSubtitle className="mb-3">
                                mdbreact DataTables has most features enabled by default, so
                                all you need to do to use it with your own tables is to call
                                the construction function:{" "}
                                <code>&lt;MDBDataTable /&gt;</code>.
                            </CardSubtitle> */}

              <MDBDataTable responsive bordered data={{ columns, rows: cardsData }} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  </React.Fragment>
}