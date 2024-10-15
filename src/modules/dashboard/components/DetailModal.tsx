import React from 'react'
import { HiX } from "react-icons/hi";
import { useCommentDetail } from '../../hooks/useComment';

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  commentId: string;
}

const DetailModal = ({ isOpen, onClose, commentId }: DetailModalProps) => {

  const { data: comment, isLoading } = useCommentDetail(commentId);
  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-lg pb-4 bg-white rounded-lg shadow-xl">
        <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
          <h3 className="text-2xl font-semibold">Comment - {comment?.id || ''}</h3>
          <button
            className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
            onClick={onClose}
          >
            <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
              <HiX />
            </span>
          </button>
        </div>

        {!isLoading ? <div className="relative flex-auto p-6 text-md">
          <p><span className='font-bold'>Name:</span> {comment?.name}</p>
          <p className='mt-2'><span className='font-bold'>Email:</span>  {comment?.email}</p>
          <p className='mt-4 text-lg'> {comment?.body}</p>
        </div>
          : <div className="flex items-center justify-center px-2 py-4 bg-white ">
            <div className="w-16 h-16 mb-4 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
          </div>}

      </div>
    </div>
  )
}

export default DetailModal