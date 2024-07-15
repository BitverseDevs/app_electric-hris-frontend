import { capitalize } from "@/utils/format-text"
import { Card } from "antd"
import { Fragment } from "react"

interface Props {
    dataList: any[],
    titleKey: string,
    excludeKeys: string[]
}

export default function CardList(props: Props) {
    const { dataList = [], titleKey, excludeKeys} = props

    const cleanKey = (key:string) => {
        const splitKeys = key.split("_")
        const capitalizeKeys = splitKeys.map(key => capitalize(key))
        return capitalizeKeys.join(" ")
    }
    return (
        <div className="flex flex-wrap justify-center w-fit gap-4">
            {
                dataList.map((data,index) => (
                    <Card title={data[titleKey]} bordered={false} className="w-56 shadow-2xl" key={index}>
                        {Object.keys(data).map((key:string, dataIndex:number) => !excludeKeys.includes(key) && (<p key={dataIndex}><b>{cleanKey(key)}</b>{`: ${data[key]}`}</p>)
                        )}
                    </Card>
                ))
            }
        </div>
    )
}