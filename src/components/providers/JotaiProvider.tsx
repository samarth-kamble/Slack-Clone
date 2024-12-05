"use client"

import React from 'react'

import {Provider} from "jotai"

interface JotaiProviderProps {
    children: React.ReactNode
}

const JotaiProvider = ({children}:JotaiProviderProps) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}
export default JotaiProvider
