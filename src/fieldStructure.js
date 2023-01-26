const bankAccountFields = [
  {
    name: 'bankName',
    label: 'Bank Name',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 40
  },
  {
    name: 'accountName',
    label: 'Account Name',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 30
  },
  {
    name: 'accountNumber',
    label: 'Account Number',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 20
  },
  {
    name: 'branchName',
    label: 'Branch Name',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 40
  },
  {
    name: 'branchCode',
    label: 'Branch Code',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 10
  },
  {
    name: 'accountType',
    label: 'Account Type',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 20
  },
]

const employmentDetailsFields = [
  {
    name: 'sectorCode',
    label: 'Sector Code',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'industryId',
    label: 'Industry Id',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'industryHighLevel',
    label: 'Industry High Level',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'employmentStatus',
    label: 'Employment Status',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'monthlyTurnover',
    label: 'Monthly Turnover',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'sourceOfFunds',
    label: 'Source Of Funds',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'cashTransactValue',
    label: 'Cash Transact Value',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'expectedUseOfChannel',
    label: 'Expected Use Of Channel',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'expectedForeignTransactions',
    label: 'Expected Foreign Transactions',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'foreignCountryMandatory',
    label: 'Foreign Country Mandatory',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'foreignCountryMandatory'
  },
  {
    name: 'expectedForeignCountry',
    label: 'Expected Foreign Country',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
]

const documentFields = [
  {
    name: 'documentType1',
    label: 'Document Type',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'saiRefData'
  },
  // {
  //   name: 'fileType1',
  //   label: 'File Type',
  //   type: 'select',
  //   required: () => true,
  //   className: 'col-md-6',
  //   renderIf: () => true,
  //   disabled: () => false,
  // },
  {
    name: 'base64EncodedFile1',
    label: 'Upload Document',
    type: 'file',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'documentType2',
    label: 'Document Type',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'proofOfAddressRefData'
  },
  // {
  //   name: 'fileType2',
  //   label: 'File Type',
  //   type: 'select',
  //   required: () => true,
  //   className: 'col-md-6',
  //   renderIf: () => true,
  //   disabled: () => false,
  // },
  {
    name: 'base64EncodedFile2',
    label: 'Upload Document',
    type: 'file',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
]

const cardPlasticDetailsFields = [
  {
    name: 'embossLine1',
    label: 'Emboss Line 1',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 20
  },
  {
    name: 'embossLine2',
    label: 'Emboss Line 2',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 20
  },
  {
    name: 'mailLine1',
    label: 'Mail Line 1',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 40
  },
  {
    name: 'mailLine2',
    label: 'Mail Line 2',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 40
  },
]

const postalAddressFields = [
  {
    name: 'postalAddressStreetNumber',
    label: 'Street Number',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 6
  },
  {
    name: 'postalAddressLine1',
    label: 'Line 1',
    type: 'text',
    required: ({ postalAddressIndicator }) => postalAddressIndicator && postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'postalAddressLine2',
    label: 'Line 2',
    type: 'text',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'postalAddressSuburb',
    label: 'Suburb',
    type: 'text',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'postalAddressCity',
    label: 'City',
    type: 'text',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'postalAddressCountry',
    label: 'Country',
    type: 'select',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'

  },
  {
    name: 'postalAddressProvince',
    label: 'Province',
    type: 'select',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'province'

  },
  {
    name: 'postalAddressPostalCode',
    label: 'Postal Code',
    type: 'text',
    required: ({ postalAddressIndicator }) => postalAddressIndicator.value === "DIFF_FROM_RESIDENT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
]
const residentialAddressFields = [
  {
    name: 'residentialAddressStreetNumber',
    label: 'Street Number',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 6
  },
  {
    name: 'residentialAddressLine1',
    label: 'Line 1',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'residentialAddressLine2',
    label: 'Line 2',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'residentialAddressSuburb',
    label: 'Suburb',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'residentialAddressCity',
    label: 'City',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'residentialAddressCountry',
    label: 'Country',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'

  },
  {
    name: 'residentialAddressProvince',
    label: 'Province',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'province'

  },
  {
    name: 'residentialAddressPostalCode',
    label: 'Postal Code',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
]
const deliveryAddressFields = [
  {
    name: 'deliveryAddressStreetNumber',
    label: 'Street Number',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 6
  },
  {
    name: 'deliveryAddressLine1',
    label: 'Line 1',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'deliveryAddressLine2',
    label: 'Line 2',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'deliveryAddressSuburb',
    label: 'Suburb',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'deliveryAddressCity',
    label: 'City',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
  {
    name: 'deliveryAddressCountry',
    label: 'Country',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'
  },
  {
    name: 'deliveryAddressProvince',
    label: 'Province',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'province'

  },
  {
    name: 'deliveryAddressPostalCode',
    label: 'Postal Code',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 150
  },
]
const primaryIdentityFields = [
  {
    name: 'primaryIdentityType',
    label: 'Identity Type',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'identityType'
  },
  {
    name: 'primaryIdentityNumber',
    label: 'Number',
    type: 'number',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 25
  },
  {
    name: 'primaryIdentityIssueDate',
    label: 'Issue Date',
    type: 'date',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'primaryIdentityExpiryDate',
    label: 'Expiry Date',
    type: 'date',
    required: ({ primaryIdentityType }) => primaryIdentityType.value !== 'SAI',
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'primaryIdentityIssueCountry',
    label: 'Issue Country',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'
  },
]
const secondaryIdentityFields = [
  {
    name: 'secondaryIdentityType',
    label: 'Identity Type',
    type: 'select',
    required: ({ secondaryIdentityType, ficaIndicator }) => secondaryIdentityType.value === 'PASS' && ficaIndicator.value === "FICA_LIGHT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'identityType'
  },
  {
    name: 'secondaryIdentityNumber',
    label: 'Number',
    type: 'number',
    required: ({ secondaryIdentityType, ficaIndicator }) => secondaryIdentityType.value === 'PASS' && ficaIndicator.value === "FICA_LIGHT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 25
  },
  {
    name: 'secondaryIdentityIssueDate',
    label: 'Issue Date',
    type: 'date',
    required: ({ secondaryIdentityType, ficaIndicator }) => secondaryIdentityType.value === 'PASS' && ficaIndicator.value === "FICA_LIGHT",

    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'secondaryIdentityExpiryDate',
    label: 'Expiry Date',
    type: 'date',
    required: (type) => type !== 'SAI',
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'secondaryIdentityIssueCountry',
    label: 'Issue Country',
    type: 'select',
    required: ({ secondaryIdentityType, ficaIndicator }) => secondaryIdentityType.value === 'PASS' && ficaIndicator.value === "FICA_LIGHT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'
  },
]

export const cardHolderTypeFields = [
  {
    name: 'cardId',
    label: 'Card Id',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 25
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 100
  },
  {
    label: 'Cardholder Type',
    type: 'label',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  {
    name: 'initials',
    label: 'Initials',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 5
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'surname',
    label: 'Surname',
    type: 'text',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'title',
    label: 'Title',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  {
    name: 'dob',
    label: 'DOB',
    type: 'date',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  {
    name: 'nationality',
    label: 'Nationality',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    refDataKey: 'country'
  },
  {
    name: 'primaryIdentity',
    label: 'Primary Identity',
    type: 'label',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  ...primaryIdentityFields,
  {
    name: 'secondaryIdentity',
    label: 'Secondary Identity',
    type: 'label',
    required: ({ secondaryIdentityType, ficaIndicator }) => secondaryIdentityType.value === 'PASS' && ficaIndicator.value === "FICA_LIGHT",
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false
  },
  ...secondaryIdentityFields,
  {
    type: 'label',
    label: ' '
  },
  {
    name: 'ficaIndicator',
    label: 'Fica Indicator',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'udf1',
    label: 'UDF1',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'udf2',
    label: 'Udf2',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 255
  },
  {
    name: 'udf3',
    label: 'Udf3',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 225
  },
  {
    name: 'keyField',
    label: 'Key Field',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 100
  },
  {
    name: 'employeeId',
    label: 'Employee Id',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'employerName',
    label: 'Employer Name',
    type: 'text',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 100
  },
  {
    name: 'languageIndicator',
    label: 'Language Indicator',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'emailAddress',
    label: 'Email Address',
    type: 'email',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 50
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'phone',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 25
  },
  {
    name: 'mobile',
    label: 'Mobile',
    type: 'phone',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 25
  },
  {
    name: 'residenceIndicator',
    label: 'Residence Indicator',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'residentialStatusCode',
    label: 'Residential Status Code',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'residentialAddress',
    label: 'Residential Address',
    type: 'label',
    required: () => true,
  },
  ...residentialAddressFields,
  {
    name: 'postalAddressIndicator',
    label: 'Postal Address Indicator',
    type: 'select',
    required: () => true,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
  },
  {
    name: 'postalAddress',
    label: 'Postal Address',
    type: 'label',
  },
  ...postalAddressFields,
  {
    name: 'deliveryAddress',
    label: 'Delivery Address',
    type: 'label'
  },
  ...deliveryAddressFields,
  {
    name: 'suitableContactTime',
    label: 'Suitable Contact Time',
    type: 'time',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 100
  },
  {
    name: 'otherBankAccount',
    label: 'Other Bank Account',
    type: 'label',
    required: () => false,
    className: 'col-md-6',
    renderIf: () => true,
    disabled: () => false,
    maxLength: 100
  },
  ...bankAccountFields,
  {
    name: 'employmentDetails',
    label: 'Employment Details',
    type: 'label'
  },
  ...employmentDetailsFields,
  {
    name: 'documents',
    label: 'Documents',
    type: 'label'
  },
  ...documentFields,
  {
    name: 'cardPlasticDetails',
    label: 'Card Plastic Details',
    type: 'label'
  },
  ...cardPlasticDetailsFields
]