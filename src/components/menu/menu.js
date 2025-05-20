import './menu.css'

export const Menu = () => {
    return (
        <nav className="menu">
            <a href="/" className="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"
                     stroke-width="0" fill="currentColor" stroke="currentColor" className="icon">
                    <path
                        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                </svg>
            </a>
            <a href="/lists" className="menu-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em">
                    <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </a>
            <a href="/messages" className="menu-item">
                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g fill="#fff" fill-rule="evenodd">
                            <path d="M20.43 0H3.57A3.572 3.572 0 0 0 0 3.57v8.86A3.572 3.572 0 0 0 3.57 16H5v3c0 .85.538 1.608 1.34 1.89a2.006 2.006 0 0 0 2.22-.64l3.4-4.25h8.47A3.572 3.572 0 0 0 24 12.43V3.57A3.572 3.572 0 0 0 20.43 0zM22 12.43A1.579 1.579 0 0 1 20.43 14H11l-4 5v-5H3.57A1.579 1.579 0 0 1 2 12.43V3.57A1.579 1.579 0 0 1 3.57 2h16.86A1.579 1.579 0 0 1 22 3.57v8.86z"></path> <circle cx="6" cy="8" r="2"></circle> <circle cx="12" cy="8" r="2"></circle> <circle cx="18" cy="8" r="2"></circle>
                        </g>
                    </g>
                </svg>
            </a>
        </nav>
    );
}