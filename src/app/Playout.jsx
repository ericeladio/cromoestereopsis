import React from 'react';

import Card from './components/Card/Card.jsx';

function PinterestLayout() {
    return (
        <div style={styles.pin_container}>
            <Card size="small" />
            <Card size="medium" />
            <Card size="large" />
            <Card size="small" />
            <Card size="medium" />
            <Card size="medium" />
            <Card size="large" />
            <Card size="large" />
            <Card size="medium" />
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
}

export default PinterestLayout;