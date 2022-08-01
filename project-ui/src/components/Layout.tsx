import {Outlet, Link} from 'react-router-dom';

interface Props { 
    children: React.ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <div>
            <div className="w-full h-14 bg-green-500">
                <div className='h-full flex items-center gap-4 ml-3'>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
           {children}
        </div>
    )
}