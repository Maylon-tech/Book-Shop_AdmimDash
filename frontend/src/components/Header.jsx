

const Header = () => {
  return (
    <div className="bg-blue-800/80 w-full h-[65px] flex items-center justify-between px-8">
        <h2 className='text-2xl text-orange-400700 font-bold'>LOGO</h2>
        <ul className="flex gap-6 text-blackBG">
                <li>Homepage</li>
                <li>About</li>
                <li>Cart</li>
        </ul>

        <div className="flex gap-2">
            <div>MENU</div>
            <div>Avatar</div>
        </div>
    </div>
  )
}

export default Header
