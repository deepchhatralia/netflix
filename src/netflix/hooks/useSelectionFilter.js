import React from 'react'

export default function useSelectionFilter({ series, films }) {
    return {
        series: [
            { title: 'Documentaries', data: series?.filter(val => val.genre === 'documentaries') },
            { title: 'Comedy', data: series?.filter(val => val.genre === 'comedies') },
            { title: 'Children', data: series?.filter(val => val.genre === 'children') },
            { title: 'Crime', data: series?.filter(val => val.genre === 'crime') },
            { title: 'Feel Good', data: series?.filter(val => val.genre === 'feel-good') }
        ],
        films: [
            { title: 'Drama', data: films?.filter(val => val.genre === 'drama') },
            { title: 'Thriller', data: films?.filter(val => val.genre === 'thriller') },
            { title: 'Children', data: films?.filter(val => val.genre === 'children') },
            { title: 'Suspense', data: films?.filter(val => val.genre === 'suspense') },
            { title: 'Romance', data: films?.filter(val => val.genre === 'romance') }
        ]
    }
}