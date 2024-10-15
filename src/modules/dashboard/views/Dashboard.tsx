import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { getComments } from '../services/comments';
import { COMMENTS_PER_PAGE } from '../../../api/api';

import { HiChevronLeft, HiEye, HiChevronRight } from "react-icons/hi";
import AnimatedLoading from '../../shared/Loading';
import DetailModal from '../components/DetailModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [commentId, setCommentId] = useState('');
  const { data, isLoading } = useQuery<{ data: { id: number; name: string; email: string; }[]; totalCount: number }>({
    queryKey: ['comments', page],
    queryFn: () => getComments(page),
  });

  useEffect(() => {
    const validateSession = localStorage.getItem('session');
    if (!validateSession) {
      navigate('/auth/login')
    }
  }, [])

  const openCommentModal = (id: string) => {
    setIsOpen(true);
    setCommentId(id);
  }

  const closeCommentModal = () => {
    setIsOpen(false);
    setCommentId('');
  }
  const totalPages = Math.ceil(data?.totalCount! / COMMENTS_PER_PAGE);

  return (
    <MainLayout>
      <div className="h-full px-2 overflow-hidden lg:px-14">
        <div className="w-full max-w-full px-2 overflow-hidden lg:px-10">
          <div className="overflow-x-auto ">
            {isLoading ? <div className="h-[500px] flex items-center justify-center bg-white px-2 py-4">
              <AnimatedLoading />
            </div> :
              <div className=" max-h-[800px] hide-scrollbar m-w-[1200px]">
                <table className="w-full mt-10 table-auto bg-gray-50">
                  <thead className="text-purple-800 bg-purple-200">
                    <tr>
                      <th className="px-4 py-2 text-left">ID</th>
                      <th className="px-4 py-2 text-left">Nombre</th>
                      <th className="px-4 py-2 text-left">Email</th>
                      <th className="px-4 py-2 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.map((comment: any) => (
                      <tr key={comment.id} className="border-b">
                        <td className="px-4 py-2">{comment.id}</td>
                        <td className="px-4 py-2">{comment.name}</td>
                        <td className="px-4 py-2">{comment.email}</td>
                        <td className="px-4 py-2">
                          <button onClick={() => openCommentModal(comment.id)}>
                            <HiEye className='text-2xl' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center justify-between px-2 py-4 border-b shadow-xl bg-gray-50">
                  <span className="text-sm text-gray-700">
                    Page {page} of {totalPages} - Total items {data?.totalCount}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setPage((old) => Math.max(old - 1, 1))}
                      disabled={page === 1}
                      className="flex items-center px-3 py-1 text-lg font-bold text-white bg-purple-400 rounded-l disabled:opacity-50"
                    >
                      <HiChevronLeft />
                      <p> Anterior</p>
                    </button>
                    <button
                      onClick={() => setPage((old) => (old < totalPages ? old + 1 : old))}
                      // disabled={isPreviousData || page === totalPages}
                      className="flex items-center px-3 py-1 text-lg font-bold text-white bg-purple-500 rounded-r disabled:opacity-50"
                    >
                      <p> Siguiente</p>

                      <HiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            }
          </div>

        </div>
      </div>
      <DetailModal isOpen={isOpen} onClose={closeCommentModal} commentId={commentId} />
    </MainLayout>
  )
}

export default Dashboard