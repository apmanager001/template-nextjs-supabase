'use client'
import React, {useEffect} from 'react'
import Link from 'next/link';
import {User, Search} from "lucide-react";
import userStore from '../store/userStore'


const UserInfo = () => {
  const user = userStore((state) => state.user);
  const validateSession = userStore((state) => state.validateSession);

    useEffect(() => {
      validateSession();
    }, []);

  return (
    <div className="relative">
      {user ? (
        <div className="flex items-center gap-4 mr-4">
            <div className="flex items-center gap-4">
                <Link
                href={`/`}
                data-name="profile"
                aria-label="This link will take you to your profile"
                >
                    <User size={32} />
                </Link>
            
            </div>
        </div>
      ) : (
        <div className='flex justify-center items-center gap-4 mr-2 '>
            <Link href="/" className="btn btn-ghost hidden lg:flex" aria-label='This link will take you to login page'>
                <Search />
            </Link>
            <Link href="/login" className="btn btn-ghost" aria-label='This link will take you to login page'>
                Sign In
            </Link>
        </div>
      )}
    </div>
  );
}

export default UserInfo;