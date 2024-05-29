import SideBar from './SideBar';
import { Ubuntu_Mono} from 'next/font/google'
const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
export default function Layout({ children }) {
    return (
        <div className='max-w-screen'>
        <SideBar />
        
        <main className={`${mono.className} flex flex-col items-end justify-center min-h-screen py-2`}>
            {children}
        </main>
        </div>
    );}