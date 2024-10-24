import profile from '../../assets/images/profile.png'

const Header = () => {
     return (
          <header className='flex justify-between items-center p-10 mx-6 border-b-2'>
               <h1 className='text-4xl '>Knowledge cafe</h1>
               <img src={profile} alt="" />
          </header>
     );
};

export default Header;