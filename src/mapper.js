import { assocPath } from 'ramda'

export const fieldsKeyMapper = {
  email: ['email'],
  cardId: ['cardId'],
  initials: ['cardholder', 'initials'],
  firstName: ['cardholder', 'firstName'],
  surname: ['cardholder', 'surname'],
  title: ['cardholder', 'title'],
  dob: ['cardholder', 'dob'],
  gender: ['cardholder', 'gender'],
  nationality: ['cardholder', 'nationality'],
  primaryIdentityType: ['cardholder', 'primaryIdentity', 'type'],
  primaryIdentityNumber: ['cardholder', 'primaryIdentity', 'number'],
  primaryIdentityIssueDate: ['cardholder', 'primaryIdentity', 'issueDate'],
  primaryIdentityExpiryDate: ['cardholder', 'primaryIdentity', 'expiryDate'],
  primaryIdentityIssueCountry: ['cardholder', 'primaryIdentity', 'issueCountry'],
  secondaryIdentityType: ['cardholder', 'secondaryIdentity', 'type'],
  secondaryIdentityNumber: ['cardholder', 'secondaryIdentity', 'number'],
  secondaryIdentityIssueDate: ['cardholder', 'secondaryIdentity', 'issueDate'],
  secondaryIdentityExpiryDate: ['cardholder', 'secondaryIdentity', 'expiryDate'],
  secondaryIdentityIssueCountry: ['cardholder', 'secondaryIdentity', 'issueCountry'],

  ficaIndicator: ['cardholder', 'ficaIndicator'],
  udf1: ['cardholder', 'udf1'],
  udf2: ['cardholder', 'udf2'],
  udf3: ['cardholder', 'udf3'],
  keyField: ['cardholder', 'keyField'],
  employeeId: ['cardholder', 'employeeId'],
  employerName: ['cardholder', 'employerName'],
  languageIndicator: ['cardholder', 'languageIndicator'],
  emailAddress: ['cardholder', 'emailAddress'],
  phone: ['cardholder', 'phone'],
  mobile: ['cardholder', 'mobile'],
  residenceIndicator: ['cardholder', 'residenceIndicator'],
  residentialStatusCode: ['cardholder', 'residentialStatusCode'],

  residentialAddressStreetNumber: ['cardholder', 'residentialAddress', 'streetNumber'],
  residentialAddressLine1: ['cardholder', 'residentialAddress', 'line1'],
  residentialAddressLine2: ['cardholder', 'residentialAddress', 'line2'],
  residentialAddressSuburb: ['cardholder', 'residentialAddress', 'suburb'],
  residentialAddressCity: ['cardholder', 'residentialAddress', 'city'],
  residentialAddressCountry: ['cardholder', 'residentialAddress', 'country'],
  residentialAddressProvince: ['cardholder', 'residentialAddress', 'province'],
  residentialAddressPostalCode: ['cardholder', 'residentialAddress', 'postalCode'],

  postalAddressIndicator: ['cardholder', 'postalAddressIndicator'],

  postalAddressStreetNumber: ['cardholder', 'postalAddress', 'streetNumber'],
  postalAddressLine1: ['cardholder', 'postalAddress', 'line1'],
  postalAddressLine2: ['cardholder', 'postalAddress', 'line2'],
  postalAddressSuburb: ['cardholder', 'postalAddress', 'suburb'],
  postalAddressCity: ['cardholder', 'postalAddress', 'city'],
  postalAddressCountry: ['cardholder', 'postalAddress', 'country'],
  postalAddressProvince: ['cardholder', 'postalAddress', 'province'],
  postalAddressPostalCode: ['cardholder', 'postalAddress', 'postalCode'],

  deliveryAddressStreetNumber: ['cardholder', 'deliveryAddress', 'streetNumber'],
  deliveryAddressLine1: ['cardholder', 'deliveryAddress', 'line1'],
  deliveryAddressLine2: ['cardholder', 'deliveryAddress', 'line2'],
  deliveryAddressSuburb: ['cardholder', 'deliveryAddress', 'suburb'],
  deliveryAddressCity: ['cardholder', 'deliveryAddress', 'city'],
  deliveryAddressCountry: ['cardholder', 'deliveryAddress', 'country'],
  deliveryAddressProvince: ['cardholder', 'deliveryAddress', 'province'],
  deliveryAddressPostalCode: ['cardholder', 'deliveryAddress', 'postalCode'],

  suitableContactTime: ['cardholder', 'suitableContactTime'],
  bankName: ['cardholder', 'otherBankAccount', 'bankName'],
  accountName: ['cardholder', 'otherBankAccount', 'accountName'],
  accountNumber: ['cardholder', 'otherBankAccount', 'accountNumber'],
  branchName: ['cardholder', 'otherBankAccount', 'branchName'],
  branchCode: ['cardholder', 'otherBankAccount', 'branchCode'],
  accountType: ['cardholder', 'otherBankAccount', 'accountType'],

  sectorCode: ['cardholder', 'employmentDetails', 'sectorCode'],
  industryId: ['cardholder', 'employmentDetails', 'industryId'],
  industryHighLevel: ['cardholder', 'employmentDetails', 'industryHighLevel'],
  employmentStatus: ['cardholder', 'employmentDetails', 'employmentStatus'],
  monthlyTurnover: ['cardholder', 'employmentDetails', 'monthlyTurnover'],
  sourceOfFunds: ['cardholder', 'employmentDetails', 'sourceOfFunds'],
  cashTransactValue: ['cardholder', 'employmentDetails', 'cashTransactValue'],
  expectedUseOfChannel: ['cardholder', 'employmentDetails', 'expectedUseOfChannel'],
  expectedForeignTransactions: ['cardholder', 'employmentDetails', 'expectedForeignTransactions'],
  foreignCountryMandatory: ['cardholder', 'employmentDetails', 'foreignCountryMandatory'],
  expectedForeignCountry: ['cardholder', 'employmentDetails', 'expectedForeignCountry'],

  // document

  //emboss
  embossLine1: ['cardholder', 'cardPlasticDetails', 'embossLine1'],
  embossLine2: ['cardholder', 'cardPlasticDetails', 'embossLine2'],
  mailLine1: ['cardholder', 'cardPlasticDetails', 'mailLine1'],
  mailLine2: ['cardholder', 'cardPlasticDetails', 'mailLine2']
}

export const mapFieldsKey = (data) => {
  return Object.entries(fieldsKeyMapper).reduce((acc, [key, path]) => {
    if (data[key] && data[key].value && data[key].label) {
      // TODO: may be we should change it
      return assocPath(path, data[key].value, acc)
    }
    return assocPath(path, data[key], acc)
  }, {})
}
