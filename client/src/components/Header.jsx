import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaUser } from "react-icons/fa";

export default function Header() {
  const path = useLocation.pathname;
  return (
    <Navbar className='border-b'>
      <Link
        to={"/"}
        className='font-bold dark:text-white text-xl'>
        Emu's Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden md:inline'
        />
      </form>
      <Button
        className='md:hidden bg-transparent text-gray-700 dark:text-white hover:text-white'
        size='lg'>
        <AiOutlineSearch />
      </Button>
      <div className='flex items-center gap-2 md:order-2'>
        <Button color='black'>
          <FaMoon />
        </Button>
        <Link to='/signin'>
          <Button
            className='flex gap-2 items-center'
            color='dark'>
            <FaUser className='mr-2 h-4 w-4' />
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href='/'
          active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href='/about'
          active={path === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link
          href='/projects'
          active={path === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
