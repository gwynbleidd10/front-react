import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook';
import { MDBDataTable } from 'mdbreact';

export const StatusPage = () => {
    const [data, setData] = useState("")
    const { loading, error, request } = useHttp()

    const getData = async () => {
        const res = await request('/api/esed/status')
        setData(res)
        console.log('s')
    }

    function Load(props) {
        if (props.loading) {
            return <div>Loading...</div>
        }
        let url;
        if (process.env.NODE_ENV == 'production') {
            url = "https://botsnode.herokuapp.com/api/esed/status"
        }
        else {
            url = "/api/esed/status"
        }

        return (
            <MDBDataTable
                searchLabel="Поиск"
                barReverse={true}
                entries={20}
                entriesLabel="Записей на страницу"
                data={url}
            />
        )
    }

    return (
        <>
            <button onClick={getData}>Обновить</button>
            <Load loading={loading} />
        </>
    )
}