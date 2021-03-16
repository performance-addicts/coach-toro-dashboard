import React from 'react'
import {
    TD,
    TDTARGET,
    TDOVER,
    TDUNDER,
    TXTOVER,
    TXTUNDER
} from './Styles';

function CellRenderer ({ values, element, value, formatter, renderer, delta }) {
    const valueFormatter = formatter ? formatter : (v) => v
    const valueRendered = values.length ? valueFormatter(values[element][value]) : undefined;
    const deltaRendered = values.length ? valueFormatter(delta[element][value]) : undefined; 
    
    if(!renderer) return <TD>{valueRendered}</TD>
    return renderer(valueRendered, deltaRendered)
}

function targetRenderer (value, delta) {
    return (
        <TDTARGET>
            {value}
        </TDTARGET>
    )
}

function valueRenderer (value, delta) {
    const CellType = delta.includes('-') || delta.includes('0s') || delta.includes('0kb') ? TDUNDER : TDOVER;
    return (
        <CellType>
            {value}
        </CellType>
    )
}

function readoutRenderer (value, delta) {
    const CellType = delta.includes('-') || delta.includes('0s') || delta.includes('0kb') ? TXTUNDER : TXTOVER;
    return (
        <CellType>
            {value}
        </CellType>
    )
}

export {
    CellRenderer,
    readoutRenderer,
    targetRenderer,
    valueRenderer
} 

