import React from 'react'

const checkboxes = [
    {
      name: 'Monday',
      key: 'monday',
      label: 'monday',
    },
    {
        name: 'Tuesday',
        key: 'tuesday',
        label: 'tuesday',
      },
      {
        name: 'Saturday',
        key: 'saturday',
        label: 'saturday',
      },
  ];

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  )

export default ({handleChange, days}) => 
    <>
        <p>Which days are you interested in?</p>
        {checkboxes.map(item => (
        <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={days.includes(item.name)} onChange={handleChange} />
        </label>
    ))}
    </>

