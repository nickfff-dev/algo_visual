import SideBar from './SideBar';
import { Ubuntu_Mono} from 'next/font/google'
const mono = Ubuntu_Mono({subsets: ['latin'], weight: ['400', '700']})
export default function Layout({ children }) {
    return (
        <div className=''>
        <SideBar />
        
        <main className={`${mono.className} flex flex-col justify-center items-end h-screen lg:overflow-x-hidden py-2 max-w-6xl  w-2xl lg:w-6xl mx-auto`}>
            {children}
        </main>
        </div>
    );}