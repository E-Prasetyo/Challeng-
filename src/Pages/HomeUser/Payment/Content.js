import * as React from 'react';
import { CheckCircleIcon, DownloadIcon } from '@heroicons/react/outline'
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import myPDF from '../../../Assets/pdf/pdf-open-parameters.pdf'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Content = () => {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

  return (
    <div className='py-10 '>
        <div className="flex flex-col ">
            <div className='flex justify-center'>
                <CheckCircleIcon 
                    className='fill-emerald-500'  
                    width={100}
                />
            </div>
            <p className='text-center font-bold text-lg'>
                Pembayaran Berhasil
            </p>
            <p className='text-center text-gray-400'>
                Tunjukan invoice ini ke petugas BCR titik temu
            </p>
        </div>
        <div className='py-10 flex justify-center items-center'>
            <div className='p-5 border-2 w-100 shadow-sm'>
                <div className='flex flex-row justify-between'>
                    <div className=''>
                        <p className='font-bold '>Invoice</p>
                        <p className='text-gray-400'>*no invoice</p>
                    </div>
                    <div className=''>
                        <Download>
                            {(props) => (
                                <button 
                                    className='
                                        p-2 border-2 border-blue-800 flex
                                        flex-row gap-2 rounded-lg font-bold
                                        text-blue-800 hover:bg-blue-600
                                        hover:text-black group'
                                        onClick={props.onClick}
                                    >
                                    Unduh 
                                    <DownloadIcon 
                                        className='w-5 text-blue-800 group-hover:text-black'
                                    />
                                </button>
                            )}
                        </Download>
                    </div>
                </div>
                <div className='border-2 my-5'>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                        <div
                            style={{
                                height: '600px',
                                width: '900px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        >
                            <Viewer
                                // fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`}
                                fileUrl={myPDF}
                                plugins={[
                                    // defaultLayoutPluginInstance, 
                                    getFilePluginInstance
                                ]}
                            />
                        </div>
                    </Worker>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content