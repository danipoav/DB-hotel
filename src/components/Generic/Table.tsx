import React, { useState } from 'react'
import { Name, ID, Text, Th, Tr, Td, TextPrice, LoaderText, Loader, LoadingContainer, Dots, Circle, MenuItems, MenuItem } from '../../styles/Generic/HeaderTable.styles';
import { SlOptionsVertical } from "react-icons/sl";


interface TableProps {
    titles: { key: string, name: string, width?: string }[];
    datas: any[];
    actions: {
        remove: (id: string) => void
        view: (id: string) => void
    };
    activeFilter?: string;
    loading: boolean
}

export default function Table({ titles, datas, actions, activeFilter, loading }: TableProps) {
    const [menu, setMenu] = useState<null | string>(null)

    const toggleMenu = (id: string) => {
        setMenu(menu === id ? null : id)
    }

    const filteredDatas = datas.filter((data) => {
        if (!activeFilter) return true;
        return data.status === activeFilter;
    })

    const finalDatas = filteredDatas.length === 0 ? datas : filteredDatas

    return (
        <>
            {loading ?
                <LoadingContainer>
                    <Loader>
                        <LoaderText>Loading</LoaderText>
                    </Loader>
                    <Dots>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </Dots>
                </LoadingContainer> :
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <Tr>
                            <Th>Name</Th>
                            {titles.map((title) =>
                                <Th key={title.key}>
                                    {title.name}
                                </Th>
                            )}
                            <Th></Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {finalDatas.map((data) => (
                            <Tr key={data.id}>
                                <Td>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                                        <img src={data.photo} alt={`Guest ${data.name}`} style={{ height: '100px', width: '100px', borderRadius: '10px' }} />
                                        <div style={{ textAlign: 'left' }}>
                                            <Name>{data.name}</Name>
                                            <ID style={{ fontSize: '0.4em' }}>#{data.id}</ID>
                                        </div>
                                    </div>
                                </Td>
                                {titles.map((title) => (
                                    <Td key={title.key} style={{ width: title.width || 'auto' }}>
                                        {Array.isArray(data[title.key])
                                            ? (<Text status=''>{data[title.key].join(', ')}</Text>)
                                            : title.key === 'price' ? (
                                                <>
                                                    <TextPrice>{data[title.key]}$ <span>/night</span></TextPrice>

                                                </>
                                            ) : (
                                                <>
                                                    <Text status={data[title.key]}>{data[title.key]}</Text>
                                                </>
                                            )
                                        }
                                    </Td>
                                ))}
                                <Td>
                                    <SlOptionsVertical size={18} onClick={() => toggleMenu(data.id)} style={{ cursor: 'pointer' }} />
                                    {menu === data.id && (
                                        <MenuItems>
                                            <MenuItem onClick={() => actions.view(data.id)} className='view'>View / Edit</MenuItem>
                                            <MenuItem onClick={() => actions.remove(data.id)} className='remove'>Remove</MenuItem>
                                        </MenuItems>)}
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </table>}
        </>
    )
}
