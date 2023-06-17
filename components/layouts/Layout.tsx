import React from 'react'
import { FC } from 'react'
import Head from 'next/head'
import { Props } from '@nextui-org/react/esm/input/input-props'
import { Navbar } from '../ui'

export const Layout: React.FC<Props> = ({ children, title }): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Benjamín La Valla'></meta>
                <meta name='descripton' content={`Información del pokemon ${title}`}></meta>
                <meta name='keywords' content={`${title}, pokemon, pokedex`}></meta>
            </Head>

            <Navbar></Navbar>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>


        </>
    )
}
