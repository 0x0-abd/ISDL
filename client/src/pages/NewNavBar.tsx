/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/87FszxrAaMz
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "../components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "../components/ui/sheet"
import { Link, useLocation } from 'react-router-dom'
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "../components/ui/navigation-menu"
import React, { useEffect, useState } from "react"

let tabs = [
  { id: "", label: "All" },
  { id: "bakery", label: "Bakery" },
  { id: "fruits", label: "Fruits" },
  { id: "snacks", label: "Snacks" },
  { id: "personal", label: "Personal" },
];

export default function NewNavbar() {
  let location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    const parts = location.pathname.split('/')
    console.log(parts[parts.length - 1])
    setActiveTab(parts[parts.length - 1])
  }, [location])

  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Company Logo</span>
            </Link>
            <div className="grid gap-2 py-6">
              {tabs.map((tab) => (
                <Link key={tab.id} to={`/shop/${tab.id}`}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? " bg-sky-500 bg-opacity-25" : "hover:opacity-50"} flex w-full items-center py-2 text-lg font-semibold`}
                  >
                    {tab.label}
                  </button>
                </Link>
              ))}
              {/* <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/shop" onClick={()=>setActive('')}>
              All
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/shop/bakery" onClick={()=>setActive('bakery')}>
              Bakery
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/shop/fruits" onClick={()=>setActive('fruits')}>
              Fruits
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/shop/snacks" onClick={()=>setActive('snacks')}>
              Snacks
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/shop/personal" onClick={()=>setActive('personal')}>
              Personal
            </Link> */}
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" to="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Company Logo</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {tabs.map((tab) => (
              <NavigationMenuLink asChild key={tab.id}>
                <Link
                  className={`${activeTab === tab.id ? "bg-cyan-600 text-indigo-700 bg-opacity-25 hover:opacity-50" : "hover:opacity-50"} group inline-flex h-9 w-max hover:scale-110 duration-200 items-center justify-center rounded-md bg-white px-4 py-2 text-xl`}
                  to={`/shop/${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="p-0 m-0">
                    <p className="p-0 m-0">
                      {tab.label}
                    </p>

                  </div>
                </Link>
              </NavigationMenuLink>
            ))}
            {/* <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              to="/shop"
              onClick={() => setActive('')}
            >
              All
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              to="/shop/bakery"
              onClick={() => setActive('bakery')}
            >
              Bakery
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              to="/shop/fruits"
              onClick={() => setActive('fruits')}
            >
              Fruits
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              to="/shop/snacks"
              onClick={() => setActive('snacks')}
            >
              Snacks
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 
              dark:data-[state=open]:bg-gray-800/50"
              to="/shop/personal"
              onClick={() => setActive('personal')}
            >
              Personal
            </Link>
          </NavigationMenuLink> */}
          </NavigationMenuList>
        </NavigationMenu>


        <div className="hidden w-full lg:block">
          <Link className="nav-link active float-right" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-10 h-10" width="30px">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </Link>
        </div>
      </header>
    </>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-home duration-200 hover:scale-110">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </svg>
  )
}
