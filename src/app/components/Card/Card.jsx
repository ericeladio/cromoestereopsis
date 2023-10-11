import React from 'react';
import styles from './style.module.css'

function Card(props) {
    return (
        <div style={{
            ...styles2.card,
            ...styles2[props.size]
        }}>
            <svg  className={styles.svgFilters}>
  <filter id="cromo-filter">
    <feColorMatrix type="matrix" result="grayscale"
      values="1 0 0 0 0
              1 0 0 0 0
              1 0 0 0 0
              0 0 0 1 0" />
    
    <feComponentTransfer color-interpolation-filters="sRGB" result="cromo-filter">
      <feFuncR type="table" tableValues="1 0 "></feFuncR>
      <feFuncG type="table" tableValues="0 0.5254901961"></feFuncG>
      <feFuncB type="table" tableValues="0 0.9725490196"></feFuncB>
      <feFuncA type="table" tableValues="0 1"></feFuncA>
    </feComponentTransfer> 
  </filter> 
</svg>

<img className={[styles.img, styles.cromoFilter].join(' ')} 
  src='https://images.unsplash.com/photo-1571666255254-401e2f37e07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBlcnNvbiUyMGF0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
  alt='people'
/>
        </div>
    )
}

const styles2 = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Card;