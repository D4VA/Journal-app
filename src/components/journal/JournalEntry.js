import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>

      <div 
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://eldiariony.com/wp-content/uploads/sites/2/2022/01/pexels-kid-candy-5425513.jpg?quality=60&strip=all&w=1200)'
        }}
      ></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          Un nuevo día
        </p>
        <p className='journal__entry-content'>
          loremp imsup hola como esta[as babalabanba]
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>
          Monday
          <h4>28</h4>
        </span>
      </div>

    </div>
  )
}
