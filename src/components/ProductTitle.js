import React from 'react'
import styled from 'styled-components'

export default function ProductTitle({name, title}) {
    return (
        <div className='row'>
            <div className='col-10 mx-auto text-center'>
                <h1>{name} {title}</h1>
            </div>
        </div>
    )
}