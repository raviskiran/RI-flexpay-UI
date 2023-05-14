import React, { useEffect } from 'react'
import { useFormContext, Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import getValue from 'get-value'
import './index.css'

const TextField = ({
  label,
  register,
  required,
  value,
  valued,
  onChange,
  className,
  maxLength,
  errors,
  type,
  ...props
}) => {
  useEffect(() => {
    if (valued) onChange(valued)
  }, [])
  if (type === 'file') {
    return (
      <div className={`${className} mb-3`}>
        <label className={`form-label ${required && 'required'}`}>{label}</label>
        <input
          className="form-control"
          required={required}
          onChange={(e) => {
            if (type === 'file') {
              const file = e.target.files[0]
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                // Use a regex to remove data url part
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')

                onChange(base64String)
                // Logs wL2dvYWwgbW9yZ...
              }
            }
            onChange(e.target.value)
          }}
          maxlength={maxLength}
          type={type}
          {...props}
        />
        <label className="requiredError">{props.error && props.error.message}</label>
      </div>
    )
  } else {
    return (
      <div className={`${className} mb-3`}>
        <label className={`form-label ${required && 'required'}`}>{label}</label>
        <input
          className="form-control"
          required={required}
          onChange={(e) => {
            if (type === 'file') {
              const file = e.target.files[0]
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                // Use a regex to remove data url part
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')

                onChange(base64String)
                // Logs wL2dvYWwgbW9yZ...
              }
            }
            onChange(e.target.value)
          }}
          maxlength={maxLength}
          type={type}
          defaultValue={valued}
          {...props}
        />
        <label className="requiredError">{props.error && props.error.message}</label>
      </div>
    )
  }
}

// you can use React.forwardRef to pass the ref too
const SelectField = React.forwardRef(
  ({ onChange, onBlur, name, label, className, options, required, ...props }, ref) => {
    useEffect(() => {
      if (props.valued)
        onChange(
          options.find((o) => {
            return o.value === props.valued
          })
        )
    }, [])
    return (
      <div className={`${className} mb-3`}>
        <label className={`form-label ${required && 'required'}`}>{label}</label>
        <Select
          {...props}
          defaultValue={options.find((o) => {
            return o.value === props.valued
          })}
          onChange={(opt) => {
            onChange(opt)
          }}
          required={required}
          options={options}
          classNamePrefix="select2-selection"
        />
        <label className="requiredError">{props.error && props.error.message}</label>
      </div>
    )
  }
)

const CommInput = ({ name, type, required, label, valued, ...props }) => {
  const { control, register, setValue, setError, formState } = useFormContext()

  switch (type) {
    case 'select':
      return (
        <Controller
          render={({ field, fieldState }) => {
            return (
              <SelectField
                name={name}
                label={label}
                valued={valued}
                required={required}
                {...props}
                {...fieldState}
                {...field}
                register={register}
              />
            )
          }}
          control={control}
          name={name}
          required={required}
          // rules={{
          //   required: required && `${label} is required`
          // }}
        />
      )
    default:
      return (
        <Controller
          render={({ field, fieldState }) => {
            return (
              <TextField
                name={name}
                label={label}
                required={required}
                valued={valued}
                type={type}
                {...props}
                {...field}
                {...fieldState}
              />
            )
          }}
          control={control}
          name={name}
          required={required}
          // rules={{
          //   required: required && `${label} is required`
          // }}
        />
      )
  }
}

export default CommInput
