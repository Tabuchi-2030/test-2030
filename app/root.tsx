import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import './styles/base.css';
import "./styles/tailwind.css";

import Header from './components/structure/header';
import Footer from './components/structure/footer';


const RootLayout: FC = () => {
 return (
   <html lang="en">
     <head>
       <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <Meta />
       <Links />
     </head>
     <body>
       <Header />
       <Outlet />
       <Footer />
       <ScrollRestoration />
       <Scripts />
     </body>
   </html>
 );
};

export default RootLayout;
