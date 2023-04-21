const ProjectTile = ({ data }: any) => {
  //   const { name, imgUrl, description, url } = data;

  return (
    <>
      <article className="card grid my-4 gap-4 shadow-md overflow-hidden h-[430px] max-w-[22rem] rounded-md">
        <img
          className="card__background w-full h-full max-w-full object-fit-cover"
          src={data.imgUrl}
          alt={data.name}
        />
        <div className="card__content | flow flex flex-col justify-between self-end h-[55%]">
          <div className="card__content--container | flow">
            <h2 className="card__title capitalize">{data.name}</h2>
            <p className="text-left">{data.description}</p>
          </div>
          <button className="card__button rounded-md border-0 font-medium bg-primaryTextColor font-base w-fit px-2 py-1 shadow-md hover:bg-secondary transition-all duration-300">
            Preview
          </button>
        </div>
      </article>
    </>
  );
};

export default ProjectTile;
