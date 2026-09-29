

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">

      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="bannerBooks" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="m:text-5xl text-2xl font-medium mb-7">New Releases this Week</h1>
        <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus eos non quisquam vero minima et commodi porro accusamus velit cumque, ratione enim incidunt officia quis eaque cupiditate, animi quos ab iusto. Sapiente consectetur voluptatibus, inventore quos quae accusamus. Nobis quibusdam sint nisi dolorem delectus.
        </p>

        <button className="btn-primary">Subscribes</button>
      </div>
    </div>
  )
}

export default Banner
