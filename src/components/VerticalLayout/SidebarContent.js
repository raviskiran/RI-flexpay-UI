import PropTypes from 'prop-types'
import React, { useEffect, useRef, useCallback } from 'react'

// //Import Scrollbar
import SimpleBar from 'simplebar-react'

// MetisMenu
import MetisMenu from 'metismenujs'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

//i18n
import { withTranslation } from 'react-i18next'

const sideMenuItems = () => {
  if (true) {
    // TODO: May be we have to change this logic. For now if the path matches card string, then we show one set of menu
    return [
      {
        label: 'Import cards',
        path: '/import-cards',
        icon: 'bx bx-link'
      },
      {
        label: 'Cards',
        path: '/cards',
        icon: 'bx bx-credit-card'
      },
      {
        label: 'Create Card Holder',
        path: '/create-card-holder',
        icon: 'bx bx-credit-card'
      },
      {
        label: 'Card Holders List',
        path: '/card-holders-list',
        icon: 'bx bx-credit-card'
      },
      {
        label: 'Agents',
        path: '/users-list',
        icon: 'bx bxs-receipt'
      }
    ]
  } else {
    return [
      {
        label: 'Customer List',
        path: '/customer-list',
        icon: 'bx bx-credit-card'
      }
    ]
  }
}

const SidebarContent = (props) => {
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add('active')
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== 'side-menu') {
      parent2El.classList.add('mm-show')
    }
    if (parent) {
      parent.classList.add('mm-active')
      const parent2 = parent.parentElement
      if (parent2) {
        parent2.classList.add('mm-show') // ul tag
        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add('mm-active') // li
          parent3.childNodes[0].classList.add('mm-active') //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add('mm-show') // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add('mm-show') // li
              parent5.childNodes[0].classList.add('mm-active') // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }, [])
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname
    const initMenu = () => {
      new MetisMenu('#side-menu')
      let matchingMenuItem = null
      const ul = document.getElementById('side-menu')
      const items = ul.getElementsByTagName('a')
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])
  useEffect(() => {
    ref.current.recalculate()
  }, [])
  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar ref={ref} className="vertical-simplebar">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t('Menu')} </li>

            {sideMenuItems().map((item) => (
              <li>
                <Link to={`${item.path}`} className="waves-effect">
                  <i className={`${item.icon}`}></i>
                  <span>{props.t(item.label)}</span>
                </Link>
              </li>
            ))}
            {/* <li>
              <Link to="/new/dashboard" className="waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="bx bx-credit-card"></i>
                <span>{props.t("Cards List")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/new/cards-inventory"><i className="bx bxs-receipt"></i>
                    <span>  {props.t("Cards Inventory")}</span></Link>
                </li>
                <li>
                  <Link to="/new/operations-dashboard"><i className="bx bx-link"></i>
                    <span>{props.t("Operations Dashboard")}</span> </Link>
                </li>
                <li>
                  <Link to="/new/import-cards"><i className="bx bx-link"></i>
                    <span>{props.t("Import Cards")} </span></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="bx bx-home"></i>
                <span>{props.t("System")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/new/profile-users"><i className="bx bx-link"></i>
                    <span>  {props.t("Profile Users")}</span></Link>
                </li>
                <li>
                  <Link to="/email-read"><i className="bx bx-link"></i>
                    <span>{props.t("Admin Users")}</span> </Link>
                </li>
                <li>
                  <Link to="/new/generate-report"><i className="bx bx-link"></i>
                    <span>{props.t("Generate Report")} </span></Link>
                </li>
                <li>
                  <Link to="/email-read"><i className="bx bx-link"></i>
                    <span>{props.t("Profile Balance Report")} </span></Link>
                </li>
                <li>
                  <Link to="/email-read"><i className="bx bx-link"></i>
                    <span>{props.t("Group Funds Movement Report")} </span></Link>
                </li>
                <li>
                  <Link to="/email-read"><i className="bx bx-link"></i>
                    <span>{props.t("Merchant Report")} </span></Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any
}

export default withRouter(withTranslation()(SidebarContent))
