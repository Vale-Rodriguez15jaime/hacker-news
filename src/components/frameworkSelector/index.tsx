import Select from 'react-select'
import Image from 'next/image'

import { optionsSelector } from '../newsWrapper/utils'
import styles from './frameworkSelector.module.sass'

const Option = (props: any) => {
  const {
    children,
    className,
    cx,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
    data
  } = props
  const optionsClassName = {
    'option': true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }
  return (
    <div
      data-id={`frameworkSelector-OptionValue-${data.value}`}
      className={cx(optionsClassName, className)}
      ref={innerRef}
      {...innerProps}
    >
      <Image src={data.flag} alt={data.value} width={22} height={22} />
      {<span>{children}</span>}
    </div>
  )
}

const SingleValue = (props: any) => {
  const { children, className, cx, isDisabled, innerProps, data } = props
  return (
    <div
      id={`frameworkSelector-SingleValue-${data.value}`}
      className={cx(
        {
          'single-value': true,
          'single-value--is-disabled': isDisabled
        },
        className
      )}
      {...innerProps}
    >
      <Image src={data.flag} alt={data.value} width={22} height={22} />
      <span>{children}</span>
    </div>
  )
}

const FrameworkSelector = ({ value, onChange }: any) => {
  return (
    <div className={styles.wrapper}>
      <Select
        classNamePrefix="frameworkSelector"
        isSearchable={false}
        className="frameworkSelector"
        value={value}
        options={optionsSelector}
        components={{ Option, SingleValue }}
        onChange={onChange}
      />
    </div>
  )
}

export default FrameworkSelector
