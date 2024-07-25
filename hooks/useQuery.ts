import api from "@/utils/axios-config"
import { message } from "antd"
import { useState } from "react"

interface QueryDataType {
    data: any,
    loading: boolean
    error: any
    status: "loading" | "success" | "error" | null
}

type StatusType = "loading" | "success" | "error" | "info" | "warning"

type QueryPayloads = {
    fn: () => Promise<any>,
    onSuccess: (() => void) | null,
    onFail: (() => void) | null,
    successMessage: string | null
}


export const useQuery = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [queryData, setQueryData] = useState<QueryDataType>({
        data: null,
        loading:false,
        error: null,
        status: null
    })

    const query = (payloads: QueryPayloads) => {

        const {fn, onSuccess, onFail, successMessage} = payloads

        setQueryData(curr => ({
            data: null,
            loading: true,
            error: null,
            status: "loading"
        }))

        showAlert("loading", "Loading")

        fn()
            .then(res => {
                setQueryData(curr => ({
                    data: res.data,
                    loading: false,
                    error: null,
                    status: "success"
                }))

                if(onSuccess) onSuccess()
                showAlert("success", successMessage || "Request Successful")
            })
            .catch(err => {
                setQueryData(curr => ({
                    data: null,
                    loading: false,
                    error: err?.response?.data,
                    status: "error"
                }))

                if(onFail) onFail()
                showAlert("error", err?.response?.data || "Something Went Wrong")
            })
    }
    const showAlert = (status: StatusType, message:string) => {
        messageApi.open({
            key: 1,
            type: status,
            content: message,
        })
    }

    return {
        ...queryData,
        contextHolder,
        query
    }
}