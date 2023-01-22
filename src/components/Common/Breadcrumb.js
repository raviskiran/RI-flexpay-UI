import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem } from "reactstrap"

const Breadcrumb = props => {
  return (
    <Row>
      <Col className="col-12">
        <div className="page-title-box d-flex align-items-start align-items-center justify-content-between">
          <h4 className="page-title mb-0 font-size-18">{props.breadcrumbItem}</h4>
          {props.additionalInfo && <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px'
          }}>
            <div style={{
              fontSize: '16px',
              background: 'white',
              padding: '6px',
              color: '#293e92',
              borderRadius: '16px'
            }}>
              {props.additionalInfo}
            </div>
          </div>}
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to={props.titleLink}>{props.title}</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to={props.itemLink}>{props.breadcrumbItem}</Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default Breadcrumb
