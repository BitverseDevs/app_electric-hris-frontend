import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { GetProp, message, Upload, UploadProps } from 'antd';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePicture() {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
    
    const getBase64 = (img: FileType, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    const validateImage = (file: FileType) => {

        const validFileTypes = ['image/jpeg', 'image/png', 'image/jpg']
        const validFileSize = 5 // 5mb
        const fileSizeInMB = file.size / 1024 / 1024

        // Start Validating
        const isImageTypeValid = validFileTypes.includes(file.type);
        const isValidFileSize = fileSizeInMB < validFileSize;

        // Display Error Message
        if(!isImageTypeValid) message.error('You can only upload JPG/PNG file!');
        if (!isValidFileSize) message.error('Image must smaller than 5MB!');
        

        return isImageTypeValid && isValidFileSize;
    }
    const beforeUpload = (file: FileType) => {
        return validateImage(file)
    };

    const handleChange: UploadProps['onChange'] = (info) => {


        console.log(info.file)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }

        if (info.file.status === 'error') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
            message.error('Something went wrong');
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    const customRequest = ({ file, onSuccess, onError }: any) => {
        // Prevent the default upload behavior
        console.log('Custom request:', file);
        onSuccess(null, file); // Simulate successful upload
    };


    return (                        
        <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            // action={action}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            customRequest={customRequest}
        >
            {imageUrl ? 
                <img
                    src={imageUrl} 
                    alt="avatar" 
                    className='h-full w-full rounded-full'
                />
                : uploadButton
            }
        </Upload>
    )
}