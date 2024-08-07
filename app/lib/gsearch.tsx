'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function GlobalSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            window.open(googleSearchUrl, '_blank');
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="global-search" className="sr-only">
                Global Search
            </label>
            <input
                id="global-search"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="Search on Google..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </form>
    );
}
